import React, { useState } from "react";
import { Text, View, ScrollView, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {SettingStyle} from '../../../styles';
import {RouteName} from '../../../routes';
import { useSelector } from "react-redux";

const SettingsScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const [Settingdatalist] = useState([
    {
      "id": 1,
      "textbold": 'Add a Place',
      "text": 'In case we are  missing Something',
      "uri" : RouteName.ALL_BOOK_MARK_SCREEN,
    },
    {
      "id": 2,
      "textbold": 'Places You,ve added',
      "text": 'See all the places You,ve added so far',
      "uri" : RouteName.ALL_BOOK_MARK_SCREEN,
    },

    {
      "id": 3,
      "textbold": 'Edit Profile',
      "text": 'Change Your name, description and Profile Photo',
      "uri" : RouteName.EDIT_PROFILE_SCREEN,
    },
    {
      "id": 4,
      "textbold": 'Notification Settings',
      "text": 'Define what alerts and notifications You Want to see',
      "uri" : RouteName.NOTIFICATION_SCREEN,
    },
    {
      "id": 5,
      "textbold": 'Account Settings',
      "text": 'Change Your Email or delete your account.',
      "uri" : RouteName.SETTTING_SCREEN,
    },

  ])
  const Settingdatalistname = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.uri)}>
        <View style={SettingStyle.textminview}>
          <Text style={SettingStyle.addatextstyle}>{item.textbold}</Text>
          <Text style={SettingStyle.paregraphtext}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={[SettingStyle.minstyleviewphotograpgy, SettingStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={SettingStyle.minflexview}>
            <View style={SettingStyle.minviewsigninscreen}>
              <FlatList
                data={Settingdatalist}
                renderItem={({ item, index }) => Settingdatalistname(item, index)}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
