# Quick Start: Upload Product Images

## Step 1: Create Supabase Storage Bucket

1. Go to your **Supabase Dashboard**
2. Navigate to **Storage** in the left sidebar
3. Click **"New bucket"**
4. Name it: `products`
5. Make it **Public** (important!)
6. Click **"Create bucket"**

## Step 2: Upload Your Product Images

1. Go to **Storage** → **products** bucket
2. Click **"Upload file"** or drag and drop your images
3. Upload your product images (JPG, PNG, or WebP format)
4. **Important**: Note the exact filename of each image (case-sensitive!)

### Recommended Image Specs:
- **Format**: JPG (for photos) or PNG (for transparent images)
- **Size**: 800x800px to 1000x1000px (square format works best)
- **File size**: Under 500KB for faster loading

## Step 3: Update Your Code

1. Open `components/Products.tsx`
2. For each product, find the commented line: `// imagePath: 'filename.jpg'`
3. Uncomment it and replace `filename.jpg` with your actual filename

### Example:

**Before:**
```typescript
{
  id: '1',
  name: 'USB-C Cables',
  // imagePath: 'usb-c-cable.jpg', // Uncomment and add your image filename
  icon: <HiLightningBolt />,
}
```

**After:**
```typescript
{
  id: '1',
  name: 'USB-C Cables',
  imagePath: 'usb-c-cable.jpg', // Your actual filename from Supabase
  // icon: <HiLightningBolt />, // Remove or comment out when using images
}
```

## Step 4: Set Bucket Policy (Important!)

Make sure your bucket allows public read access:

1. Go to **Storage** → **products** bucket
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

## Troubleshooting

**Images not showing?**
- ✅ Check that the bucket is set to **Public**
- ✅ Verify the bucket policy allows public read access
- ✅ Make sure the filename in `imagePath` matches exactly (case-sensitive!)
- ✅ Check your `.env.local` has correct Supabase credentials
- ✅ Check browser console (F12) for any errors

**Still having issues?**
- Make sure your Supabase URL and anon key are correct in `.env.local`
- Verify the image file exists in the `products` bucket
- Check that the filename has no extra spaces or special characters

## Tips

- Use descriptive filenames: `usb-c-cable.jpg` instead of `img1.jpg`
- Keep filenames lowercase with hyphens (no spaces)
- Test one product image first before adding all of them
- If an image doesn't load, the icon will display as a fallback

