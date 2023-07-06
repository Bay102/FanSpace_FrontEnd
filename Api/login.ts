import { LoginParams } from '../types';
import { API_CONFIG } from './api-config';

export const login = async ({ email, password }: LoginParams) => {
  return await fetch(`${API_CONFIG.baseUrl}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Invalid Email');
      }
      if (response.status === 401) {
        throw new Error('Incorrect Password');
      }
    }
    return response.json();
  });
};
