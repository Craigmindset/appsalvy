-- Insert admin user with hashed password
-- Email: salvyweb1@gmail.com
-- Password: Salvyweb1#!57
-- SHA-256 hash of 'Salvyweb1#!57': abbb1424c66c142e48d865eb3d3694b3ee72db8db813e5505eba02b3531999e3

INSERT INTO public.admin (email, password, name, role)
VALUES ('salvyweb1@gmail.com', 'abbb1424c66c142e48d865eb3d3694b3ee72db8db813e5505eba02b3531999e3', 'Admin User', 'admin')
ON CONFLICT (email) 
DO UPDATE SET 
  password = EXCLUDED.password,
  updated_at = NOW();

-- You can add more admin users here if needed
-- To generate a password hash, use: echo -n 'your-password' | sha256sum
