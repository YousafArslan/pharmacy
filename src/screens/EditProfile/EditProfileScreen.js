import React, { useState,} from "react";
import { Text, View, TextInput,  } from "react-native";
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import { Button, SweetaelertModal } from '../../components';
import Style from '../../styles/CommonStyle/Style';
import { RouteName } from '../../routes';

const EditProfileScreen = () => {
  const [fullname, setfullname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [fullnameaerror, setfullnameaerror] = useState(0);
  const [mobilenumbererror, setmobilenumbererror] = useState(0);
  const [email, SetEmail] = useState('');
  const [emailValidError, setEmailValidError] = useState(0);
  const [emailValidError1, setEmailValidError1] = useState(0);
  const [EmailSendAlert, setEmailSendAlert] = useState(0);

  const validateIsEmail = (item) => {
    SetEmail(item);
  };

 
  const signupbutton = () => {
    if (!fullname.trim()) {
      setfullnameaerror(1)
      return;
    }
    if (!mobilenumber.trim()) {
      setmobilenumbererror(1)
      return;
    }
  
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
    if (!email.trim() && fullname !== '' && mobilenumber !=='' && email !=='') {
      setEmailSendAlert(1);
    }
  }

  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Name"
            style={Style.inputtextstyle}
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setfullnameaerror(0); setfullname(value); }}
          />
        </View>
        {fullnameaerror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the  Name</Text>
          : null
        }
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Mobile Number"
            style={Style.inputtextstyle}
            keyboardType="numeric"
            placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
            onChangeText={(value) => { setmobilenumbererror(0); setmobilenumber(value); }}
          />
        </View>
        {mobilenumbererror === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter the Mobile number</Text>
          : null
        }
        <View style={Style.inputUnderLine}>
          <View style={Style.setpasswordwidtbg}>
            <TextInput
               placeholder="Enter your email address"
               placeholderTextColor={'#676767'}
               style={Style.inputtextstyle}
               onChangeText={(e) => { setEmailValidError1(0); validateIsEmail(e); setEmailValidError(0) }}
               keyboardType={'email-address'}
               value={email}
            />
          </View>
        </View>
        {emailValidError === 1 ?
          <Text style={Styles.pleseentername}>* Please Enter Email address</Text>
          : null
        }
        {emailValidError1 === 1 ?
          <Text style={Styles.pleseentername}>* Please enter a valid email address</Text>
          : null
        }

        <View style={Styles.flexrowbutton}>
          <Button title="Update"
            onPress={signupbutton}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>

      </View>
      <View style={Styles.centeredView}>
        {EmailSendAlert !== 0 ?
          <SweetaelertModal message='Profile Update Successfully' link={(RouteName.ACCOUNT_TAB_SET)} />
          :
          null
        }
      </View>
    </View>
  );
};

export default EditProfileScreen;
