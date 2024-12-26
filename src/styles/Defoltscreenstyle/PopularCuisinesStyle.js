import { colors, Fonts, ColorTheme} from '../../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  setflexviewdata: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 70,
  },
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
    marginTop: 30,
    marginBottom: 100,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: 'white',
    borderRadius: 13,
    marginHorizontal: '5%',
    width: '74%',
  },
  setinputtext: {
    fontSize: 16,
    height: 49,
    fontFamily: Fonts.Roboto_Medium,
    padding: 0,
    paddingLeft: 10,
    width: 220,
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    borderColor: ColorTheme.BorderColor,
    backgroundColor: 'white',
    borderRadius: 13,
  },
  setbgcolorred: {
    height: 200,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  setbgcolorviewmin: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
    top: -70,
    marginBottom: 20,
    paddingTop: 30,
  },
  textstylesearches: {
    fontSize: 20,
    fontFamily: Fonts.Poppins_Medium,
    color: ColorTheme.TextBlackColor,
    fontWeight: '700',
    paddingBottom: 10,
  },
  popularmedicine: {
    fontSize: 20,
    fontFamily: Fonts.Poppins_Medium,
    color: '#333333',
    fontWeight: '700',
    paddingLeft: 20,
    paddingTop: 20,
  },
  flexrowsetsearchicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settextdatapizz: {
    fontSize: 16,
    fontFamily: Fonts.Poppins_Medium,
    color: ColorTheme.Color7D7D7D,
    fontWeight: '600',
    marginLeft: 7,
  },
  pleseentername: {
    fontSize: 19,
    fontFamily: Fonts.Poppins_Medium,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 5,
  },
  toptospace: {
    marginTop: 25,
  },
  flexcenterviewTWO: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widtsetnew: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 17,
  },
  imagecenterstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textsetfood: {
    fontSize: 11,
    color: '#707070',
    fontFamily: Fonts.Roboto_Medium,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 4,
  },
  setflex: {
    paddingLeft: 10,
  },
  imagsetstyle: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  setwhiteboxnodatafound: {
    height: 50,
    borderRadius: 7,
    backgroundColor: ColorTheme.BGWhiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: '74%',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  bgcolorsetvikewstyle: {
    paddingLeft: 20,
  },
  searchtextlist: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  textboldstyle: {
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 15,
  },
  // textboldstyletwo: {
  //   fontWeight: '700',
  //   fontFamily: Fonts.Metropolis_Medium,
  // },
});
