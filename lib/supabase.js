import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hcbwcsatvqvrdlodnorv.supabase.co'  
const supabaseAnonKey = 'sb_publishable_aBwHYxNi1bGZlstnYKNUtA_sydGgUqL'       

export const supabase = createClient(supabaseUrl, supabaseAnonKey)