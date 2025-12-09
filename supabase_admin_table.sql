-- Supabase SQL migration: admin table
CREATE TABLE IF NOT EXISTS public.admin (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  name TEXT,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_admin_email ON public.admin(email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.admin ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists, then create it
DROP POLICY IF EXISTS "Service role has full access to admin table" ON public.admin;
CREATE POLICY "Service role has full access to admin table"
ON public.admin
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_admin_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS update_admin_updated_at_trigger ON public.admin;
CREATE TRIGGER update_admin_updated_at_trigger
BEFORE UPDATE ON public.admin
FOR EACH ROW
EXECUTE FUNCTION update_admin_updated_at();

