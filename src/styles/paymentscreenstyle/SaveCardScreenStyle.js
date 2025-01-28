import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, heightPercent, widthPercent } from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen,
  },
  smaili: {
    width: SH(110),
    height: SH(110),
  },
  setstyleinputtext: {
    backgroundColor: ColorTheme.LighColorFour,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 7,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  setstyleinputtexttwo: {
    backgroundColor: ColorTheme.LighColorFour,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 7,
    paddingTop: 5,
    paddingBottom: 5,
    width: '48%',
    marginRight: 15,
    marginTop: 18,
  },
  minviewsigninscreen: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: 10,
  },
  inputstyle: {
    padding: 0,
    color: 'black',
    width: '100%',
    fontFamily: Fonts.Poppins_Medium,
  },
  titleStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  textstyle: {
    color: 'black',
    fontFamily: Fonts.Poppins_Medium,
  },
  flexrowsetcemera: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexrowsetinput: {
    flexDirection: 'row',
  },
  setbuttonstyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 26,
    height: 120,
    // backgroundColor: ColorTheme.theme_backgound,
  },
  setwidthimage: {
    height: 230,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  creditcard: {
    height: 210,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 380,
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 30,
    paddingTop: 30,
    justifyContent: 'center',
    height: '100%',
  },
  setbuttonstylesavecard: {
    borderRadius: 100,
  },
  setbuttontextstyle: {
    color: 'white',
  },
  bottomContainer: {
    position: 'relative',
    bottom: 20,
    left: 0,
    right: 0,
    top: 70,
    paddingTop: 10,
  },
  bottomPricing: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 10,
  },
});