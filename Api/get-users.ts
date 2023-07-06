import { API_CONFIG } from './api-config';

export const getUsers = () => {
  return fetch(`${API_CONFIG.baseUrl}/user`).then((response) => {
    if (!response.ok) {
      throw new Error('Username Already Exists');
    }

    return response.json();
  });
};
