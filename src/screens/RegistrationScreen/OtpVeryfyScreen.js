import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, } from "react-native";
import { Login } from '../../styles';
import { Button, SweetaelertModal, OTPInput } from '../../components';
import images from '../../images';
import { RouteName } from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { useCommon } from '../../redux/hooks/useRedux';
import { SH } from "../../utils";

const OtpVeryfyScreen = () => {
  const { colorrdata } = useCommon();
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [DisplayAlerttwo, setDisplayAlerttwo] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setDisplayAlerttwo(0);
      setDisplayAlert(0);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={Login.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Login.minflexview}>
            <View style={Login.minviewsigninscreen}>
              <View style={Login.whiteboxshadow}>
                <View style={Login.setimagviewlogin}>
                  <Image style={Login.imagesetus} resizeMode='cover' source={images.medicine_image} />
                </View>
              </View>
              <View style={Login.tabminview}>
                <Text style={[Login.signintextset, { color: colorrdata }]}>Enter  6  Digit OTP</Text>
                <Text style={Login.paregraph}>Enter the OTP code from the phone we just sent you.</Text>
                <View style={{paddingVertical:SH(20)}}>
                <OTPInput />
                </View>
                <View style={Login.flexrowsettext}>
                  <Text style={Login.paregraphotpbottom}>Didn't receive OTP Code!</Text>
                  <TouchableOpacity onPress={
                    () => setDisplayAlert(1)}>
                    <Text style={Login.resendtextbold}>Resend</Text>
                  </TouchableOpacity>
                </View>
                <View style={Login.buttonstylviewset}>
                  <View style={Login.accountbutton}>
                    <Button
                      title="Submit"
                      buttonStyle={{ backgroundColor: colorrdata }}
                      onPress={
                        () => setDisplayAlerttwo(1)}
                    />
                  </View>
                </View>
                <View style={Login.centeredView}>
                  {DisplayAlert !== 0 ?
                    <SweetaelertModal message='OTP sent successfully' link={RouteName.OTP_VERIFY_SCREEN} />
                    :
                    null
                  }
                </View>
                <View style={Login.centeredView}>
                  {DisplayAlerttwo !== 0 ?
                    <SweetaelertModal message='Login successful' link={RouteName.WELCOME_SUMANYA} />
                    :
                    null
                  }
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default OtpVeryfyScreen;
