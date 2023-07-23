import { createClient } from '@supabase/supabase-js';

import AsyncStorage from '@react-native-async-storage/async-storage';

const SUPABASE_URL = 'https://rfptocarqnlsiqejlerw.supabase.co';

const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;

export const SUPABASE = createClient(SUPABASE_URL, supabaseKey as string, {
  auth: {
    persistSession: false
  }
});





