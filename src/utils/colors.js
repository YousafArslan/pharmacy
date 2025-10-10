import { lightTheme, darkTheme } from './themes';

// Export static colors for backward compatibility
export const colors = {
  theme_backgound:'hsl(234, 92.8%, 72.7%)',
  theme_backgound_green:'hsl(234, 92.8%, 72.7%)',
};

// Function to get theme colors based on current theme
export const getThemeColors = (isDarkMode = false) => {
  return isDarkMode ? darkTheme : lightTheme;
};

// Default export for backward compatibility
export default lightTheme;
