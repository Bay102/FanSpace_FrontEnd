import { log } from '../App';
import { SUPABASE } from '../Supabase.config';
import { API_CONFIG } from './api-config';

export const getUserChannels = async (userId: string) => {
  const { data, error } = await SUPABASE.from('Users_Channels')
    .select('channel_name')
    .eq('user_id', userId);

  if (error) {
    throw new Error(`${error}`);
  }

  // log.info(data);
  return data;
};
