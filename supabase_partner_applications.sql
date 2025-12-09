-- Supabase SQL migration: partner_applications table
CREATE TABLE IF NOT EXISTS partner_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  organization_name TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  linkedin TEXT NOT NULL,
  website TEXT NOT NULL
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_partner_applications_created_at 
  ON partner_applications(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_partner_applications_email 
  ON partner_applications(email);
