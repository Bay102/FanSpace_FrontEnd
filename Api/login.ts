import { SUPABASE } from '../Supabase.config';
import { LoginParams } from '../types';
import { API_CONFIG } from './api-config';

export const login = async ({ email, password }: LoginParams) => {
  const { data, error } = await SUPABASE.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (!data.user) {
    throw new Error(`${error?.message}`);
  }
  return data;
};
