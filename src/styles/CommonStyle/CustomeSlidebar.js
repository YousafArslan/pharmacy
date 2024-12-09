import { StyleSheet, Dimensions } from 'react-native';
import { Fonts, ColorTheme } from '../../utils';

export default StyleSheet.create({
  customslidebarmenu: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  hometextstyle: {
    color: ColorTheme.TextBlackColor,
    fontSize: 18,
    fontFamily: Fonts.Metropolis_Medium,
    opacity: 0.7,
  },
  flexrowset: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1.5,
    paddingBottom: 15,
    paddingTop: 15,
    borderStyle: 'dotted',
  },
  settingandlogout: {
    marginTop: 40,
  },
  setwidth: {
    width: 40,
  },
  modalcontainerwrap: {
    width: '100%'
  },
  centeredView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'relative',  
    width: '100%',
    paddingHorizontal: '5%'
  },
  modalogout: {
    width: '100%',   
  },
  modalView: {
    width: '100%',    
  },
  setiallpaddingmodal: {
    backgroundColor: ColorTheme.BGWhiteColor,
    padding: 25,
    borderRadius: 30,
    width: '100%'
  },
  icomvlose: {
    position: 'absolute',
    right: 20,
    top: 5
  },
  modalTexttwo: {
    paddingVertical: 20,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 16,
    textAlign: 'center'
  }
 
});