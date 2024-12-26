
import { StyleSheet, Dimensions, Platform } from 'react-native';
import {colors} from '../../utils';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent } from '../../utils';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',    
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    height: '100%'
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  flexhomeimgandtext: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '80%'
  },
  minheaderflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '100%',
    paddingHorizontal: '5%'
  },
  homeimagstyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  hometext: {
    fontSize: 17,
    color: '#000000',
    fontFamily: Fonts.Poppins_Medium,
  },
  addreshtext: {
    fontSize: 13.5,
    color: '#B2B2B2',
    fontFamily: Fonts.Poppins_Medium,
    marginTop: -5,
  },
  heartimagstyle: {
    width: 32,
    height: 32,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: ColorTheme.InputBG,
    borderRadius: 13,
    marginHorizontal: '5%',
    width: '74%',
    height:50,
  },
  setinputtext: {
    fontSize: 16,
    fontFamily: Fonts.Roboto_Medium,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    borderColor: ColorTheme.BorderColor,
    borderRadius: 13
  },
  setwidthfullset: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: 20,
  },
  settextviewtitle: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'black',
    fontWeight: '700'
  },
  textstylerelish: {
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
    color: ColorTheme.TextGreyColor,
  },
  setwhiteboxview: {
   
    color: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
   
  },
  setwhiteboxviewtwo: {
    color: 'black',
    width: '100%',
    borderRadius: 10,
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  twxtstylewhite: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    paddingLeft:15,
    paddingBottom:10,
    fontWeight: '700',
    textAlign:'left'
  },
  savingtextstyle: {
    fontSize: 12,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '600'
  },
  paregraphtextstyule: {
    fontSize: 15,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '600',
    paddingTop: 10,
    lineHeight: 16,
  },
  setwidthfifty: {
    width: '52%'
  },
  settrestyele: {
    width: 130,
    height: 130,
    borderRadius:200,
    position:'relative',
    left:10,
  },
  largwhiteboxone: {
    backgroundColor: ColorTheme.LighColorSeven,
    color: 'black',
    width: '47%',
    borderRadius: 17,
    overflow: 'hidden',
    paddingTop: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 50,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  largwhiteboxtwo: {
    backgroundColor: ColorTheme.LighColorSeven,
    color: 'black',
    width: '47%',
    overflow: 'hidden',
    borderRadius: 17,
    paddingTop: 10,
    marginLeft: 5,
    marginBottom: 20,
    marginTop: 20,
    paddingBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  largetextstyleset: {
    fontSize: 20,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '800'
  },
  settextupto: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
  },
  noupperlimittext: {
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '800'
  },
  flexrtowsetbox: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
  },
  setbgcolorican: {
    backgroundColor: ColorTheme.LighGrey,
    width: 20,
    height: 20,
    borderRadius: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  setbgcoloricantwo: {
    backgroundColor: ColorTheme.LighGrey,
    width: 20,
    height: 20,
    borderRadius: 220,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  setboxinimage: {
    height: 100,
    width: 100,
    borderRadius: 200,
    borderWidth: 5,
    borderColor: ColorTheme.TextGreyColor
  },
  flexendimage: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: -30,
    right: 0,
  },
  setsinglebox: {
    // backgroundColor: 'hsl(321.1, 86%, 66.3%)',
    color: 'black',
    width: 160,
    flex:1,
    flexDirection: 'row',
    marginRight:30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    paddingTop: 30,
    marginRight: 10,
    marginLeft: 5,
    marginBottom: 20,
    marginTop: 60,
    paddingBottom: 20,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  testalignwhite: {
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 11,
  },
  usertextstyle: {
    fontSize: Platform.OS === 'ios' ? 14 : 16,
    paddingTop:Platform.OS === 'ios' ? 5 : 0,
    fontFamily: Fonts.Metropolis_Medium,
    color: 'white',
    textAlign: 'center',
    fontWeight: '800'
  },
  setboxtopimage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  setviewspacetext: {
    marginTop: 30,
  },
  flextocenterimage: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:-60,
  },
  digittextstyleline: {
    textDecorationLine: 'line-through',
    color:'yellow'
  },
  marginrightset: {
    marginRight:3,
  },
  flatelistGrid: {
    paddingLeft:15,
  }
});
