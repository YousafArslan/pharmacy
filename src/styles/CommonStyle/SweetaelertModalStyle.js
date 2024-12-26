import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, colors, widthPercent } from '../../utils';

export default StyleSheet.create({
  inputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 47,
    color: ColorTheme.TextGreyColor,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: ColorTheme.BGWhiteColor,
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  numberinputMobile: {
    marginBottom: SH(13),
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 7,
    height: 47,
    color: 'gray',
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: ColorTheme.BGWhiteColor,
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  minviewallcontent: {
    width: '90%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  flexrowpassword: {
    width: '100%',
    borderRadius: SH(7),
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: SH(15),
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  setinputpassword: {
    width: '80%',
    color: ColorTheme.TextGreyColor,
    fontSize: SF(17),
    padding: 0,
    paddingTop: 5,
    fontFamily: Fonts.Poppins_Medium,
  },

  headerstylebgcolor: {
    backgroundColor: ColorTheme.HeaderBGColor
  },
  minviewaudioacall: {
    width: '100%',
    height: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
  setheaderspacepadding: {
    height: 60,
    backgroundColor: ColorTheme.HeaderBGColor,
    paddingTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,

  },
  modalView: {
    backgroundColor: ColorTheme.BGWhiteColor,
    borderRadius: 7,
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingTop: 20,
    paddingBottom: 20,
    width: '95%'
  },
  setbgcolorgrsay: {
    backgroundColor: ColorTheme.BGGreyColor,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  closeIcon: {
    position: 'absolute',
    right: 15,
    top: 16,
    height: 40,
    width: 40,
    backgroundColor: ColorTheme.CloseIconColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  iconclosestyle: {
    color: ColorTheme.TextWhiteColor,
    paddingBottom: 3,
  },
  checkiconright: {
    borderWidth: 3,
    height: 80,
    width: 80,
    borderRadius: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15,
  },
  registertextset: {
    paddingTop: 25,
    paddingBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: ColorTheme.TextBlackColor,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '40%',
  },
  setokbuttontwo: {
    width: '48%',
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:'5%',
    paddingTop: 20,
  },
  buttonminviewdettwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal:'5%',
    paddingTop: 20,
  },
  setbuttonstyle: {
    backgroundColor: ColorTheme.BgRed,
    width: '50%'
  },
  setinputstyleapply: {
    paddingHorizontal: 12,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 7,
    height: 50,
    color: ColorTheme.TextGreyColor,
    fontSize: SF(17),
    fontFamily: Fonts.Poppins_Medium,
    borderRadius: 7,
    backgroundColor: ColorTheme.HeaderBGColor,

  },
  setalldetailesminview: {
    paddingTop: 70,
  },
  setbgimage: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%'
  },
  setbuttontextstyle: {
    color: 'white',
  },
  setbuttonstyletwo: {
    height: 55,
  },
  icomvlose: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: 10,
    right: 30,
  },
  margintop: {
    marginTop:10,
  },
  buttoncolorwhite: {
    backgroundColor:'transperent',
    shadowOpacity: 0
  },
 
 
});