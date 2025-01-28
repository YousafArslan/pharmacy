import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import IconG from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Feather';
import IconH from 'react-native-vector-icons/AntDesign';
import IconK from 'react-native-vector-icons/FontAwesome5';
import IconP from 'react-native-vector-icons/FontAwesome';
import IconJ from 'react-native-vector-icons/Fontisto';
import Styles from '../../styles/CommonStyle/CustomeSlidebar';
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconL from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {Button} from '../../components';
import {RouteName} from '../../routes';
import Dialog from './Modal';

const CustomSidebarMenu = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    // Handle confirm action
    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);

    setIsVisible(false);
    console.log('Confirmed!');
  };

  const handleCancel = () => {
    setIsVisible(false);
  };
  const {navigation} = props;
  const Onpressfunction = e => {
    navigation.toggleDrawer();
    navigation.navigate(e);
  };

  return (
    <ScrollView>
      <View style={Styles.customslidebarmenu}>
        {/* <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <IconE
            name="home"
            style={Styles.setwidth}
            size={23}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Home</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.ACCOUNT_TAB_SET)}>
          <IconO
            name="person"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOME_TAB)}>
          <IconO
            name="point-of-sale"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Sale Summaries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.OFFERS_TAB)}> */}
          <IconH
            name="export2"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Import Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.OFFERS_TAB)}>*/}
          <IconH
            name="export"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Export Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.OFFERS_TAB)}> */}
          <IconL
            name="application-settings-outline"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Control Panel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.OFFERS_TAB)}> */}
          <IconJ
            name="history"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.OFFERS_TAB)}> */}
          <IconK
            name="calendar-alt"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Day End</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.HOSPITAL_MEDICINE_SCREEN)}>
          <IconJ
            name="drug-pack"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Items</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.POPULAR_SCREEN)}>
          <IconJ
            name="persons"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Customers</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.OFFERS_TAB)
        }>
          <IconO name="local-offer" style={Styles.setwidth} color={colorrdata} size={23} />
          <Text style={Styles.hometextstyle}>Offers</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.CART_TAB)}>
          <IconH
            name="shoppingcart"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.ACCOUNT_TAB_SET)}>
          <IconE
            name="user"
            size={23}
            style={Styles.setwidth}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.EDIT_LOCATION_SCREEN)}>
          <IconP
            name="map-marker"
            size={23}
            style={Styles.setwidth}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Saved Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.YOUR_ORDER_SCREEN)}>
          <IconG
            name="refresh"
            size={23}
            style={Styles.setwidth}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.ORDER_TAB_SCREEN)}>
          <IconO
            name="track-changes"
            size={23}
            style={Styles.setwidth}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.NOTIFICATION_SCREEN)}>
          <IconG
            name="notifications-outline"
            style={Styles.setwidth}
            size={23}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.SETTTING_SCREEN)}>
          <IconH
            name="setting"
            style={Styles.setwidth}
            size={23}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.YOUR_CHAT)}>
          <IconG
            name="chatbox-ellipses-outline"
            style={Styles.setwidth}
            size={23}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.DRAWER_HELP_SCREEN)}>
          <IconK
            name="hands-helping"
            size={23}
            style={Styles.setwidth}
            color={colorrdata}
          />
          <Text style={Styles.hometextstyle}>Help</Text>
        </TouchableOpacity> */}

        <View style={Styles.settingandlogout}>
          <TouchableOpacity
            style={Styles.flexrowset}
            onPress={() => setIsVisible(true)}>
            <IconE
              name="log-out"
              style={Styles.setwidth}
              size={23}
              color={colorrdata}
            />
            <Text style={Styles.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* Some other UI */}
        <Dialog
          isVisible={isVisible}
          onClose={handleClose}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title="Are You Sure You Want To Sign Out?"
          confirmText="Confirm"
          cancelText="Cancel"
          colorrdata="#000"
        />
      </View>
      {/* <View style={Styles.modalcontainerwrap}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblefour}
          onRequestClose={() => {
            setModalVisiblefour(!modalVisiblefour);
          }}
          style={Styles.modalogout}>
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.setshadowstylemodaltwo}>
                <View style={Styles.setiallpaddingmodal}>
                  <TouchableOpacity
                    style={Styles.icomvlose}
                    onPress={() => setModalVisiblefour(!modalVisiblefour)}>
                    <IconH size={25} name="close" color={'black'} />
                  </TouchableOpacity>
                  <View style={Style.margintop}>
                    <View style={Style.registertextset}>
                      <Text style={Style.settext}>
                        Are You Sure You Want To Sign Out ?
                      </Text>
                    </View>
                  </View>
                  <View style={Style.buttonminview}>
                    <View style={Style.setokbuttontwo}>
                      <Button
                        title="Signout"
                        buttonTextStyle={Style.setbuttontextstyle}
                        buttonStyle={Style.setbuttonstyletwo}
                        onPress={() =>
                          navigation.navigate(RouteName.LOGIN_AND_REGISTRATION)
                        }
                      />
                    </View>
                    <View style={Style.setokbuttontwo}>
                      <Button
                        title="Cancel"
                        buttonTextStyle={{color: colorrdata}}
                        buttonStyle={Style.buttoncolorwhite}
                        onPress={() => setModalVisiblefour(!modalVisiblefour)}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View> */}
    </ScrollView>
  );
};
export default CustomSidebarMenu;

