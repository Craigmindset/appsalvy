import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

type KeepAliveResult = {
  ok: boolean;
  touchedAt: string;
  count?: number | null;
  error?: string;
};

export async function GET(req: NextRequest) {
  const expectedSecret = process.env.KEEPALIVE_SECRET;
  const suppliedSecret =
    req.headers.get("x-keepalive-secret") ??
    req.nextUrl.searchParams.get("token");

  if (!expectedSecret || suppliedSecret !== expectedSecret) {
    return NextResponse.json<KeepAliveResult>(
      {
        ok: false,
        touchedAt: new Date().toISOString(),
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json<KeepAliveResult>(
      {
        ok: false,
        touchedAt: new Date().toISOString(),
        error: "Supabase configuration missing",
      },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  });

  const { count, error } = await supabase
    .from("admin")
    .select("id", { count: "exact", head: true })
    .limit(1);

  if (error) {
    return NextResponse.json<KeepAliveResult>(
      {
        ok: false,
        touchedAt: new Date().toISOString(),
        error: "Keepalive query failed",
      },
      { status: 500 }
    );
  }

  return NextResponse.json<KeepAliveResult>(
    {
      ok: true,
      touchedAt: new Date().toISOString(),
      count,
    },
    {
      status: 200,
      headers: {
        "cache-control": "no-store",
      },
    }
  );
}
