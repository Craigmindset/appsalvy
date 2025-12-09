-- Supabase SQL migration: admin table
create table if not exists admin (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text,
  role text not null default 'admin',
  created_at timestamp with time zone default timezone('utc'::text, now())
);
