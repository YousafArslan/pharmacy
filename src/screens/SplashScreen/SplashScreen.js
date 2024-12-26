import React, { useEffect } from 'react';
import { ImageBackground, View, StatusBar, Text, Image } from 'react-native';
import images from '../../images';
import Style from '../../styles/CommonStyle/Style';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';

StatusBar.setBackgroundColor('#010012');

const SplashScreen = () => {
    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    const dispatch = useDispatch();
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(async () => {
            navigation.replace(RouteName.HOME_SCREEN);
        }, 2);
        dispatch(color_picker_set_action('hsl(234, 92.8%, 72.7%)'))
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
