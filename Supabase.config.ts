import { SupabaseClient, createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://rfptocarqnlsiqejlerw.supabase.co';

// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJmcHRvY2FycW5sc2lxZWpsZXJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2NTcwNDQsImV4cCI6MjAwNTIzMzA0NH0.Wcu2FggMHPhN7Lu7Co5OhIlrG10L6Do7alujkhPvv9E'






// export const SUPABASE = createClient(SUPABASE_URL, supabaseKey as string);
export const SUPABASE : SupabaseClient = createClient(SUPABASE_URL, supabaseKey);




