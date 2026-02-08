/**
 * Example script for uploading images to Supabase
 * 
 * This is a reference example. To use:
 * 1. Add SUPABASE_SERVICE_ROLE_KEY to your .env.local
 * 2. Create a script that imports and uses the upload helper
 * 3. Run with: npx tsx scripts/upload-images-example.ts
 * 
 * Or use the Supabase Dashboard (recommended for most users)
 */

import { uploadImage } from '../lib/upload-helper'
import * as fs from 'fs'
import * as path from 'path'

async function uploadProductImages() {
  // Example: Upload product images
  const productImages = [
    { localPath: './images/products/usb-c-cable.jpg', bucketPath: 'usb-c-cable.jpg' },
    { localPath: './images/products/micro-usb-cable.jpg', bucketPath: 'micro-usb-cable.jpg' },
    { localPath: './images/products/fast-charger.jpg', bucketPath: 'fast-charger.jpg' },
    { localPath: './images/products/iphone-lightning.jpg', bucketPath: 'iphone-lightning.jpg' },
  ]

  for (const image of productImages) {
    try {
      const fileBuffer = fs.readFileSync(path.resolve(image.localPath))
      const file = new File([fileBuffer], path.basename(image.localPath), {
        type: 'image/jpeg',
      })

      const url = await uploadImage('products', image.bucketPath, file)
      console.log(`✅ Uploaded: ${image.bucketPath}`)
      console.log(`   URL: ${url}\n`)
    } catch (error) {
      console.error(`❌ Failed to upload ${image.bucketPath}:`, error)
    }
  }
}

async function uploadLogo() {
  // Example: Upload logo
  try {
    const fileBuffer = fs.readFileSync(path.resolve('./images/logo/chargeup-logo.png'))
    const file = new File([fileBuffer], 'chargeup-logo.png', {
      type: 'image/png',
    })

    const url = await uploadImage('logos', 'chargeup-logo.png', file)
    console.log(`✅ Uploaded logo: chargeup-logo.png`)
    console.log(`   URL: ${url}\n`)
  } catch (error) {
    console.error(`❌ Failed to upload logo:`, error)
  }
}

// Run uploads
async function main() {
  console.log('Starting image uploads...\n')
  
  // Uncomment the functions you want to run:
  // await uploadProductImages()
  // await uploadLogo()
  
  console.log('Done!')
}

main().catch(console.error)

