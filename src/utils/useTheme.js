import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../redux/common/common.slice';

/**
 * Custom hook to access and manage theme
 * @returns {Object} Theme utilities
 */
export const useTheme = () => {
  const dispatch = useDispatch();
  const { isDarkMode, themeColors } = useSelector(state => state.commonReducer);

  const toggleTheme = () => {
    dispatch(toggleDarkMode());
  };

  const setTheme = (isDark) => {
    dispatch(setDarkMode(isDark));
  };

  return {
    isDarkMode,
    themeColors,
    toggleTheme,
    setTheme,
  };
};

export default useTheme;
