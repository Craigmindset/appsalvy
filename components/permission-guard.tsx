"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export function PermissionGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session);
      setLoading(false);
      if (!session) {
        router.replace("/login");
      }
    };
    checkAuth();
  }, [router]);

  if (loading) {
    return <div className="text-center py-12">Checking authentication...</div>;
  }
  if (!authenticated) {
    return null;
  }
  return <>{children}</>;
}
