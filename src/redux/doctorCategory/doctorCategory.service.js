
import axios from 'axios';

export const fetchDoctorcategory = async () => {
  const response = await axios.get('/api/doctorCategory');
  return response.data;
};
