import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    const body = await request.json();

    const {
      business_name,
      is_registered,
      registration_date,
      business_number,
      website,
      first_name,
      last_name,
      position,
      email,
      phone,
      linkedin,
      business_ideology,
      funded_before,
      fund_provider,
      fund_amount,
      fund_stage,
      team,
      business_pitch_url,
      track_records_url,
      attest,
    } = body;

    // Insert the application into the database
    const { data, error } = await supabase
      .from("founder_applications")
      .insert([
        {
          business_name,
          is_registered,
          registration_date: registration_date || null,
          business_number: business_number || null,
          website,
          first_name,
          last_name,
          position,
          email,
          phone,
          linkedin,
          business_ideology: business_ideology || null,
          funded_before,
          fund_provider: fund_provider || null,
          fund_amount: fund_amount || null,
          fund_stage: fund_stage || null,
          team: team || [],
          business_pitch_url: business_pitch_url || null,
          track_records_url: track_records_url || null,
          attest,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit application", details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Upload file to Supabase Storage
export async function PUT(request: Request) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const folder = formData.get("folder") as string;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("founder-docs")
      .upload(fileName, file, { upsert: false });

    if (error) {
      console.error("Upload error:", error);
      return NextResponse.json(
        { error: "Failed to upload file", details: error.message },
        { status: 500 }
      );
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("founder-docs")
      .getPublicUrl(fileName);

    return NextResponse.json({
      success: true,
      url: publicUrlData.publicUrl,
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
