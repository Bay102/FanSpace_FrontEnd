import { log } from '../App';
import { SUPABASE } from '../Supabase.config';
import { API_CONFIG } from './api-config';

export const getAllChannels = async () => {
  const { data, error } = await SUPABASE.from('Channels').select();
  // log.info(data);
  // log.error(error);

  return data;
};
