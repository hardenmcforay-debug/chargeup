/**
 * Helper utility for uploading images to Supabase Storage
 * 
 * NOTE: For production uploads, use the Supabase Dashboard (recommended).
 * This utility is for development/testing purposes.
 * 
 * To use this, you'll need to add SUPABASE_SERVICE_ROLE_KEY to your .env.local
 * (Keep this key SECRET - never commit it to git!)
 */

import { createClient } from '@supabase/supabase-js'

// Get Supabase client with service role key (for uploads)
export function getSupabaseAdmin() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Missing Supabase credentials. Add SUPABASE_SERVICE_ROLE_KEY to .env.local'
    )
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

/**
 * Upload an image file to Supabase Storage
 * @param bucket - The storage bucket name (e.g., 'products', 'logos')
 * @param filePath - The path/filename in the bucket (e.g., 'usb-c-cable.jpg')
 * @param file - The File object or Blob to upload
 * @returns The public URL of the uploaded file
 */
export async function uploadImage(
  bucket: string,
  filePath: string,
  file: File | Blob
): Promise<string> {
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: true, // Overwrite if file exists
    })

  if (error) {
    throw new Error(`Upload failed: ${error.message}`)
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath)

  return urlData.publicUrl
}

/**
 * Delete an image from Supabase Storage
 * @param bucket - The storage bucket name
 * @param filePath - The path/filename to delete
 */
export async function deleteImage(
  bucket: string,
  filePath: string
): Promise<void> {
  const supabase = getSupabaseAdmin()

  const { error } = await supabase.storage.from(bucket).remove([filePath])

  if (error) {
    throw new Error(`Delete failed: ${error.message}`)
  }
}

/**
 * List all files in a bucket
 * @param bucket - The storage bucket name
 * @returns Array of file paths
 */
export async function listImages(bucket: string): Promise<string[]> {
  const supabase = getSupabaseAdmin()

  const { data, error } = await supabase.storage.from(bucket).list()

  if (error) {
    throw new Error(`List failed: ${error.message}`)
  }

  return data.map((file) => file.name)
}

