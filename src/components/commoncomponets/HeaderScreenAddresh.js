import React from 'react';
import { Text, View,TouchableOpacity, } from "react-native";
import Styles from '../../styles/Tab/HometabStyle';
import IconM from 'react-native-vector-icons/Feather';
import IconP from 'react-native-vector-icons/FontAwesome';
import {RouteName} from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const SearchHeaderScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  return (
    <View>
      <View style={Styles.minheaderflexview}>
        {/* <TouchableOpacity style={Styles.flexhomeimgandtext} onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)}> */}
          {/* <View>
            <IconM style={Styles.homeimagstyle} name="home" size={25} color={colorrdata} />
          </View> */}
          <View>
            <Text style={[Styles.hometext,{color:colorrdata}]}>Sale Summary</Text>
            {/* <Text style={[Styles.addreshtext,{color:colorrdata}]}>21-42-34, Banjara Hills, Hyder....</Text> */}
          </View>
        {/* </TouchableOpacity>     */}
      </View>
    </View>
  );
};
export default SearchHeaderScreen;
