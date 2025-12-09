# Founder Application - Supabase Integration Guide

## Overview

The founder application form is now fully connected to Supabase. When users submit the form at `/founder-application`, their data is automatically saved to the `founder_applications` table in your Supabase database.

## Setup Steps

### 1. Database Table

The `founder_applications` table schema is already defined in `supabase_founder_applications.sql`. Make sure you've run this SQL in your Supabase SQL Editor.

**Columns included:**

- Personal info: `first_name`, `last_name`, `email`, `phone`, `position`, `linkedin`
- Business info: `business_name`, `website`, `is_registered`, `registration_date`, `business_number`, `business_ideology`
- Funding info: `funded_before`, `fund_provider`, `fund_amount`, `fund_stage`
- Team: `team` (JSONB array)
- Documents: `business_pitch_url`, `track_records_url`
- Metadata: `id`, `created_at`, `attest`

### 2. Storage Bucket for File Uploads

Run the SQL in `supabase_storage_bucket.sql` to create the storage bucket for document uploads:

```sql
-- This creates the 'founder-docs' bucket and sets up access policies
```

**To create the bucket in Supabase:**

1. Go to your Supabase Dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"New Bucket"**
4. Name it: `founder-docs`
5. Set it to **Public** (so URLs can be accessed)
6. Click **Create Bucket**

Alternatively, run the SQL from `supabase_storage_bucket.sql` in the SQL Editor.

### 3. Environment Variables

Ensure your `.env.local` file has the correct Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://rckokespfeqnkteerrld.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## How It Works

### Form Submission Flow

1. **User fills out the form** at `/founder-application`
2. **Files are uploaded** to Supabase Storage (`founder-docs` bucket)
3. **Form data is submitted** to `/api/founder-application` endpoint
4. **API route saves data** to `founder_applications` table using service role key
5. **Success message** is shown and user is redirected

### API Routes

#### `POST /api/founder-application`

Saves founder application data to the database.

**Request Body:**

```json
{
  "business_name": "string",
  "is_registered": "boolean",
  "registration_date": "string | null",
  "business_number": "string | null",
  "website": "string",
  "first_name": "string",
  "last_name": "string",
  "position": "string",
  "email": "string",
  "phone": "string",
  "linkedin": "string",
  "business_ideology": "string | null",
  "funded_before": "boolean",
  "fund_provider": "string | null",
  "fund_amount": "number | null",
  "fund_stage": "string | null",
  "team": "array",
  "business_pitch_url": "string | null",
  "track_records_url": "string | null",
  "attest": "boolean"
}
```

#### `PUT /api/founder-application`

Uploads files to Supabase Storage.

**Request:** FormData with `file` and `folder` fields

**Response:**

```json
{
  "success": true,
  "url": "https://..."
}
```

## Admin Dashboard

### Viewing Applications

Admin users can view all submitted applications at:

- **URL:** `/admin/user-management`
- **Features:**
  - View all applications in a table
  - Search by name, email, or business name
  - Click "View" to see full application details in a modal
  - Delete applications
  - See document links (business pitch, track records)

### Modal View

The modal displays all application fields organized into sections:

- Personal Information
- Business Information
- Funding Information
- Team Members
- Documents (with download links)
- Application Metadata

## Testing the Integration

1. **Submit a test application:**

   - Go to `/founder-application`
   - Fill out all required fields
   - Upload test documents (PDF, images, etc.)
   - Click Submit

2. **Verify in Supabase:**

   - Go to Supabase Dashboard → Table Editor
   - Select `founder_applications` table
   - You should see your test submission

3. **Check file uploads:**

   - Go to Supabase Dashboard → Storage → `founder-docs`
   - You should see uploaded files in `business-pitch/` and `track-records/` folders

4. **View in admin dashboard:**
   - Go to `/admin/user-management`
   - Login if required
   - You should see your test application in the table
   - Click "View" to see all details

## Troubleshooting

### "Failed to load applications" error

- Check that `SUPABASE_SERVICE_ROLE_KEY` is set in `.env.local`
- Verify the table name is `founder_applications` (with underscore)
- Check Supabase logs in the Dashboard

### File upload fails

- Ensure `founder-docs` bucket exists and is public
- Check storage policies allow uploads
- Verify file size is within limits (default 50MB)

### Form submission fails

- Check browser console for detailed error messages
- Verify all required fields are filled
- Check API route logs in terminal

## Next Steps

1. **Run the storage bucket SQL** in Supabase SQL Editor
2. **Test the form submission** with sample data
3. **Verify data appears** in admin dashboard
4. **Set up email notifications** (optional) when new applications are submitted
5. **Add application status management** (approved, rejected, pending)
