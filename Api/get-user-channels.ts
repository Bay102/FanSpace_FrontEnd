import { log } from '../App';
import { SUPABASE } from '../Supabase.config';



export const getUserChannels = async (userId: string) => {
  const { data, error } = await SUPABASE.from('users_channels')
    .select('channel_name')
    .eq('user_id', userId);

  if (error) {
    throw new Error(`${error}`);
  }


  return data;
};
