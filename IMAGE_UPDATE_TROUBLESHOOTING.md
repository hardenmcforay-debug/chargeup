# Image Update Troubleshooting

## Problem: Changed image in Supabase but it's not updating on the site

### Quick Fixes (Try these first):

#### 1. Hard Refresh Your Browser
- **Windows/Linux**: Press `Ctrl + Shift + R` or `Ctrl + F5`
- **Mac**: Press `Cmd + Shift + R`
- This clears the browser cache and forces a fresh load

#### 2. Clear Browser Cache
- **Chrome/Edge**: 
  - Press F12 → Network tab → Check "Disable cache"
  - Or: Settings → Privacy → Clear browsing data → Cached images
- **Firefox**: 
  - Press F12 → Network tab → Settings → Check "Disable HTTP Cache"

#### 3. Check the Filename
- Go to Supabase → Storage → products bucket
- Check the **EXACT** filename of your image
- Open `components/Products.tsx`
- Make sure `imagePath` matches **EXACTLY** (case-sensitive!)
- Example: If file is `USB-Cable.jpg`, use `imagePath: 'USB-Cable.jpg'`

#### 4. Restart Development Server
```bash
# Stop server (Ctrl+C)
# Then restart:
npm run dev
```

### If Still Not Working:

#### Check 1: Did you replace or upload new file?

**If you REPLACED the file (same filename):**
- The cache-busting system should pick it up
- Try hard refresh (Ctrl+Shift+R)
- Check browser console (F12) for the image URL

**If you UPLOADED a NEW file (different filename):**
- Update `imagePath` in `components/Products.tsx` to match new filename
- Save the file
- Restart dev server
- Refresh browser

#### Check 2: Verify Image in Supabase

1. Go to Supabase → Storage → products
2. Click on your image file
3. Copy the public URL
4. Open that URL in a new browser tab
5. Does the image show correctly?
   - ✅ YES → The issue is browser caching
   - ❌ NO → The issue is with Supabase setup

#### Check 3: Check Browser Console

1. Open browser console (F12)
2. Go to "Console" tab
3. Look for:
   - `✅ Product image loaded: [name]` = Image loaded successfully
   - `❌ Product image failed to load` = Check the error message
4. Go to "Network" tab
5. Refresh page
6. Find your image request
7. Check if it's loading from cache or fetching fresh

### Advanced: Force Image Reload

The system now includes automatic cache-busting, but if you need to force it:

1. **Update the imagePath** (even if it's the same):
   ```typescript
   // Change this:
   imagePath: 'product.jpg',
   // To this temporarily:
   imagePath: 'product.jpg?v=2',
   // Then change back:
   imagePath: 'product.jpg',
   ```

2. **Or add a timestamp** to force reload:
   - The system automatically adds cache-busting, but you can verify in browser console

### Common Issues:

**Issue**: Image shows old version
- **Solution**: Hard refresh (Ctrl+Shift+R), clear browser cache

**Issue**: Image doesn't show at all
- **Solution**: Check filename matches exactly, check browser console for errors

**Issue**: Different image shows
- **Solution**: Check if you uploaded to wrong bucket or wrong filename

**Issue**: Image URL shows but doesn't load
- **Solution**: Check Supabase bucket is Public, check bucket policies

### Still Not Working?

1. **Check the exact imagePath in code:**
   - Open `components/Products.tsx`
   - Find the product you changed
   - Verify `imagePath` value

2. **Check the exact filename in Supabase:**
   - Go to Storage → products
   - Note the EXACT filename (including extension, case-sensitive)

3. **Compare them:**
   - They must match EXACTLY
   - `product.jpg` ≠ `Product.jpg` (case-sensitive!)
   - `product.jpg` ≠ `product.JPG` (extension case matters)

4. **Share these details if still stuck:**
   - Browser console error (if any)
   - The imagePath from Products.tsx
   - The filename from Supabase
   - Screenshot of the image in Supabase storage

