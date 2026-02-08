# Supabase Image Upload Guide

This guide will help you upload your website photos to Supabase Storage.

## Prerequisites

1. **Supabase Account**: Make sure you have a Supabase project set up
2. **Environment Variables**: Your `.env.local` file should have:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

## Step 1: Create Storage Buckets

You need to create storage buckets in your Supabase dashboard:

### For Product Images:
1. Go to your Supabase Dashboard
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Name it: `products`
5. Make it **Public** (so images can be accessed without authentication)
6. Click **"Create bucket"**

### For Logo Images (Optional):
1. Create another bucket named: `logos`
2. Make it **Public**
3. Click **"Create bucket"**

### For Hero Section Image:
1. Create another bucket named: `hero`
2. Make it **Public**
3. Click **"Create bucket"**

## Step 2: Upload Images via Supabase Dashboard

### Upload Product Images:
1. Go to **Storage** → **products** bucket
2. Click **"Upload file"** or drag and drop your images
3. Upload your product images (PNG, JPG, or WebP format recommended)
4. Name your files clearly (e.g., `usb-c-cable.jpg`, `fast-charger.png`)

### Upload Logo:
1. Go to **Storage** → **logos** bucket
2. Upload your logo file (e.g., `chargeup-logo.png`)

### Upload Hero Section Image:
1. Go to **Storage** → **hero** bucket
2. Upload your hero image (e.g., `hero-image.jpg`)
3. Recommended size: 1200x1200px or larger (square format works best)
4. This will replace the default icon in the hero section

## Step 3: Update Your Code

### For Product Images:
After uploading, update `components/Products.tsx` to include the `imagePath` property:

```typescript
{
  id: '1',
  name: 'USB-C Cables',
  description: '...',
  price: 'Le25',
  whatsappLink: '...',
  imagePath: 'usb-c-cable.jpg', // Add this line with your uploaded filename
  // Remove the icon property if you're using images
},
```

### For Logo:
Update `components/Navigation.tsx` line 20:

```typescript
const LOGO_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'logos', 
  path: 'chargeup-logo.png' // Your logo filename
}
```

### For Hero Section Image:
Update `components/Hero.tsx` line 9:

```typescript
const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'hero', 
  path: 'hero-image.jpg' // Your hero image filename
}
```

Or set to `null` to use the default icon display.

## Step 4: Set Bucket Policies (Important!)

Make sure your buckets are publicly accessible:

1. Go to **Storage** → Select your bucket (e.g., `products`)
2. Click on **"Policies"** tab
3. Click **"New Policy"**
4. Select **"For full customization"**
5. Add this policy:

```sql
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'products');
```

Repeat for the `logos` and `hero` buckets if you created them.

## Alternative: Upload via Code

If you prefer to upload programmatically, you can use the helper script in `lib/upload-images.ts` (see below).

## Image Naming Tips

- Use lowercase letters and hyphens: `usb-c-cable.jpg`
- Keep filenames descriptive but short
- Recommended formats: JPG (for photos), PNG (for logos/transparent images), WebP (for optimized images)
- Recommended sizes:
  - Product images: 800x800px or 1000x1000px (square)
  - Logo: 200x200px to 400x400px
  - Hero image: 1200x1200px or larger (square format recommended)

## Troubleshooting

**Images not showing?**
- Check that the bucket is set to **Public**
- Verify the bucket policies allow public read access
- Make sure the filename in `imagePath` matches exactly (case-sensitive)
- Check your browser console for any CORS errors

**Getting CORS errors?**
- Make sure your bucket policies are set correctly
- Verify your `NEXT_PUBLIC_SUPABASE_URL` is correct in `.env.local`

