import React, { useEffect } from 'react';
import { ImageBackground, View, StatusBar, Text, Image } from 'react-native';
import images from '../../images';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {setColorPicker} from '../../redux/common/common.slice';
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '../../redux/auth/auth.slice';

StatusBar.setBackgroundColor('#010012');

const SplashScreen = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    useEffect(() => {
      setTimeout(async () => {
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);
        if (user) {
          navigation.replace(RouteName.HOME_SCREEN);
          dispatch(login(user))
        } else {
          navigation.replace(RouteName.LOGIN_AND_REGISTRATION);
        }
      }, 0);
      // navigation.replace(RouteName.HOME_SCREEN);
      dispatch(setColorPicker('hsl(234, 92.8%, 72.7%)'));
    }, []);

    return (
        <View style={Style.setimageviewstyle} backgroundColor={colorrdata} >
            {/* <ImageBackground style={Style.backgroundimagstyle} source={images.splashscreenlogo_set_image} resizeMode='cover' > */}
                <View style={Style.setbgcolorwhitelogo}>
                    <Image style={Style.foodlogoimage} source={images.medicine_image} resizeMode='cover' />
                </View>
            {/* </ImageBackground> */}
        </View>
    );
};
export default SplashScreen;
