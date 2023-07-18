import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rfptocarqnlsiqejlerw.supabase.co';

const supabaseKey = process.env.SUPABASE_KEY;

export const SUPABASE = createClient(supabaseUrl, supabaseKey as string);

