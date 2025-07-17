import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView, Modal} from 'react-native';
import IconE from 'react-native-vector-icons/Feather';
import IconH from 'react-native-vector-icons/AntDesign';
import IconK from 'react-native-vector-icons/FontAwesome5';
import IconJ from 'react-native-vector-icons/Fontisto';
import Styles from '../../styles/CommonStyle/CustomeSlidebar';
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconL from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../../components';
import {RouteName} from '../../routes';
import Dialog from './Modal';
import {logout} from '../../redux/auth/auth.slice';

const CustomSidebarMenu = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisiblefour, setModalVisiblefour] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    // Handle confirm action
    dispatch(logout());
    navigation.navigate(RouteName.LOGIN_AND_REGISTRATION);

    setIsVisible(false);
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
        <TouchableOpacity
          style={Styles.flexrowset}
          onPress={() => Onpressfunction(RouteName.IMPORT_DATA)}>
          <IconH
            name="export2"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Import Data</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.flexrowset} onPress={() => {}}>
          {/* onPress={() => Onpressfunction(RouteName.IMPORT_DATA)}>*/}
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
          onPress={() => Onpressfunction(RouteName.CUSTOMERS)}>
          <IconJ
            name="persons"
            style={Styles.setwidth}
            color={colorrdata}
            size={23}
          />
          <Text style={Styles.hometextstyle}>Customers</Text>
        </TouchableOpacity>

        <View style={Styles.settingandlogout}>
          <TouchableOpacity
            style={Styles.flexrowset}
            onPress={() => {
              setIsVisible(true);
            }}>
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
      <View style={Styles.modalcontainerwrap}>
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
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;
