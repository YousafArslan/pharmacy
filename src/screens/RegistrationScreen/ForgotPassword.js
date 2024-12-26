import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Icon from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconA from 'react-native-vector-icons/AntDesign';
import Style from '../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";
import { RouteName } from "../../routes";
import { Button, SweetaelertModal } from '../../components';


const ForgotPassword = () => {

  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [email, SetEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState(0);
  const [emailValidError1, setEmailValidError1] = useState(0);
  const [EmailSendAlert, setEmailSendAlert] = useState(0);

  const validateIsEmail = (item) => {
    SetEmail(item);
  };

  const handleValidEmail = (e) => {
    if (email !== '') {
      let emaildata = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      if (!emaildata) {
        setEmailValidError1(1);
      }
      else if (emaildata == emaildata) {
        setEmailSendAlert(1);
      }
    }
    if (!email.trim()) {
      setEmailValidError(1);
    }
   
  };

  return (
    <View style={Styles.tabminview}>
      <View style={Styles.tabminviewchild}>
        {/* <TouchableOpacity>
            <Icon name="chevron-left" size={30} color={colorrdata} />
          </TouchableOpacity> */}
        {/* <TouchableOpacity style={Styles.setforgettext}>
            <Text style={[Styles.forgettextset,{color:colorrdata}]}>Forgot password?</Text>
          </TouchableOpacity> */}
        <View style={Style.inputUnderLine}>
          <View>
            <IconM style={Styles.marginright} name="email" size={25} color="#828282" />
          </View>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={'#676767'}
            style={Style.inputtextstyle}
            onChangeText={(e) => { setEmailValidError1(0); validateIsEmail(e); setEmailValidError(e) }}
            keyboardType={'email-address'}
            value={email}
          />
        </View>
        {/* {emailValidError ? <Text style={Styles.pleseentername}>* {emailValidError}</Text> : null} */}
        {emailValidError === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter Email address</Text>
          : null
        }
        {emailValidError1 === 1 ?
          <Text style={Styles.pleseentername}>* Please enter a valid email address</Text>
          : null
        }
        <Text style={Styles.settextstyleforget}><Text style={Styles.starcolor}> * </Text> We will send you a message to set or reset your new password </Text>

        {/* Sweet Alert */}
        <View style={Styles.centeredView}>          
          {EmailSendAlert !== 0 ?
            <SweetaelertModal message='Email has been sent' link={(RouteName.LOGIN_AND_REGISTRATION)} />
            :
            null
          }
        </View>
        <View style={Styles.centerarrow}>
          <TouchableOpacity style={[Styles.setpositionabsolute, { backgroundColor: colorrdata }]} onPress={handleValidEmail}>
            <IconA name="arrowright" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
