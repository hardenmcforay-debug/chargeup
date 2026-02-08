# Setup Guide

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note**: If you don't have Supabase configured, the app will use placeholder images automatically.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Customization

### Update WhatsApp Number
Edit `components/Products.tsx` and replace `1234567890` with your actual WhatsApp number.

### Update Email
Edit `components/Contact.tsx` and replace `info@chargeup.com` with your actual email.

### Add Product Images
1. Set up Supabase storage bucket named `products`
2. Upload images to the bucket
3. Update product objects in `components/Products.tsx` with `imagePath` property

