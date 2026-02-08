import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Only create Supabase client if URL is provided
export const supabase: SupabaseClient | null = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to get image URL from Supabase storage
// Adds cache-busting parameter to ensure fresh images
export const getImageUrl = (bucket: string, path: string, bustCache: boolean = true): string => {
  if (!supabaseUrl || !supabase) {
    // Fallback to placeholder if Supabase is not configured
    return `https://via.placeholder.com/400x400/0066FF/FFFFFF?text=${encodeURIComponent(path)}`
  }
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  let url = data.publicUrl
  
  // Add cache-busting parameter to force browser to fetch fresh image
  if (bustCache) {
    const separator = url.includes('?') ? '&' : '?'
    url = `${url}${separator}v=${Date.now()}`
  }
  
  return url
}

