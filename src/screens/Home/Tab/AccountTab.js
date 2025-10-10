import React, { useState, useEffect } from 'react';
import { Text, View, Image, KeyboardAvoidingView, Modal, StatusBar, TouchableOpacity, } from "react-native";
import {AccountTabStyle} from '../../../styles';
import images from '../../../images';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
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
  const { currentUser } = useSelector(state => state.auth) || {};
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
                  <View style={AccountTabStyle.profileImageContainer}>
                    <Image
                      style={AccountTabStyle.imagesetus}
                      resizeMode="cover"
                      source={images.avatar}
                    />
                    <View style={[AccountTabStyle.editIconBadge, { backgroundColor: colorrdata || '#007AFF' }]}>
                      <IconM name="pencil" size={14} color="#fff" />
                    </View>
                  </View>
                  <View style={AccountTabStyle.setviewwidth}>
                    <Text style={AccountTabStyle.sumanyatextset}>
                      {currentUser?.user?.username || 'Guest User'}
                    </Text>
                    {currentUser?.user?.email && (
                      <View style={AccountTabStyle.infoRow}>
                        <IconM name="email-outline" size={14} color="#666" style={{ marginRight: 6 }} />
                        <Text style={AccountTabStyle.setgimailtext}>
                          {currentUser?.user?.email}
                        </Text>
                      </View>
                    )}
                    {currentUser?.user?.phone && (
                      <View style={AccountTabStyle.infoRow}>
                        <IconM name="phone-outline" size={14} color="#666" style={{ marginRight: 6 }} />
                        <Text style={AccountTabStyle.setgimailtextwo}>
                          {currentUser?.user?.phone}
                        </Text>
                      </View>
                    )}
                    {currentUser?.user?.dist_id && (
                      <View style={AccountTabStyle.infoRow}>
                        <IconM name="tag-outline" size={14} color="#666" style={{ marginRight: 6 }} />
                        <Text style={AccountTabStyle.addreshtext}>
                          Dist ID: {currentUser?.user?.dist_id}
                        </Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              <View style={AccountTabStyle.quickActionsContainer}>
                <TouchableOpacity
                  // onPress={() => bookmarkscreen()}
                  style={[AccountTabStyle.quickActionCard, { borderColor: '#E8E8E8' }]}>
                  <View style={[AccountTabStyle.iconCircle, { backgroundColor: '#F0F0F0' }]}>
                    <IconM name="clock-outline" size={24} color="#333333" />
                  </View>
                  <Text style={AccountTabStyle.quickActionText}>
                    History
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => notificationscreen()}
                  style={[AccountTabStyle.quickActionCard, { borderColor: '#E8E8E8' }]}>
                  <View style={[AccountTabStyle.iconCircle, { backgroundColor: '#F0F0F0' }]}>
                    <IconM
                      name="bell"
                      size={24}
                      color="#333333"
                    />
                  </View>
                  <Text style={AccountTabStyle.quickActionText}>
                    Notifications
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => settingscreen()}
                  style={[AccountTabStyle.quickActionCard, { borderColor: '#E8E8E8' }]}>
                  <View style={[AccountTabStyle.iconCircle, { backgroundColor: '#F0F0F0' }]}>
                    <IconM name="cog" size={24} color="#333333" />
                  </View>
                  <Text style={AccountTabStyle.quickActionText}>
                    Settings
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => paymentscreen()}
                  style={[AccountTabStyle.quickActionCard, { borderColor: '#E8E8E8' }]}>
                  <View style={[AccountTabStyle.iconCircle, { backgroundColor: '#F0F0F0' }]}>
                    <IconM
                      name="wallet"
                      size={24}
                      color="#333333"
                    />
                  </View>
                  <Text style={AccountTabStyle.quickActionText}>
                    Payments
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={AccountTabStyle.footerSection}>
                <Text style={AccountTabStyle.sectionTitle}>More Options</Text>

                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.YOUR_ORDER_SCREEN)}
                  style={AccountTabStyle.footerButton}>
                  <View style={[AccountTabStyle.footerIconCircle, { backgroundColor: '#007AFF' }]}>
                    <IconM name="package-variant" size={20} color={'#fff'} />
                  </View>
                  <Text style={AccountTabStyle.footerButtonText}>
                    Delivered Summaries
                  </Text>
                  <IconM name="chevron-right" size={20} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.DRAWER_HELP_SCREEN)}
                  style={AccountTabStyle.footerButton}>
                  <View style={[AccountTabStyle.footerIconCircle, { backgroundColor: '#9C27B0' + '15' }]}>
                    <IconM name="help-circle-outline" size={20} color="#9C27B0" />
                  </View>
                  <Text style={AccountTabStyle.footerButtonText}>
                    Help
                  </Text>
                  <IconM name="chevron-right" size={20} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(RouteName.RATING_SCREEN_SET)
                  }
                  style={AccountTabStyle.footerButton}>
                  <View style={[AccountTabStyle.footerIconCircle, { backgroundColor: '#4CAF50' + '15' }]}>
                    <IconM name="message-text-outline" size={20} color="#4CAF50" />
                  </View>
                  <Text style={AccountTabStyle.footerButtonText}>
                    Send Feedback
                  </Text>
                  <IconM name="chevron-right" size={20} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}
                  style={AccountTabStyle.footerButton}>
                  <View style={[AccountTabStyle.footerIconCircle, { backgroundColor: '#FF5722' + '15' }]}>
                    <IconM name="alert-circle-outline" size={20} color="#FF5722" />
                  </View>
                  <Text style={AccountTabStyle.footerButtonText}>
                    Report an Emergency
                  </Text>
                  <IconM name="chevron-right" size={20} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}
                  style={AccountTabStyle.footerButton}>
                  <View style={[AccountTabStyle.footerIconCircle, { backgroundColor: '#FFC107' + '15' }]}>
                    <IconF name="star" size={20} color="#FFC107" />
                  </View>
                  <Text style={AccountTabStyle.footerButtonText}>
                    Rate us on the Play Store
                  </Text>
                  <IconM name="chevron-right" size={20} color="#ccc" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(logout());
                    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);
                  }}
                  style={[AccountTabStyle.logoutButton, { backgroundColor: colorrdata || '#007AFF' }]}>
                  <IconM name="logout" size={22} color="#fff" />
                  <Text style={AccountTabStyle.logoutButtonText}>Log Out</Text>
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
