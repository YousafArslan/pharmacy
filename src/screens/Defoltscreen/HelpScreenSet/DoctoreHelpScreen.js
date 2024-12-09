import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, TextInput, } from "react-native";
import {HelpScreenStyle} from '../../../styles';
import {Button, SweetaelertModal} from '../../../components';
import {RouteName} from '../../../routes';

const DoctoreHelpScreen = (props) => {
  const { navigation } = props;
  const [DisplayAlert, setDisplayAlert] = useState(0)
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);
  return (
    <View style={HelpScreenStyle.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={HelpScreenStyle.minflexview}>
            <View style={HelpScreenStyle.minviewsigninscreen}>
              <View>
                <TextInput style={HelpScreenStyle.settextinputwidth} placeholder="Type Your Message" placeholderTextColor="lightgrey"/>
              </View>
              <View>
                <Text style={HelpScreenStyle.settextinputtext}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={HelpScreenStyle.setbuttonstyle}>
        <Button onPress={() => { setDisplayAlert(1) }} title="Send Mail" />
      </View>
      <View style={HelpScreenStyle.centeredView}>
        {console.log(DisplayAlert, 'print')}
        {DisplayAlert !== 0 ?
          <SweetaelertModal message='Email Send Successful' link={RouteName.HOME_SCREEN} />
          :
          null
        }
      </View>
    </View>
  );
};
export default DoctoreHelpScreen;
