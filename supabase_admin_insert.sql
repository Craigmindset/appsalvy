-- Insert admin user with hashed password
-- Email: salvyweb1@gmail.com
-- Password: Salvyweb1#!57
-- SHA-256 hash of 'Salvyweb1#!57': abbb1424c66c142e48d865eb3d3694b3ee72db8db813e5505eba02b3531999e3

insert into admin (email, password, name, role)
values ('salvyweb1@gmail.com', 'abbb1424c66c142e48d865eb3d3694b3ee72db8db813e5505eba02b3531999e3', 'Salvy Web', 'admin')
on conflict (email)
do update set
	password = excluded.password,
	updated_at = now();
