import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, TouchableOpacity, } from "react-native";
import {WelcomeSumnaya} from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../images';
import { Button } from '../../components';
import {RouteName} from '../../routes';
import {Style} from '../../styles';
import IconF from 'react-native-vector-icons/Feather';
import { Fonts } from '../../utils';
import { useSelector } from "react-redux";

const WelcomeSumnya = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const OnLoginPress = () => {
    navigation.replace(RouteName.LOCATION_HOME_OFFICE_SCREEN);
  }
  const ProviderLocation = () => {
    navigation.replace(RouteName.CONFORMLOCATION_SET);
  }
  const Homescreendiraction = () => {
    navigation.replace(RouteName.HOME_SCREEN);
  }

  return (
    <View style={[WelcomeSumnaya.minstyleviewphotograpgy,{backgroundColor:colorrdata}]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            width: '100%',
            height: 'auto',
          }}>
          <KeyboardAvoidingView enabled>
            <View style={WelcomeSumnaya.minflexview}>
              <View style={WelcomeSumnaya.minviewsigninscreen}>
                <View style={WelcomeSumnaya.smallimagcenter}>
                  <View style={WelcomeSumnaya.imagsetview}>
                    <Image style={WelcomeSumnaya.imagesetus} resizeMode='cover' source={images.medicine_image} />
                  </View>
                </View>
                <View style={WelcomeSumnaya.textcenterview}>
                  <Text style={WelcomeSumnaya.longtitlestyle}>
                    Welcome,
                  </Text>
                  <Text style={WelcomeSumnaya.longtitlestyle}>
                    Pharmacy!
                  </Text>
                </View>
                <View style={WelcomeSumnaya.textcenterviewlongtext}>
                  <Text style={WelcomeSumnaya.longtitlestyletwo}>
                    Unlock the world of regular and rescued Pharmacy by setting up your delivery address.
                  </Text>
                </View>
                <View style={WelcomeSumnaya.setbottomviewwidth}>
                  <Text style={WelcomeSumnaya.sllectlocationscreen}>SELECT LOCATION</Text>
                  <Button title="Locate Me"
                    onPress={() => OnLoginPress()}
                    imagesource={images.Search_image}
                    buttonStyle={WelcomeSumnaya.buttonsearchstyle}
                    buttonTextStyle={{
                      marginLeft:140,
                      position:'relative',
                      right:130,
                      fontSize:17,
                      fontFamily:Fonts.Poppins_Medium,
                      color:colorrdata,
                    }}
                  />
                  <Button title="Provide Delivery Location"
                    onPress={() => ProviderLocation()}
                    imagesource={images.Location_image}
                    buttonStyle={WelcomeSumnaya.buttonsearchstyle}
                    buttonTextStyle={{
                      marginLeft:14,
                      position:'relative',
                      fontSize:17,
                      fontFamily:Fonts.Poppins_Medium,
                      color:colorrdata,
                    }}
                    
                  />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <TouchableOpacity onPress={() => Homescreendiraction()} style={Style.settextstyle}>
          <View style={[Style.setbgcolorviewtwoview,{backgroundColor:colorrdata}]}>
            <Text style={Style.textstyle}>
            <IconF name="chevrons-right" size={27} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default WelcomeSumnya;
