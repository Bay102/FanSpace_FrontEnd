import { NewUser } from '../types';
import { API_CONFIG } from './api-config';

export const createUser = async ({ name, email, password }: NewUser) => {
  await fetch(`${API_CONFIG.baseUrl}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Username Already Exists');
    }
    return response.json();
  }) 
}; 


// 192.168.4.28:8080