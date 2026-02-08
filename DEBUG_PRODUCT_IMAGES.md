# Debugging Product Images

## Quick Checklist

If your product images aren't showing, check these:

### 1. ✅ Is imagePath uncommented?
In `components/Products.tsx`, make sure the line looks like this:
```typescript
imagePath: 'your-filename.jpg', // NOT commented out
```
NOT like this:
```typescript
// imagePath: 'your-filename.jpg', // This won't work!
```

### 2. ✅ Is the icon removed or commented out?
When using images, remove or comment out the icon:
```typescript
// icon: <HiLightningBolt />, // Commented out when using images
```

### 3. ✅ Is the bucket created in Supabase?
- Go to Supabase Dashboard → Storage
- Make sure you have a bucket named `products`
- It must be set to **Public**

### 4. ✅ Is the image uploaded?
- Go to Storage → products bucket
- Verify your image file is there
- Check the exact filename (case-sensitive!)

### 5. ✅ Is the bucket policy set?
- Go to Storage → products → Policies
- Make sure there's a policy allowing public read access

### 6. ✅ Are Supabase credentials correct?
Check your `.env.local` file:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key_here
```

## Check Browser Console

Open your browser console (F12) and look for:
- ✅ `✅ Product image loaded: [product name]` - Success!
- ❌ `❌ Product image failed to load` - Check the error message

## Test Steps

1. **Test with one product first**:
   - Uncomment `imagePath` for just the first product
   - Upload one image to Supabase
   - Check if it appears

2. **Verify the filename matches exactly**:
   - If your file is `USB-Cable.jpg` in Supabase
   - Use `imagePath: 'USB-Cable.jpg'` (exact match, case-sensitive)

3. **Check the image URL**:
   - In browser console, you'll see the generated URL
   - Try opening that URL directly in a new tab
   - If it doesn't load, the issue is with Supabase setup

## Common Issues

**Issue**: Images still not showing
- **Solution**: Check browser console for errors, verify bucket is Public, check filename matches exactly

**Issue**: Placeholder shows instead
- **Solution**: imagePath is not set or is commented out

**Issue**: Icon shows instead of image
- **Solution**: Make sure imagePath is uncommented AND icon is commented out

**Issue**: CORS errors in console
- **Solution**: Check bucket policies allow public read access

