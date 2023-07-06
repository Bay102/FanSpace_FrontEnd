import { NewUser } from '../types';
import { API_CONFIG } from './api-config';

export const createUser = async ({ name, email, password }: NewUser) => {
  return await fetch(`${API_CONFIG.baseUrl}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((response) => {
    if (!response.ok) {
      if (response.status === 406) throw new Error('Email in Use');
    }

    return response.json();
  });
};
