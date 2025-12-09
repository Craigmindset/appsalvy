-- Insert admin user with hashed password
-- Email: admin@salvyventure.com
-- Password: admin123456
-- SHA-256 hash of 'admin123456': 240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9

INSERT INTO public.admin (email, password, name, role)
VALUES ('salvyweb1@gmail.com', '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', 'Admin User', 'admin')
ON CONFLICT (email) 
DO UPDATE SET 
  password = EXCLUDED.password,
  updated_at = NOW();

-- You can add more admin users here if needed
-- To generate a password hash, use: echo -n 'your-password' | sha256sum
