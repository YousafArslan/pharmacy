
import axios from 'axios';

export const fetchDoctordata = async () => {
  const response = await axios.get('/api/doctorData');
  return response.data;
};
