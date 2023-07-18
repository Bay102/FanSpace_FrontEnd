import { SupabaseClient, createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rfptocarqnlsiqejlerw.supabase.co';

const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

export const SUPABASE = createClient(SUPABASE_URL, supabaseKey as string);
