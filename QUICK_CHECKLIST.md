# Quick Checklist - Product Images Not Showing?

## ✅ Follow These Steps in Order:

### 1. SUPABASE SETUP (Do this first!)

- [ ] **Bucket Created?**
  - Go to Supabase → Storage
  - Do you see a bucket named `products`? (exactly lowercase "products")
  - If NO: Create it, name it `products`, make it **Public**

- [ ] **Bucket is Public?**
  - Click on `products` bucket
  - Check if it says "Public bucket" 
  - If NO: Go to Settings → Make it Public

- [ ] **Policy Set?**
  - Click on `products` bucket → "Policies" tab
  - Do you see a policy that says "Public Access"?
  - If NO: Create new policy → "For full customization" → Paste this:
    ```sql
    CREATE POLICY "Public Access"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'products');
    ```

- [ ] **Images Uploaded?**
  - Go to Storage → products bucket
  - Are your images there?
  - **Write down the EXACT filename** of each image (case-sensitive!)

### 2. ENVIRONMENT VARIABLES

- [ ] **.env.local file exists?**
  - In your project root folder
  - If NO: Create it

- [ ] **Has Supabase URL?**
  - File should have: `NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co`
  - Get this from: Supabase Dashboard → Settings → API

- [ ] **Has Supabase Key?**
  - File should have: `NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key-here`
  - Get this from: Supabase Dashboard → Settings → API → "anon public" key

### 3. CODE SETUP

- [ ] **imagePath is uncommented?**
  - Open `components/Products.tsx`
  - Look for: `imagePath: 'filename.jpg'` (NO `//` in front)
  - If you see `// imagePath`, remove the `//`

- [ ] **icon is commented out?**
  - Look for: `// icon: <HiLightningBolt />` (HAS `//` in front)
  - If you see `icon: <HiLightningBolt />` without `//`, add `//` in front

- [ ] **Filename matches exactly?**
  - The filename in `imagePath: 'filename.jpg'` must match EXACTLY what's in Supabase
  - Case-sensitive! `image.jpg` ≠ `Image.jpg`
  - Extension must match! `.jpg` ≠ `.png`

### 4. TEST

- [ ] **Restarted server?**
  - Stop server (Ctrl+C)
  - Run `npm run dev` again

- [ ] **Opened browser console?**
  - Press F12
  - Go to "Console" tab
  - Look for messages

- [ ] **What do you see in console?**
  - ✅ `✅ Product image loaded` = Working!
  - ❌ `❌ Product image failed to load` = Check the error message
  - 📦 `📦 Product: [name]` = Shows the image path being used

## 🔍 Common Issues:

**"Image failed to load" error:**
1. Check filename matches exactly (copy-paste from Supabase)
2. Check bucket is Public
3. Check policy is set
4. Check .env.local has correct credentials

**No error but no image:**
1. Check browser console for the generated URL
2. Try opening that URL in a new tab
3. If URL doesn't work → Supabase setup issue
4. If URL works → Code issue

**Still showing icon instead of image:**
1. Make sure `imagePath` is NOT commented (no `//`)
2. Make sure `icon` IS commented (has `//`)
3. Restart the dev server

## 📝 Test with ONE Product First:

1. Update ONLY the first product
2. Set `imagePath: 'your-filename.jpg'` (your actual filename)
3. Comment out its `icon`
4. Save and refresh
5. Check if that ONE image appears
6. If it works → update the rest
7. If it doesn't → check console error

## 🆘 Still Not Working?

**Share these details:**
1. Browser console error message (F12 → Console)
2. One product configuration from Products.tsx
3. The exact filename from Supabase
4. Screenshot of your Supabase bucket (showing it's Public)

