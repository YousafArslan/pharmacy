import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import { Conformlocation } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import IconH from 'react-native-vector-icons/Feather';
import { RouteName } from '../../routes';
import IconP from 'react-native-vector-icons/FontAwesome5';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { useSelector } from "react-redux";

const ConformLocation = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const OnLoginPress = () => {
    navigation.replace(RouteName.LOCATION_HOME_OFFICE_SCREEN);
  }
  const Homescreenonpress = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }

  const [position, setPosition] = useState({
    latitude: 10,
    longitude: 10,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;
      console.log('position', crd.latitude);
      if (crd) {
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: crd.latitudeDelta,
          longitudeDelta: crd.longitudeDelta,
        });
      }
    })
  }, []);
  return (
    <View style={Conformlocation.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="#89b4f8" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Conformlocation.minflexview}>
            <View style={Conformlocation.bgwhiteview}>
              <View style={Conformlocation.mapviewstyle}>
                <MapView
                  provider={PROVIDER_GOOGLE}
                  style={Conformlocation.mapConformlocationet}
                  scrollEnabled={true}
                  showsUserLocation={true}
                  showsMyLocationButton={true}
                  followsUserLocation={true}
                  showsCompass={true}
                  zoomEnabled={true}
                  pitchEnabled={true}
                  rotateEnabled={true}
                >
                  <Marker
                    title='Yor are here'
                    description='This is a description'
                    coordinate={position} />
                </MapView>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <TouchableOpacity onPress={() => OnLoginPress()} style={Conformlocation.settextstyle}>
        <View style={[Conformlocation.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
          <Text style={Conformlocation.textstyle}>
            <IconH name="chevrons-left" size={27} color="white" />
          </Text>
          <Text style={Conformlocation.textstyle}>Back</Text>
        </View>
      </TouchableOpacity>
      <View style={Conformlocation.positonabsolute}>
        <View style={Conformlocation.setwhiteboxwidth}>
          <View style={Conformlocation.centerpencileicon}>
            <TouchableOpacity style={Conformlocation.setpencileicon} onPress={() => navigation.replace(RouteName.EDIT_LOCATION_SCREEN)}>
              <IconP name="pencil-alt" size={17} color={'#8D8D8D'} />
            </TouchableOpacity>
          </View>
          <View style={Conformlocation.flexrowhomeimage}>
            <View style={Conformlocation.marginright}>
              <IconH name="home" size={28} color="#2E3A59" />
            </View>
            <View>
              <Text style={Conformlocation.satyanilaym}>Home</Text>
              <View style={Conformlocation.setwhiteboxwidthtwo}>
                <Text style={Conformlocation.satyanilaymtwo}>Phulchhab Chowk Mg Road Rajkot</Text>
              </View>
            </View>
          </View>
          <View>
            <Button title="Confirm Location"
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={() => Homescreenonpress()}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ConformLocation;
