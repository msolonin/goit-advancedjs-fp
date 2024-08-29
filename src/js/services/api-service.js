import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api/';

export const request = async (path, params) => {
  try {
    const endpoint = `${BASE_URL}${path}`;
    const response = await axios.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
