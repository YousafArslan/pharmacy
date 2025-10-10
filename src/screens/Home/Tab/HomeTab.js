import React, { useCallback, useRef } from 'react';
import { View, StatusBar } from "react-native";
import Styles from '../../../styles/Tab/HometabStyle';
import { useFocusEffect } from '@react-navigation/native';
import Summary from './Summary.js';

const HomeTabset = (props) => {
  const { navigation } = props;
  const summaryRef = useRef(null);

  // Trigger fetchSummaryData when HOME_SCREEN is navigated to
  useFocusEffect(
    useCallback(() => {
      // Call fetchSummaryData when this screen comes into focus
      // Only call if ref exists and function is available
      if (summaryRef.current?.fetchSummaryData) {
        summaryRef.current.fetchSummaryData();
      }
    }, [])
  );

  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset, {flex: 1}]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Summary ref={summaryRef} navigation={navigation} />
    </View>
  );
};
export default HomeTabset;
