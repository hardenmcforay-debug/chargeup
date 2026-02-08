# Hero Image Setup Guide

## Quick Fix: Configure Your Hero Image

The hero image is not showing because the configuration is set to `null`. Follow these steps:

### Step 1: Check Your Supabase Upload

1. Go to your Supabase Dashboard
2. Navigate to **Storage**
3. Find your bucket (should be named `hero` or similar)
4. Note the **exact filename** of your uploaded image (case-sensitive!)

### Step 2: Update the Configuration

Open `components/Hero.tsx` and find line 12:

**Current (shows icon):**
```typescript
const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = null
```

**Change to (replace with your details):**
```typescript
const HERO_IMAGE_CONFIG: { bucket: string; path: string } | string | null = { 
  bucket: 'hero',  // Your bucket name
  path: 'your-image-filename.jpg'  // Your exact filename
}
```

### Step 3: Verify Your Setup

1. **Bucket name**: Make sure it matches exactly (e.g., `hero`, `images`, etc.)
2. **Filename**: Must match exactly including extension (e.g., `hero.jpg`, `hero-image.png`)
3. **Bucket is Public**: Go to Storage → Your bucket → Settings → Make sure it's set to Public
4. **Bucket Policy**: Make sure public read access is enabled

### Step 4: Check Browser Console

After updating, check your browser console (F12) for:
- ✅ `Hero image URL generated: [url]` - Good!
- ❌ `Hero image config is null` - Configuration not updated
- ❌ `Hero image failed to load` - Check URL, bucket, or filename

### Common Issues:

**Image still not showing?**
- Check browser console for errors
- Verify the bucket name matches exactly
- Verify the filename matches exactly (case-sensitive!)
- Make sure the bucket is set to **Public**
- Check that your `.env.local` has correct Supabase credentials

**Getting CORS errors?**
- Make sure bucket policies allow public read access
- Check your Supabase project settings

### Example Configurations:

**Supabase:**
```typescript
const HERO_IMAGE_CONFIG = { bucket: 'hero', path: 'chargeup-hero.jpg' }
```

**Local file (in public folder):**
```typescript
const HERO_IMAGE_CONFIG = '/hero-image.jpg'
```

**Disable image (use icon):**
```typescript
const HERO_IMAGE_CONFIG = null
```

