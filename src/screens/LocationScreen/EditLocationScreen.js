import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, Pressable, TextInput, StatusBar, TouchableHighlight, Appearance, TouchableOpacity, } from "react-native";
import Style from '../../styles/LocationScreenStyle/ConformLocation';
import { useNavigation } from '@react-navigation/native';
import {RouteName} from '../../routes';
import IconC from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconH from 'react-native-vector-icons/Ionicons';
import IconL from 'react-native-vector-icons/Ionicons';
import IconW from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";

const EditLocationScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const OnLoginPress = () => {
    navigation.replace(RouteName.LOCATION_HOME_OFFICE_SCREEN);
  }
  const Homescreenonpress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }
  return (

    <View style={styles.minstyleviewphotograpgys}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Style.minflexview}>
          <View style={styles.modalView}>
              <View style={styles.locationsurchinputshadow}>
                <View>
                  <IconA name="search1" size={20} color={'#2E3A59'} />
                </View>
                <View>
                <TextInput
                  placeholder="Search for area, street name..."
                  style={styles.inputtextstylelocation}
                  underlineColorAndroid="transparent"
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                />
                </View>
              </View>
              <TouchableOpacity  style={styles.flexrowsetlocationmap} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                <View>
                <IconL name="locate-sharp" size={26} color={'#2E3A59'} />
                </View>
                <View style={styles.setmarginleftgps}>
                <Text style={[styles.cureentlocationtext,{color:colorrdata}]}>Current Location</Text>
                <Text style={[styles.usingtextlocation,{color:colorrdata}]}>Using GPS</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={styles.marginright}>
                    <IconH name="home-outline" size={25} color={'#2E3A59'} />
                  </View>
                  <View>
                    <Text style={styles.satyanilaym}>Satya Nilayam</Text>
                    <Text style={styles.satyanilaymtwo}>21-42-34, Banjara Hills, Hyderabad, 500072</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexrowhomeimage} onPress={() => (navigation.replace(RouteName.CONFORMLOCATION_SET))}>
                  <View style={styles.marginright}>
                    <IconW name="work-outline" size={25} color={'#2E3A59'} />
                  </View>
                  <View>
                    <Text style={styles.satyanilaym}>Work</Text>
                    <Text style={styles.satyanilaymtwo}>21-42-34, Banjara Hills, Hyderabad, 500072</Text>
                  </View>
                </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default EditLocationScreen;
