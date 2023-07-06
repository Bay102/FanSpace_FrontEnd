import { API_CONFIG } from './api-config';

export const getAllChannels = async () => {
  return await fetch(`${API_CONFIG.baseUrl}/channels/all`)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error Fetching');
    }
    return response.json()
  });
};
