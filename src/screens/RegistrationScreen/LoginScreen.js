import React, { useState, useEffect } from "react";
import { Text, View, Linking, Pressable, TextInput, TouchableOpacity, } from "react-native";
import {Login,Style} from '../../styles';
import { useNavigation } from '@react-navigation/native';
import images from '../../images';
import { useTogglePasswordVisibility } from '../../utils';
import { Button } from '../../components';
import {RouteName} from '../../routes';
import IconG from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";

const LoginScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [textInputName, setTextInputName] = useState('');
  const [textInputpassword, setTextInputPassword] = useState('');
  const [Error1, setError1] = useState(0)
  const [Error2, setError2] = useState(0)

  const [DisplayAlert, setDisplayAlert] = useState(0)
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  const checkTextInput = () => {
    if (!textInputName.trim()) {
      setError1(1)
      return;
    }
    if (!textInputpassword.trim()) {
      setError2(1)
      return;
    }
    setDisplayAlert(1);
    return navigation.navigate(RouteName.HOME_SCREEN);   
  };
  return (
    <View>     
        <View style={[Login.paddingbottom, Login.bgcolorset]}>
          <Text style={Login.bordersetactive}></Text>
          <View style={Login.tabminview}>
            <View style={Style.inputUnderLine}>
              <TextInput
                placeholder="Username"
                style={Style.inputtextstyle}
                onChangeText={(value) => { setError1(0); setTextInputName(value); }}
                underlineColorAndroid="transparent"
                // style={Style.inputtextstyle}
                placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              />
            </View>
            {Error1 === 1 ?
              <Text style={Login.pleseentername}>* Please Enter Username</Text>
              : null
            }
            <View style={Style.inputUnderLine}>
              <View style={Style.setpasswordwidtbg}>
                <TextInput
                  style={Style.textpassworedsert}
                  name="password"
                  onPress={handlePasswordVisibility}
                  placeholder="Password"
                  placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={passwordVisibility}
                  enablesReturnKeyAutomatically
                  onChangeText={(value) => { setError2(0); setTextInputPassword(value) }}
                />
              </View>
              <View>
                <Pressable onPress={handlePasswordVisibility}>
                  <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
                </Pressable>
              </View>
            </View>
            {Error2 === 1 ?
              <Text style={Login.pleseentername}>* Please Enter the password</Text>
              : null
            }
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.FORGET_PASSWORD_SCREEN)}>
              <Text style={[Login.textstyle, {color:colorrdata}]} >Forgot password?</Text>
            </TouchableOpacity>
            <View style={Login.buttonview}>
              <Button title="Login"
                onPress={checkTextInput}
                buttonStyle={Login.buttonStyle}
                buttonTextStyle={Login.buttonTextStyle}
              />
            </View>
            {/* <View style={Login.centeredView}>
              {DisplayAlert !== 0 ?
                <SweetaelertModal message='Login Successful' link={RouteName.OTP_VERIFY_SCREEN} />
                :
                null
              }
            </View> */}
            {/* <Text style={Login.textcolorset}>or</Text>
            <Button title="Log In with Facebook"
              iconname="sc-facebook"
              onPress={() => Linking.openURL('https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5Njk2NDc2LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D')}
              buttonTextStyle={Login.loginwithfacebboktext}
              buttonStyle={Login.flexrowsetminview}
            />
            <View style={Login.setbuttviewtopspace}>
            <Button title="Login with Google"
              imagesource={images.Googleimg_set}
              onPress={() => Linking.openURL('https://myaccount.google.com/')}
              buttonTextStyle={Login.buttonimagtexthree}
              buttonStyle={Login.setbuttonborderradiuswhite}
            />
            </View> */}
          </View>
        </View>    
    </View>
  );
};

export default LoginScreen;
