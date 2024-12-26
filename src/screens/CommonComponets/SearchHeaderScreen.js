import React from 'react';
import { Text, View, TouchableOpacity, } from "react-native";
import Styles from '../../styles/Tab/HometabStyle';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome';
import { RouteName } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from "react-redux";

const SearchHeaderScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.bgcolorset}>
      <TouchableOpacity style={[Styles.flexinputstyle, Styles.bgcolorset]} onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)}>
        <TouchableOpacity style={Styles.flextextinput} onPress={() => navigation.navigate(RouteName.POPULAR_SCREEN)}>
          <TouchableOpacity>
            <Icon name="search1" size={20} color={'#4F4F4F'} />
          </TouchableOpacity>
          <View>
            <Text style={Styles.searcjtextcolorstyle}>Search Medicines nearby</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.seticonborder}>
          <IconF name="filter" size={20} color={'#079D49'} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
export default SearchHeaderScreen;
