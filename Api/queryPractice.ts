import { log } from '../App';
import { SUPABASE } from '../Supabase.config';

export const getUsers = async () => {
  const { data, error } = await SUPABASE.from('user_data')
    .select('name')
    .eq('user', '72572034-6bc1-44c3-af5d-455864b6e4d1');

  if (error) {
    throw new Error(`${error}`);
  }
log.info(data)
  return data;
};
 