import { colors, Fonts, ColorTheme } from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

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
    height: '100%',
    marginTop: '25%',
    paddingBottom:30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  setradetitlecenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.theme_backgound,
    width: '70%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 17,
  },
  mincenterview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  seemoretextstyle: {
    fontFamily: Fonts.Metropolis_Medium,
    color: colors.theme_backgound,
    fontSize: 20,
  },
  todayattimeset: {
    color: ColorTheme.TextGreyColor,
    textAlign: 'center',
    paddingTop: 40,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 17,
  },
  flexmessage: {
    flexDirection: 'row',
    marginRight: 20,
    paddingLeft: 10,
    marginLeft: 5,
  },
  flexmessagetwo: {
    flexDirection: 'row',
    marginRight: 20,
    paddingLeft: 10,
    marginLeft: 5,
    marginTop: 30,
  },
  lightgraybgcolor: {
    backgroundColor: ColorTheme.LighColorOne,
    padding: 10,
    borderRadius: 7,
  },
  lightgraybgcolorthree: {
    backgroundColor: ColorTheme.LighColorThree,
    padding: 10,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  lightgraybgcolorTWO: {
    backgroundColor: ColorTheme.LighColorTwo,
    padding: 10,
    borderWidth:1,
    borderColor: ColorTheme.LighGrey,
    borderTopWidth:0,
  },
  welcometextstyle: {
    fontSize: 17,
    color: 'black',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 22,
    opacity:0.7,
  },
  bgcoloryellow: {
    backgroundColor: ColorTheme.Bgcoloryellow,
    width: 40,
    height: 40,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  nowtextstyle: {
    flexDirection: 'row',
    paddingLeft: 75,
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
  },
  settextwidthborder: {
    width:'93%'
  },
  settextwidthbordertwo: {
    width:'85%'
  },
  redtextcolor: {
    fontSize: 17,
    color: 'red',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 22,
    paddingTop:2,
  },
  textcolorgray: {
    fontSize: 15,
    color: ColorTheme.TextGreyColor,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 20,
  },
  differnycolorset: {
    fontSize: 16,
    color: colors.theme_backgound,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 20,
    paddingBottom:2,
  },
  boldtextstyle: {
    fontSize: 18,
    color: colors.theme_backgound,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 20,
    fontWeight:'700',
  },
  greencolortext: {
    fontSize: 17,
    color: 'green',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 22,
    paddingTop:2,
  }
});
