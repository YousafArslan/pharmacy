import { SF, SW, wp, hp, widthPercent, Fonts, ColorTheme } from '../../utils';
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
    height: '100%',
    marginHorizontal: '5%',
    paddingBottom: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  cardtextstyle: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    borderTopColor: ColorTheme.LighGrey,
    borderTopWidth: 0.5,
    paddingTop: 30,
    paddingBottom: 15,
  },
  cardtextstyletwo: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: 30,
    paddingBottom: 15,
  },
  cardtextstylethree: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: 30,
    borderTopColor: ColorTheme.LighGrey,
    borderTopWidth: .3,
    paddingBottom: 15,
    marginTop: 30,
    
  },
  flexrowcreditcard: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flexrowcreditcardtwo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  bottomborder: {    
    borderBottomColor: ColorTheme.LighGrey, 
    borderBottomWidth: 0.3,
    paddingBottom: 20   
  },
  creditcardtext: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    marginLeft: 20,
    color: 'black'
  },
  youneedstext: {
    fontSize: 13,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    marginLeft: 20,
    paddingTop: 5,
    lineHeight: 19,
    color: ColorTheme.TextGreyColor
  },
  setflexrowarrowleft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  setflexrowarrowlefttwo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
    borderBottomWidth: 0.3,
    borderBottomColor: ColorTheme.LighGrey,
    paddingBottom: 25,
  },
  setflexrowarrowleftthree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  iconsetborderwidth: {
    borderWidth: 1,
    borderColor: ColorTheme.LighGrey,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 5,
  },
  setbgimage: {
    width: 35,
    height: 35,
  },
  settextwidth: {
    width: '75%'
  },
  sodexoimgwidth: {
    width: 30,
    height: 30,
  },
  paregraphtextstyleset: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '600',
    paddingTop: 5,
    lineHeight: 22,
    color: ColorTheme.TextGreyColor,
    borderTopWidth: 1,
    borderTopColor: ColorTheme.LighGrey,
    paddingTop: 20,
  },
  setparegraphviewstyle: {
    marginLeft: 70,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
