import { post } from '../api/apiClient';

/**
 * Cheques API Service
 */
const chequesService = {
  /**
   * Upload/add a new cheque
   */
  upload: (chequeData) => post('/cheques/upload', chequeData),
};

export default chequesService;
