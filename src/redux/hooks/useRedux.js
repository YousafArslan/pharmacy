import { useSelector } from 'react-redux';

/**
 * Custom hook to access customers state
 */
export const useCustomers = () => {
  return useSelector((state) => state.customers);
};

/**
 * Custom hook to access orders state
 */
export const useOrders = () => {
  return useSelector((state) => state.orders);
};

/**
 * Custom hook to access cheques state
 */
export const useCheques = () => {
  return useSelector((state) => state.cheques);
};

/**
 * Custom hook to access DSS state
 */
export const useDss = () => {
  return useSelector((state) => state.dss);
};

/**
 * Custom hook to access auth state
 */
export const useAuth = () => {
  return useSelector((state) => state.auth);
};

/**
 * Custom hook to access common state (theme, colors, etc.)
 */
export const useCommon = () => {
  return useSelector((state) => state.commonReducer);
};

/**
 * Custom hook to get current user
 */
export const useCurrentUser = () => {
  return useSelector((state) => state.auth.currentUser);
};

/**
 * Custom hook to check if user is logged in
 */
export const useIsLoggedIn = () => {
  return useSelector((state) => state.auth.isLoggedIn);
};

/**
 * Custom hook to get theme colors
 */
export const useThemeColors = () => {
  const { themeColors, isDarkMode, colorrdata } = useSelector((state) => state.commonReducer);
  return { themeColors, isDarkMode, colorrdata };
};
