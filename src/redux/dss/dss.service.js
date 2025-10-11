import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from '../api/apiClient';

/**
 * DSS (Daily Sales Summary) API Service
 */
const dssService = {
  /**
   * Get DSS by ID and username
   */
  getById: ({ id, username }) => get(`/dss/${id}/${username}`),

  /**
   * Get sale summary details
   */
  getSaleSummaryDetails: ({ dist_id, dss_id }) => get(`/dssDetail/${dist_id}/${dss_id}`),

  /**
   * Get offline data and store in AsyncStorage
   */
  getOfflineData: async (id) => {
    const response = await get(`/offline/${id}`);
    if (response?.status === 200) {
      await AsyncStorage.setItem('offlineData', JSON.stringify(response.data));
    }
    return response.data;
  },
};

export default dssService;
