import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import { LocationHome } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../images';
import { RouteName } from '../../routes';
import Icon from 'react-native-vector-icons/Entypo';
import IconA from 'react-native-vector-icons/AntDesign';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconH from 'react-native-vector-icons/Ionicons';
import IconO from 'react-native-vector-icons/Feather';
import { useSelector } from "react-redux";

const LocationHomeOfficeScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const OnLoginPress = () => {
    navigation.replace(RouteName.CONFORMLOCATION_SET);
  }
  const Welcomesumnaya = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={LocationHome.minflexview}>
            <View style={[LocationHome.minviewsigninscreen, { backgroundColor: colorrdata }]}>
              <View style={LocationHome.setflexcenter}>
                <Image style={LocationHome.homeimage} resizeMode='cover' source={images.medicine_image} />
              </View>
            </View>
            <View style={LocationHome.minstyleviewphotograpgy}>
              <View style={LocationHome.bgwhiteview}>
                <TouchableOpacity onPress={() => Welcomesumnaya()} style={LocationHome.flexrowdilevericon}>
                  <Icon name="chevron-small-left" size={30} color={'#2E3A59'} />
                  <Text style={LocationHome.dilivertotextstyle}>Deliver to</Text>
                </TouchableOpacity>
                <View style={LocationHome.setsearchinputbgcolor}>
                  <View>
                    <IconA name="search1" size={21} color={'#7C7C7C'} />
                  </View>
                  <View>
                    <TextInput
                      placeholderTextColor={'#B2B2B2'}
                      placeholder="Search Location"
                      style={LocationHome.texttype}
                    />
                  </View>
                </View>
                <TouchableOpacity style={LocationHome.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={LocationHome.marginright}>
                    <IconH name="home-outline" size={25} color={'#2E3A59'} />
                  </View>
                  <View>
                    <Text style={LocationHome.satyanilaym}>Satya Nilayam</Text>
                    <Text style={LocationHome.satyanilaymtwo}>21-42-34, Banjara Hills, Hyderabad, 500072</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHome.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={LocationHome.marginright}>
                    <IconH name="ios-location-outline" size={25} color={'#2E3A59'} />
                  </View>
                  <View>
                    <Text style={LocationHome.satyanilaym}>Current Location</Text>
                    <Text style={LocationHome.satyanilaymtwo}>21-42-34, Banjara Hills, Hyderabad, 500072</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHome.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={LocationHome.marginright}>
                    <IconP name="search-location" size={22} color={'#2E3A59'} />
                  </View>
                  <View>
                    <Text style={LocationHome.satyanilaym}>Look up the map</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={LocationHome.flexrowset}>
                <TouchableOpacity>
                  <Text style={LocationHome.saveaddresh}>Saved Addresses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={LocationHome.edittextflexpencil} onPress={() => (navigation.replace(RouteName.EDIT_LOCATION_SCREEN))}>
                  <Text style={LocationHome.saveaddresh}>Edit</Text>
                  <IconP name="pencil-alt" size={17} color={'#8D8D8D'} />
                </TouchableOpacity>
              </View>
              <View style={LocationHome.setbgminviewhome}>
                <TouchableOpacity onPress={() => OnLoginPress()} style={LocationHome.setwhiteboxinhome}>
                  <View>
                    <View style={LocationHome.iconcenter}>
                      <IconH name="home-outline" size={25} color={'#2E3A59'} />
                    </View>
                    <Text style={LocationHome.sethometext}>HOME</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => OnLoginPress()} style={LocationHome.setwhiteboxinhome}>
                  <View>
                    <View style={LocationHome.iconcenter}>
                      <IconO name="user" size={25} color={'#2E3A59'} />
                    </View>
                    <Text style={LocationHome.sethometext}>Office</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default LocationHomeOfficeScreen;
