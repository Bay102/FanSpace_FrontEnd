import { log } from '../App';
import { SUPABASE } from '../Supabase.config';

export const getImageUrl = (bucketName: string, imageName: string) => {
  const { data } = SUPABASE.storage
    .from(bucketName)
    .getPublicUrl(`Channel Icon Images/${imageName}`);

  return data.publicUrl;
};
