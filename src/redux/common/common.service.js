
import axios from 'axios';

export const fetchCommon = async () => {
  const response = await axios.get('/api/common');
  return response.data;
};
