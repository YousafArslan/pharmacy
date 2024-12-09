
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, ColorTheme } from '../../utils';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    // marginHorizontal: '5%',
    paddingTop: 20,
  },

  minflexview: {
    width: '100%',
    height: '100%',
  },
  textstyle: {
    fontFamily: Fonts.Nuntion_bold,
    fontWeight: '800',
    fontSize: SF(23),
    lineHeight: SH(30),
    textAlign: 'right',
    color: ColorTheme.ColorRGB
  },
  smallimagcenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: SH(40),
  },
  imagsetview: {
    backgroundColor: 'white',
    height: 100,
    width: 100,
    borderRadius: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textcenterview: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 35,
    paddingBottom: 20,
  },
  longtitlestyle: {
    color: '#FFFFFF',
    fontFamily: Fonts.Metropolis_SemiBold,
    fontSize: SF(40),
    textAlign: 'center',
    lineHeight: SH(45),
    width: '100%'
  },
  imagesetus: {
    width: 85,
    height: 85,
    borderRadius: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textcenterviewlongtext: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  longtitlestyletwo: {
    textAlign: 'center',
    paddingLeft: 45,
    fontFamily: Fonts.Metropolis_Medium,
    paddingRight: 40,
    color: ColorTheme.ColorRGB,
    fontSize: 20,
    lineHeight: 27
  },
  setbottomviewwidth: {
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: 60,
  },
  sllectlocationscreen: {
    color: ColorTheme.ColorRGB,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.Nuntion_midum,
    paddingBottom: 20,
    textAlign: 'center'
  },
  buttonsearchstyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  textstylebutton: {
    marginLeft: 140,
    position: 'relative',
    right: 130,
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  textstylebuttontwo: {
    marginLeft: 14,
    position: 'relative',
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
  },
  settextstyle: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 70 : 30,
    alignItems: 'center',
    position: 'absolute',
    right: 0,
  },
  textstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: SF(17),
    fontWeight: '800',
    lineHeight: SH(30),
    textAlign: 'right',
    color: ColorTheme.ColorRGB
  },
  flexicon: {
    flexDirection: 'row',
  },
  flexrighticonsingle: {
    position: 'relative',
    right: 15,
  },
  setflexminview: {
    flexDirection: 'row'
  }
});
