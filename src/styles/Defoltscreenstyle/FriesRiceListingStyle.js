import { colors, Fonts, ColorTheme} from '../../utils';
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
    height: '100%',
    width: '100%',
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen,
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%',
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },

  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: ColorTheme.BGWhiteColor,
    borderRadius: 13,
    marginHorizontal: '5%',
    width: '74%',
  },
  setinputtext: {
    fontSize: 16,
    height: 49,
    fontFamily: Fonts.Roboto_Medium,
    width: 200,
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    borderColor: ColorTheme.BorderColor,
    backgroundColor: ColorTheme.BGWhiteColor,
    borderRadius: 13,
  },
  setbgcolorred: {
    height: 100,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  setbgcolorviewmin: {
    backgroundColor: ColorTheme.BGWhiteColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    // top: -40,
    paddingLeft: 30,
    paddingTop: 10,
  },
  textstylesearches: {
    fontSize: 20,
    fontFamily: Fonts.Poppins_Medium,
    color: '#333333',
    fontWeight: '700',
    paddingBottom: 10,
  },
  flexrowsetsearchicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settextdatapizz: {
    fontSize: 17,
    fontFamily: Fonts.Poppins_Medium,
    color: ColorTheme.Color7D7D7D,
    fontWeight: '600',
    marginLeft: 7,
  },
  toptospace: {
    marginTop: 50,
  },
  setspacecomeview: {
    marginTop: -80,
  },
  setbgborderview: {
    borderWidth: 1,
    paddingLeft: 8,
    borderColor: 'white',
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 18,
    marginRight: 10,
    marginBottom: 20,
  },
  textstyleset: {
    color: ColorTheme.TextWhiteColor,
    fontSize: 16,
    fontFamily: Fonts.Metropolis_Medium,
  },
  setflex: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  bgcolorwhiteset: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    paddingLeft: 15,
    paddingTop: 30,
  },
  imagsetstyle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20,
  },
  textboldstyle: {
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
  },
  textboldstyletwo: {
    color: ColorTheme.TextGreyColor,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
  },
  deleverytextunbold: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
  deleverytextunboldtwo: {
    color: ColorTheme.TextRed,
    fontWeight: '600',
    fontSize: 14,
  },
  setflexviewdata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginRight: 70,
  },
  setdishtext: {
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
  },
  imgofnew: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginRight: 20,
  },
});
