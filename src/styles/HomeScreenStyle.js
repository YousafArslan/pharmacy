import { SF, SW, wp, hp, widthPercent, Fonts, ColorTheme } from '../utils';
import { StyleSheet, Dimensions } from 'react-native';
const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = 0;
const HEADER_HEIGHT = 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flexGrow: 1,
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  navContainer: {
    height: HEADER_HEIGHT,
    marginHorizontal: 10
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: "transparent"
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    paddingRight: 11,

  },
  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  },
  flexDirectionrowskipnext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  homeheadertext: {
    color: 'white',
    fontWeight: '700',
    fontSize: 25,
  },
  popularcourcetext: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
    paddingBottom: 10,
  },
  popularcourcetexttwo: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
  },
  popularview: {
    marginTop: -50,
    marginBottom: 25,
  },
  newcoursestext: {
    color: 'black',
    fontFamily: 'DMSans-Bold',
    paddingLeft: 13,
    fontSize: 21,
    marginTop: 20
  },
  newcoursestextview: {

  },
  instructertextsetview: {
    marginTop: -15,
  },
  instructertextset: {
    color: 'black',
    fontWeight: '700',
    paddingLeft: 13,
    fontSize: 21,
  },
  textContainer: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '100%',
    fontWeight: '700',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    color: 'white',
  },
  textContainertwo: {
    fontSize: 15,
    fontFamily: Fonts.Nuntion_Italic,
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 40,
    color: 'white',
  },
  textbottomparegraph: {
    fontSize: 13,
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '80%',
    lineHeight: 18,
    paddingTop: 90,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white',
  },
  roundimagtitletextset: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    position: 'absolute',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white',
  },
  rounftextview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitleEven: {
    color: 'black'
  },
  subtitle: {
    marginTop: 6,
    color: 'gray',
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: ColorTheme.RGBText
  },
  whiteshadowimgbottom: {
    backgroundColor: 'white',
    width: '90%',
    paddingBottom: 20,
    marginHorizontal: '5.5%',
    textAlign: 'center',
    borderRadius: 7,
    position: 'relative',
    right: 65,
    shadowColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,

  },
  whitebodyimagetextstyle: {
    fontSize: 14,
    paddingRight: 15,
    paddingTop: 10,
    fontFamily: 'DMSans-Medium',
    color: 'black',
  },
  whitebodyimagetextstyletwo: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: 'black',
  },
  whitebodyimagetextstyletwo2: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    paddingTop: 6,
    paddingBottom: 5,
    paddingRight: 15,
    height: 70,
  },
  whitebodyimagetextstylethree: {
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    position: 'relative',
    left: 5,
  },
  blacktitleunderlineset: {
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    color: 'black',
    paddingTop: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    marginRight: 15,
    marginBottom: 10,
    height: 60,
  },
  whiteshadowimgbottomtwo: {
    backgroundColor: 'white',
    width: '75%',
    paddingBottom: 20,
    marginHorizontal: '5.5%',
    textAlign: 'center',
    borderRadius: 7,
    position: 'relative',
    right: 80,
    top: 25,
    shadowColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  usernametext: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    paddingTop: 15,
  },
  usernamejobtext: {
    textAlign: 'center',
    paddingTop: 5,
    fontFamily: 'DMSans-Bold',
    color: 'black',
  },
  usernamerenkintext: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
  },
  usernamerenkintexttwo: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'DMSans-Bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  rendervontantstyleset: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    width: '100%',
  },
  bodytwo: {
    paddingHorizontal: 50,
  },
  flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  alltextleftset: {
    paddingLeft: 15,
  },
  stariconstyle: {
    color: ColorTheme.colorHSL,
    flexDirection: 'row',
    position: 'relative',

  },
  chengecolorstyle: {
    color: ColorTheme.colorHSL,
    flexDirection: 'row',
    position: 'relative',
    fontSize: 18,
  },
  stariconimagestyle: {
    width: 50,
    height: 50,
  },
  flexrowstyleset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },
  minstyleviewphotograpgy: {

    height: '100%',
    width: '100%',
  },
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
  },
  minviewsigninscreen: {
    width: '100%',
    marginTop: '5%',

  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  notificationivonandimhflexview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagstylesetprofile: {
    height: 27,
    width: 27,
    borderRadius: 1000,
    marginRight: 15,
    marginLeft: 15,
  },
  navbarheaderminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: Platform.OS === 'ios' ? 18 : 0,
  },
  flexsettileimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingTop: 10,
  },
  colorblseticon: {
    color: '#e1eb34',
  },
  imagsetstyle: {
    width: SW(90),
    height: 90,
    marginTop:10,
    borderRadius: 13,
    marginRight: 12,
  },
  imagsetstylesetthreeslider: {
    width: 225,
    height: 150,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  iosstyleset: {
    marginTop: 25,
    backgroundColor: 'white',
  },
  hometextheadercolor: {
    color: ColorTheme.ColorHSLThree,
    fontSize: 23,
    fontWeight: '700',
  },
  minbody: {
    marginTop: 30,
  },
  allcenterminview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 12,
    height: 12,
    borderRadius: 100,
    marginHorizontal: -4,
  },
  setdotactive: {
    width: 17,
    height: 17,
    borderRadius: 100,
  },
  linearGradient: {
    backgroundColor: ColorTheme.BgRed
  },
  linearGradient: {
    borderRadius: 13,
    height: 140,
  },
  flexrowimagandtext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  imagecenyer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%'
  },
  textbottomparegraphTWO: {
    fontSize: 11,
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '100%',
    textAlign: 'right',
    fontWeight: '700',
    lineHeight: 18,
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
    color: 'white',
  },
  seticon: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    width: '100%',
    textAlign: 'right',
    fontWeight: '700',
    lineHeight: 18,
    paddingTop: 100,
    paddingLeft: 15,
    paddingRight: 10,
    marginRight:20,
    marginTop: 10,
    color: 'white',
    right:75,
  },
  minviewfunction: {
    borderRadius: 5,
    width: '100%',
    marginTop: 30,
  },
  paginationContainer: {
    marginTop:-10,
  }
});
