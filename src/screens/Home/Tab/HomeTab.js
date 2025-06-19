import React from 'react';
import { View, KeyboardAvoidingView, StatusBar } from "react-native";
import Styles from '../../../styles/Tab/HometabStyle';
import { ScrollView } from 'react-native-virtualized-view';
import Summary from './Summary';

const HomeTabset = (props) => {
  const { navigation } = props;
  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Styles.minflexview}>
            <View style={Styles.minviewsigninscreen}>
              <Summary navigation={navigation}/>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default HomeTabset;
