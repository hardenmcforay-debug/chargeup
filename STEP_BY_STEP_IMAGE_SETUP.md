# Step-by-Step: Get Product Images Working

Follow these steps **EXACTLY** in order:

## STEP 1: Check Your Supabase Setup

### 1.1 Open Supabase Dashboard
- Go to https://supabase.com
- Log in to your account
- Select your project

### 1.2 Create Storage Bucket (if not done)
1. Click **"Storage"** in the left sidebar
2. Click **"New bucket"** button
3. Name: `products` (exactly this name, lowercase)
4. **IMPORTANT**: Check the box **"Public bucket"** 
5. Click **"Create bucket"**

### 1.3 Set Bucket Policy
1. Click on the **"products"** bucket
2. Click the **"Policies"** tab
3. Click **"New Policy"**
4. Select **"For full customization"**
5. Copy and paste this SQL:

```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING (bucket_id = 'products');
```

6. Click **"Review"** then **"Save policy"**

## STEP 2: Upload Your Images

### 2.1 Upload Images
1. In Supabase, go to **Storage** → **products** bucket
2. Click **"Upload file"** or drag and drop
3. Upload your product images
4. **CRITICAL**: After uploading, click on each file and **copy the exact filename**
   - Example: If file shows as `usb-cable.jpg`, copy exactly: `usb-cable.jpg`
   - Note: Filenames are case-sensitive!

### 2.2 Write Down Your Filenames
Create a list like this:
- Product 1 (USB-C Cables): `your-filename-here.jpg`
- Product 2 (Micro-USB): `your-filename-here.jpg`
- Product 3 (Fast Chargers): `your-filename-here.jpg`
- etc.

## STEP 3: Check Your Environment Variables

### 3.1 Check .env.local File
1. Open your project folder
2. Look for a file named `.env.local` (it might be hidden)
3. If it doesn't exist, create it
4. It should contain:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3.2 Get Your Supabase Credentials
1. In Supabase Dashboard, go to **Settings** → **API**
2. Copy the **"Project URL"** → paste as `NEXT_PUBLIC_SUPABASE_URL`
3. Copy the **"anon public"** key → paste as `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Save the `.env.local` file

## STEP 4: Update Your Code

### 4.1 Open Products.tsx
1. Open `components/Products.tsx` in your code editor

### 4.2 Update Each Product
For EACH product, you need to:

**Example - Product 1:**
```typescript
{
  id: '1',
  name: 'USB-C Cables',
  // ... other properties ...
  imagePath: 'YOUR-EXACT-FILENAME-HERE.jpg', // ← Replace with your actual filename
  // icon: <HiLightningBolt />, // ← Make sure this is commented out
},
```

**Important Rules:**
- ✅ `imagePath` must NOT have `//` in front (uncommented)
- ✅ `icon` must have `//` in front (commented out)
- ✅ Filename must match EXACTLY (case-sensitive, including extension)

### 4.3 Save the File
- Save `components/Products.tsx`

## STEP 5: Restart Your Development Server

### 5.1 Stop the Server
- In your terminal, press `Ctrl + C` to stop the server

### 5.2 Start the Server
```bash
npm run dev
```

### 5.3 Open Browser
- Go to http://localhost:3000
- Open browser console (Press F12)
- Go to the "Console" tab

## STEP 6: Check for Errors

### 6.1 Look in Browser Console
You should see messages like:

**✅ SUCCESS:**
```
✅ Product image loaded: USB-C Cables - https://...
```

**❌ ERROR:**
```
❌ Product image failed to load: USB-C Cables
Image URL: https://...
```

### 6.2 Common Errors and Fixes

**Error: "Failed to load"**
- Check filename matches exactly
- Check bucket is named `products` (lowercase)
- Check bucket is set to Public
- Check bucket policy is set

**Error: "CORS" or "403 Forbidden"**
- Bucket policy not set correctly
- Go back to STEP 1.3 and set the policy again

**Error: "404 Not Found"**
- Filename doesn't match
- Check the exact filename in Supabase
- Make sure extension matches (.jpg vs .png)

**No error but image doesn't show:**
- Check browser console for the image URL
- Try opening that URL directly in a new tab
- If URL doesn't work, Supabase setup is wrong

## STEP 7: Test One Product First

Before adding all images, test with ONE product:

1. Update ONLY the first product's `imagePath`
2. Make sure its `icon` is commented out
3. Save and refresh browser
4. Check if that ONE image appears
5. If it works, then update the rest
6. If it doesn't work, check the console error message

## Quick Checklist

Before asking for help, verify:

- [ ] Bucket named `products` exists in Supabase
- [ ] Bucket is set to **Public**
- [ ] Bucket policy is set (from STEP 1.3)
- [ ] Images are uploaded to the bucket
- [ ] `.env.local` file exists with correct credentials
- [ ] `imagePath` is uncommented (no `//` in front)
- [ ] `icon` is commented out (has `//` in front)
- [ ] Filename matches exactly (case-sensitive)
- [ ] Development server was restarted after changes
- [ ] Browser console checked for error messages

## Still Not Working?

If you've followed all steps and it still doesn't work:

1. **Share the browser console error message** (F12 → Console tab)
2. **Share one of your product configurations** from Products.tsx
3. **Share the exact filename** from Supabase
4. **Confirm**: Is the bucket Public? (Yes/No)
5. **Confirm**: Is the policy set? (Yes/No)

This will help identify the exact issue!

