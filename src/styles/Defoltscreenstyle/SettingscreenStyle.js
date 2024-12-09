import { colors, Fonts , ColorTheme} from '../../utils';
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
    width: '90%',
    height:'100%',
   marginHorizontal: '5%',
   paddingBottom:30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color:colors.theme_backgound,
    fontWeight:'700',
    fontSize:21,
    paddingBottom:20,
    borderBottomWidth:0.6,
    borderBottomColor: ColorTheme.LighGrey,
    fontFamily:Fonts.Metropolis_Medium,
  },
  addatextstyle: {
    color:'black',
    fontWeight:'600',
    fontSize:18,
    fontFamily:Fonts.Metropolis_Medium,
  },
  paregraphtext: {
    color:'black',
    fontWeight:'600',
    fontSize:15,
    opacity:0.7,
    fontFamily:Fonts.Metropolis_Medium,
  },
  textminview: {
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth:0.6,
    borderBottomColor: ColorTheme.LighGrey,
  }
});
