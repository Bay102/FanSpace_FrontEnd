import { API_CONFIG } from './api-config';

export const getUserPages = async (id: number) => {
  return await fetch(`${API_CONFIG.baseUrl}/user/${id}/pages`)
  .then((response) => {
   if (!response.ok) {
      if (response.status === 400) throw new Error('No Pages Found');
      throw new Error('Fetch Error')
    }

    return response.json();
  })
  .then(data => data[0].pages)
};
