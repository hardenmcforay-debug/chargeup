# Exact Filenames Reference

## Current Filenames in Your Code

Here are the **EXACT** filenames your code is looking for:

### Product 1: USB-C Cables
```
usb-c-cable.jpg
```

### Product 2: Micro-USB Cables
```
micro-usb-cable.jpg
```

### Product 3: Fast Chargers
```
fast-charger.jpg
```

### Product 4: iPhone Lightning Cables
```
iphone-lightning.jpg
```

### Product 5: USB-C Cables (Second)
```
usb-c-cable-2.jpg
```

### Product 6: Micro-USB Cables (Second)
```
micro-usb-cable-2.jpg
```

### Product 7: Fast Chargers (Second)
```
fast-charger-2.jpg
```

### Product 8: iPhone Lightning Cables (Second)
```
iphone-lightning-2.jpg
```

---

## What You Need to Do

### Option 1: Name Your Files to Match (EASIEST)

When uploading to Supabase, name your files **EXACTLY** as shown above:

1. Upload your first USB-C cable image → Name it: `usb-c-cable.jpg`
2. Upload your Micro-USB cable image → Name it: `micro-usb-cable.jpg`
3. Upload your Fast Charger image → Name it: `fast-charger.jpg`
4. Upload your iPhone Lightning image → Name it: `iphone-lightning.jpg`
5. Upload your second USB-C cable image → Name it: `usb-c-cable-2.jpg`
6. Upload your second Micro-USB cable image → Name it: `micro-usb-cable-2.jpg`
7. Upload your second Fast Charger image → Name it: `fast-charger-2.jpg`
8. Upload your second iPhone Lightning image → Name it: `iphone-lightning-2.jpg`

**Important:**
- Use lowercase letters
- Use hyphens `-` not underscores `_`
- Include the extension: `.jpg` or `.png`
- Match EXACTLY (case-sensitive)

### Option 2: Change Code to Match Your Filenames

If you've already uploaded files with different names:

1. Go to Supabase → Storage → products bucket
2. Write down the EXACT filename of each image
3. Open `components/Products.tsx`
4. Replace the filename in each `imagePath` line

**Example:**
If your file is named `USB_Cable.png` in Supabase, change:
```typescript
imagePath: 'usb-c-cable.jpg',
```
to:
```typescript
imagePath: 'USB_Cable.png',
```

---

## Quick Reference Table

| Product Name | Code Filename | What to Upload |
|-------------|---------------|----------------|
| USB-C Cables #1 | `usb-c-cable.jpg` | Name your file: `usb-c-cable.jpg` |
| Micro-USB Cables #1 | `micro-usb-cable.jpg` | Name your file: `micro-usb-cable.jpg` |
| Fast Chargers #1 | `fast-charger.jpg` | Name your file: `fast-charger.jpg` |
| iPhone Lightning #1 | `iphone-lightning.jpg` | Name your file: `iphone-lightning.jpg` |
| USB-C Cables #2 | `usb-c-cable-2.jpg` | Name your file: `usb-c-cable-2.jpg` |
| Micro-USB Cables #2 | `micro-usb-cable-2.jpg` | Name your file: `micro-usb-cable-2.jpg` |
| Fast Chargers #2 | `fast-charger-2.jpg` | Name your file: `fast-charger-2.jpg` |
| iPhone Lightning #2 | `iphone-lightning-2.jpg` | Name your file: `iphone-lightning-2.jpg` |

---

## Common Mistakes to Avoid

❌ **WRONG:**
- `USB-C-Cable.jpg` (uppercase)
- `usb_c_cable.jpg` (underscores)
- `usb-c-cable` (no extension)
- `usb-c-cable.JPG` (uppercase extension)

✅ **CORRECT:**
- `usb-c-cable.jpg` (lowercase, hyphens, lowercase extension)

---

## If Your Files Have Different Names

If you've already uploaded files with different names, you have two choices:

### Choice A: Rename Files in Supabase
1. Go to Supabase → Storage → products
2. Click on each file
3. Rename it to match the code (if Supabase allows renaming)

### Choice B: Update the Code
1. Check what your files are actually named in Supabase
2. Update `components/Products.tsx` to match your actual filenames
3. Make sure the filename matches EXACTLY (copy-paste from Supabase)

---

## Test Checklist

After uploading/updating:

- [ ] All 8 files uploaded to Supabase `products` bucket
- [ ] Filenames match EXACTLY (case-sensitive)
- [ ] Bucket is set to Public
- [ ] Bucket policy is set
- [ ] .env.local has correct Supabase credentials
- [ ] Restarted dev server (`npm run dev`)
- [ ] Checked browser console (F12) for errors

