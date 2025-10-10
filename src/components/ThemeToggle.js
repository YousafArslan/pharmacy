import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const ThemeToggle = ({ showLabel = true, variant = 'default' }) => {
  const { isDarkMode, toggleTheme, themeColors } = useTheme();

  if (variant === 'minimal') {
    return (
      <TouchableOpacity
        style={[styles.minimalContainer, { backgroundColor: themeColors.BGWhiteColor }]}
        onPress={toggleTheme}
        activeOpacity={0.7}
      >
        <Icon
          name={isDarkMode ? 'moon' : 'sunny'}
          size={24}
          color={isDarkMode ? '#FFD700' : '#FFA500'}
        />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: themeColors.BGWhiteColor }]}>
      <View style={styles.labelContainer}>
        <Icon
          name={isDarkMode ? 'moon' : 'sunny'}
          size={24}
          color={isDarkMode ? '#FFD700' : '#FFA500'}
          style={styles.icon}
        />
        {showLabel && (
          <Text style={[styles.label, { color: themeColors.TextBlackColor }]}>
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </Text>
        )}
      </View>
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  minimalContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ThemeToggle;
