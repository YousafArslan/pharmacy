import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Modal } from "react-native";
import IconG from 'react-native-vector-icons/Ionicons';
import IconE from 'react-native-vector-icons/Feather';
import IconF from 'react-native-vector-icons/AntDesign';
import IconK from 'react-native-vector-icons/FontAwesome5';
import IconP from 'react-native-vector-icons/FontAwesome';
import Styles from '../../styles/CommonStyle/CustomeSlidebar';
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import IconH from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconC from 'react-native-vector-icons/Ionicons';
import { useSelector } from "react-redux";
import { Button } from '../../components';
import { RouteName } from '../../routes';

const CustomSidebarMenu = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [modalVisiblefour, setModalVisiblefour] = useState(false);
  const { navigation } = props;
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Styles.customslidebarmenu}>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <IconE name="home" style={Styles.setwidth} size={23} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.OFFERS_TAB)
        }>
          <IconO name="local-offer" style={Styles.setwidth} color={colorrdata} size={23} />
          <Text style={Styles.hometextstyle}>Offers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.CART_TAB)
        }>
          <IconH name="shoppingcart" style={Styles.setwidth} color={colorrdata} size={23} />
          <Text style={Styles.hometextstyle}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.ACCOUNT_TAB_SET)
        }>
          <IconE name="user" size={23} style={Styles.setwidth} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.EDIT_LOCATION_SCREEN)
        }>
          <IconP name="map-marker" size={23} style={Styles.setwidth} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Saved Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.YOUR_ORDER_SCREEN)
        }>
          <IconG name="refresh" size={23} style={Styles.setwidth} color={colorrdata} />
          <Text style={Styles.hometextstyle}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.ORDER_TAB_SCREEN)
        }>
          <IconO name="track-changes" size={23} style={Styles.setwidth} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICATION_SCREEN)
        }>
          <IconG name="notifications-outline" style={Styles.setwidth} size={23} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTTING_SCREEN)
        }>
          <IconH name="setting" style={Styles.setwidth} size={23} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.YOUR_CHAT)
        }>
          <IconC name="chatbox-ellipses-outline" style={Styles.setwidth} size={23} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={
          () => Onpressfunction(RouteName.DRAWER_HELP_SCREEN)
        }>
          <IconK name="hands-helping" size={23} style={Styles.setwidth} color={colorrdata} />
          <Text style={Styles.hometextstyle}>Help</Text>
        </TouchableOpacity>

        <View style={Styles.settingandlogout}>
          <TouchableOpacity style={Styles.flexrowset} onPress={() => setModalVisiblefour(true)}>
            <IconE name="log-out" style={Styles.setwidth} size={23} color={colorrdata} />
            <Text style={Styles.hometextstyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.modalcontainerwrap}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiblefour}
          onRequestClose={() => {
            setModalVisiblefour(!modalVisiblefour);
          }}
          style={Styles.modalogout}
        >
          <View style={Styles.centeredView}>
            <View style={Styles.modalView}>
              <View style={Styles.setshadowstylemodaltwo}>
                <View style={Styles.setiallpaddingmodal}>
                  <TouchableOpacity style={Styles.icomvlose} onPress={() => setModalVisiblefour(!modalVisiblefour)}>
                    <IconF
                      size={25}
                      name="close"
                      color={'black'}
                    />
                  </TouchableOpacity>
                  <View style={Style.margintop}>
                    <View style={Style.registertextset}>
                      <Text style={Style.settext}>Are You Sure You Want To Sign Out ?</Text>
                    </View>
                  </View>
                  <View style={Style.buttonminview}>
                    <View style={Style.setokbuttontwo}>
                      <Button title="Signout"
                        buttonTextStyle={Style.setbuttontextstyle}
                        buttonStyle={Style.setbuttonstyletwo}
                        onPress={() => navigation.navigate(RouteName.LOGIN_AND_REGISTRATION)}
                      />
                    </View>
                    <View style={Style.setokbuttontwo}>
                      <Button title="Cancel"
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
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

