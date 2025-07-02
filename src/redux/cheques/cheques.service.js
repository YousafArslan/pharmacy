import { baseUrl } from '../../../config';
import {axiosInstance} from '../orders/orders.service';

const addCheque = async req => {
  const data = await axiosInstance.post(`${baseUrl}cheques/upload`, req);
  return data;
};
const chequesService = {
  addCheque
};

export default chequesService;
