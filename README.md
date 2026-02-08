# ChargeUp - Phone Accessories Website

A modern, 3D-animated one-page website for ChargeUp, a phone accessories brand. Built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern 3D Animations**: Smooth scroll-triggered animations using Framer Motion
- **Responsive Design**: Mobile-first approach with full responsiveness
- **One-Page Layout**: Smooth scrolling navigation between sections
- **Product Showcase**: Three main products with WhatsApp order integration
- **Supabase Integration**: Ready for image storage and management
- **Performance Optimized**: Lightweight and fast-loading
- **Accessibility**: Semantic HTML and ARIA labels

## 📁 Project Structure

```
chargeup/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with 3D animations
│   ├── Products.tsx        # Products section
│   ├── ProductCard.tsx     # Individual product card component
│   ├── DeliveryPayment.tsx # Delivery and payment information
│   ├── About.tsx           # About section
│   └── Contact.tsx         # Contact section with email button
├── lib/
│   └── supabase.ts         # Supabase client configuration
├── public/                 # Static assets (images, etc.)
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── next.config.js          # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.5 (App Router)
- **React**: 18.3.1
- **TypeScript**: 5.5.4
- **Styling**: Tailwind CSS 3.4.7
- **Animations**: Framer Motion 11.3.19
- **Icons**: React Icons 5.2.1
- **Database/Storage**: Supabase 2.45.4

## 📦 Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd CHARGEUP
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```
   - Note: If you don't have Supabase set up yet, the app will use placeholder images

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Features Explained

### Navigation
- Sticky navigation bar that appears on scroll
- Smooth scroll to sections
- Mobile-responsive hamburger menu
- Active state indicators

### Hero Section
- 3D animated product showcase
- Gradient text effects
- Floating background elements
- Call-to-action button linking to products

### Products Section
- Three main products:
  1. USB-C & Micro-USB Cables
  2. Fast Chargers
  3. iPhone Lightning Cables
- Each product includes:
  - Icon/Image placeholder
  - Description
  - Price
  - WhatsApp order link (customize phone number in components)

### Delivery & Payment
- Information cards about:
  - Free delivery
  - Mobile money payment
  - Payment before delivery policy

### About Section
- Brand story and values
- Quality assurance messaging
- Animated visual elements

### Contact Section
- Email button with mailto link
- Contact information display
- Responsive layout

## 🔧 Configuration

### WhatsApp Links
Update the WhatsApp phone number in `components/Products.tsx`:
```typescript
whatsappLink: 'https://wa.me/YOUR_PHONE_NUMBER?text=...'
```

### Email Address
Update the email in `components/Contact.tsx`:
```typescript
const email = 'your-email@chargeup.com'
```

### Supabase Setup (Optional)
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Create a storage bucket named `products`
3. Upload product images to the bucket
4. Update product objects in `components/Products.tsx` with `imagePath` property
5. Add your Supabase credentials to `.env.local`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance Optimizations

- Next.js Image optimization
- Code splitting
- Lazy loading animations
- Optimized bundle size
- CSS purging with Tailwind

## 🔒 Security

- Environment variables for sensitive data
- No hardcoded credentials
- Secure Supabase client configuration
- XSS protection with React
- HTTPS recommended for production

## 📝 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  primary: {
    blue: '#0066FF',
    'electric-blue': '#00D4FF',
    yellow: '#FFD700',
  }
}
```

### Fonts
Update fonts in `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
```

### Animations
Adjust animation timings in component files using Framer Motion props.

## 🐛 Troubleshooting

**Issue**: Images not loading
- **Solution**: Ensure Supabase is configured or check placeholder image URLs

**Issue**: WhatsApp links not working
- **Solution**: Verify phone number format: `https://wa.me/1234567890` (no + or spaces)

**Issue**: Build errors
- **Solution**: Run `npm install` to ensure all dependencies are installed

## 📄 License

This project is created for ChargeUp brand. All rights reserved.

## 🤝 Support

For questions or issues, please contact: info@chargeup.com

---

Built with ❤️ using Next.js and modern web technologies.

