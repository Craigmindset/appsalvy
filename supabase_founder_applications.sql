-- Supabase SQL migration: founder_applications table
create table if not exists founder_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  business_name text not null,
  is_registered boolean,
  registration_date date,
  business_number text,
  website text not null,
  first_name text not null,
  last_name text not null,
  position text not null,
  email text not null,
  phone text not null,
  linkedin text not null,
  business_ideology text,
  funded_before boolean,
  fund_provider text,
  fund_amount numeric,
  fund_stage text,
  team jsonb,
  business_pitch_url text,
  track_records_url text,
  attest boolean not null default false
);

-- Example for team JSON:
-- [ { "name": "Alice", "email": "alice@email.com", "position": "CTO" }, ... ]
