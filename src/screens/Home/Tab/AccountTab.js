import React, { useState, useEffect } from 'react';
import { Text, View, Image, KeyboardAvoidingView, Modal, FlatList, StatusBar, TouchableOpacity, } from "react-native";
import {AccountTabStyle} from '../../../styles';
import images from '../../../images';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/Feather';
import IconR from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import {Button, SweetaelertModal} from '../../../components';
import { useNavigation } from '@react-navigation/native';
import {RouteName} from '../../../routes';
import Style from '../../../styles/CommonStyle/SweetaelertModalStyle';
import { colors } from '../../../utils';
import { useSelector } from "react-redux";
import { ScrollView } from 'react-native-virtualized-view';
import { logout } from '../../../redux/auth/auth.slice';
import { useDispatch } from 'react-redux';
import Dialog from '../../../components/commoncomponets/Modal';

const HomeTabsety = () => {
  const dispatch = useDispatch();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisiblefour, setModalVisiblefour] = useState(false);
  const handleClose = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    navigation.addListener('focus', () => {
      setModalVisible(false);
      setDisplayAlert(0);
    });
  }, [navigation]);

  const handleConfirm = () => {
    // Handle confirm action
    dispatch(logout());
    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);

    setIsVisible(false);
  };
  const handleCancel = () => {
    setIsVisible(false);
  };
  const [setuserdata] = useState([
    {
      id: 1,
      title: 'Delivered Summaries',
      seticonview: <IconR name="chevron-right" size={20} />,
      url: RouteName.YOUR_ORDER_SCREEN,
    },
    // {
    //   "id": 2,
    //   "title": "Feedback & Refunds",
    //   "seticonview": <IconR name="chevron-right" size={20} />,
    //   "url": RouteName.RATING_SCREEN_SET,
    // },
    {
      id: 3,
      title: 'Help',
      seticonview: <IconR name="chevron-right" size={20} />,
      url: RouteName.DRAWER_HELP_SCREEN,
    },
  ]);

  const Userdatatext = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(item.url)}>
        <View style={AccountTabStyle.setbgcolordata}>
          <Text style={[AccountTabStyle.usertextstyle, { color: colorrdata }]}>
            {item.title}
          </Text>
          <Text style={{ color: colorrdata }}>{item.seticonview}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        AccountTabStyle.minstyleviewphotograpgy,
        AccountTabStyle.bgcolorset,
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor="hsl(0, 0%, 94.9%)" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View
            style={[AccountTabStyle.minflexview, AccountTabStyle.bgcolorset]}>
            <View style={AccountTabStyle.minviewsigninscreen}>
              <View
                style={[
                  AccountTabStyle.flexrowtwxtspace,
                  AccountTabStyle.bgcolorset,
                ]}>
                <Text style={AccountTabStyle.persnaltext}>
                  Personal details
                </Text>
                {/* <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(RouteName.EDIT_PROFILE_SCREEN)
                  }>
                  <Text
                    style={[AccountTabStyle.edittextset, {color: colorrdata}]}>
                    Edit
                  </Text>
                </TouchableOpacity> */}
              </View>
              <View style={AccountTabStyle.useraccountwhitebox}>
                <TouchableOpacity
                  style={AccountTabStyle.fleximageandtext}
                  onPress={() =>
                    navigation.navigate(RouteName.EDIT_PROFILE_SCREEN)
                  }>
                  <Image
                    style={AccountTabStyle.imagesetus}
                    resizeMode="cover"
                    source={images.avatar}
                  />
                  <View style={AccountTabStyle.setviewwidth}>
                    <Text style={AccountTabStyle.sumanyatextset}>
                      Waleed Shahzad
                    </Text>
                    <Text style={AccountTabStyle.setgimailtext}>
                      waleed@gmail.com
                    </Text>
                    <Text style={AccountTabStyle.setgimailtextwo}>
                      +92 3123456789
                    </Text>
                    <Text style={AccountTabStyle.addreshtext}>
                      123, New York, USA
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={AccountTabStyle.flexrowsetbgcolor}>
                <TouchableOpacity
                  // onPress={() => bookmarkscreen()}
                  style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconF name="bookmark" size={20} color={'#4F4F4F'} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>
                      History
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => notificationscreen()}
                  style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconI
                        name="notifications-outline"
                        size={20}
                        color={'#4F4F4F'}
                      />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>
                      Notifications
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => settingscreen()}
                  style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <Icon name="setting" size={20} color={'#4F4F4F'} />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>
                      Settings
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => paymentscreen()}
                  style={AccountTabStyle.setbgcolorwhite}>
                  <View>
                    <View style={AccountTabStyle.flexrowsettile}>
                      <IconI
                        name="md-wallet-outline"
                        size={20}
                        color={'#4F4F4F'}
                      />
                    </View>
                    <Text style={AccountTabStyle.bookmarktextstyle}>
                      Payments
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <FlatList
                data={setuserdata}
                renderItem={({ item, index }) => Userdatatext(item, index)}
                keyExtractor={item => item.id}
                numColumns={1}
                style={AccountTabStyle.flatelistGrid}
              />
              <View style={AccountTabStyle.fourtextminview}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(RouteName.RATING_SCREEN_SET)
                  }>
                  <Text style={AccountTabStyle.sendfeedbacktext}>
                    Send Feedback
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>
                    Report an Emergency
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>
                    Rate us on the Play Store
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(logout());
                    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);
                  }}>
                  <Text style={AccountTabStyle.sendfeedbacktext}>Log Out</Text>
                </TouchableOpacity>
              </View>
              {/* <TouchableOpacity style={AccountTabStyle.setbgwhiteabout}>
                <IconR name="info-with-circle" size={20} color={'#4F4F4F'} />
                <Text style={AccountTabStyle.abouttextstyle}>About</Text>
              </TouchableOpacity> */}
              <View style={AccountTabStyle.centeredView}>
                {DisplayAlert !== 0 ? (
                  <SweetaelertModal
                    message="Update Successful"
                    link={RouteName.OFFERS_TAB}
                  />
                ) : null}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default HomeTabsety;
