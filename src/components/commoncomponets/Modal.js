import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure you have this installed
import Button from './Button'; // Update the import path based on your project structure
import Style from '../../styles/CommonStyle/SweetaelertModalStyle';
import Styles from '../../styles/CommonStyle/CustomeSlidebar';

const Dialog = ({
  isVisible,
  onClose,
  onConfirm,
  onCancel,
  title,
  confirmText,
  cancelText,
  navigation,
  colorrdata,
}) => {
  return (
    <View style={Styles.modalcontainerwrap}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
        style={Styles.modalogout}>
        <View style={Styles.centeredView}>
          <View style={Styles.modalView}>
            <View style={Styles.setshadowstylemodaltwo}>
              <View style={Styles.setiallpaddingmodal}>
                <TouchableOpacity style={Styles.icomvlose} onPress={onClose}>
                  <Icon size={25} name="close" color={'black'} />
                </TouchableOpacity>
                <View style={Style.margintop}>
                  <View style={Style.registertextset}>
                    <Text style={Style.settext}>{title}</Text>
                  </View>
                </View>
                <View style={Style.buttonminview}>
                  <View style={Style.setokbuttontwo}>
                    <Button
                      title={confirmText}
                      buttonTextStyle={Style.setbuttontextstyle}
                      buttonStyle={Style.setbuttonstyletwo}
                      onPress={onConfirm}
                    />
                  </View>
                  <View style={Style.setokbuttontwo}>
                    <Button
                      title={cancelText}
                      buttonTextStyle={{color: colorrdata}}
                      buttonStyle={Style.buttoncolorwhite}
                      onPress={onCancel}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Dialog;
