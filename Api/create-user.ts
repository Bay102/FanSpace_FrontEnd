import { SUPABASE } from '../Supabase.config';
import { NewUser } from '../types';
import { API_CONFIG } from './api-config';

export const createUser = async ({ email, password }: NewUser) => {
  const { data, error } = await SUPABASE.auth.signUp({
    email: email,
    password: password,
  });

  if (!data.user) {
    throw new Error(`${error?.message}`);
  }
};
