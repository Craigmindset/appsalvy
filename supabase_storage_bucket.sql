-- Create storage bucket for founder application documents
-- Run this in your Supabase SQL Editor

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('founder-docs', 'founder-docs', true)
ON CONFLICT (id) DO NOTHING;

-- Set up storage policies to allow authenticated and anonymous uploads
-- Policy 1: Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'founder-docs');

-- Policy 2: Allow anyone to upload files
CREATE POLICY "Anyone can upload files"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'founder-docs');

-- Policy 3: Allow anyone to update their files
CREATE POLICY "Anyone can update files"
ON storage.objects FOR UPDATE
USING (bucket_id = 'founder-docs')
WITH CHECK (bucket_id = 'founder-docs');

-- Policy 4: Allow anyone to delete files (optional - you may want to restrict this)
CREATE POLICY "Anyone can delete files"
ON storage.objects FOR DELETE
USING (bucket_id = 'founder-docs');
