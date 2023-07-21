import { SUPABASE } from '../Supabase.config';
import { log } from '../App';

export const getAllChannels = async () => {
  const { data, error } = await SUPABASE.from('Channels').select();

  if (error) {
    throw new Error(`${error}`);
  }

  return data;
};
