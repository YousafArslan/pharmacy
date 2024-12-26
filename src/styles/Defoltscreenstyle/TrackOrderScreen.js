import { SH, Fonts, ColorTheme, colorsset} from '../../utils';
import { StyleSheet, Dimensions, Platform } from 'react-native';

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
  keybordtopviewstyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  minviewsigninscreen: {
    width: '90%',
    height:'100%',
    marginHorizontal: '5%',
  },
  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingBottom:200,
    paddingTop:5,
  },
  trackorderviewwhite: {
    backgroundColor: ColorTheme.BGWhiteColor,
    paddingLeft:10,
    paddingTop:10,
    marginTop:10,
    paddingRight:10,
    paddingBottom:10,
    borderRadius:17,
  },
  imagesetus: {
    height:100,
    width:100,
  },
  setimagewisdth: {
    width:'30%',
    marginRight:20,
  },
  setviewwoidth70: {
    width:'60%',
  },
  settextcolor: {
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:17,
    lineHeight:20,
  },
  setminviewflex: {
    flexDirection:'row',
  },
  settextcolortwo: {
    borderTopWidth:1,
    borderTopColor: ColorTheme.LighGrey,
    // borderStyle:'dashed',
    paddingTop:5,
    marginTop:10,
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:15,
    lineHeight:20,
  },
  settextcolorthree: {
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:15,
    lineHeight:20,
    paddingTop:7,
  },
  trackorderscreenset: {
    backgroundColor:'white',
    marginTop:20,
    borderRadius:13,
    padding:10,
    paddingBottom:45,
    flexDirection:'row',
  },
  dotstyle: {
    width:15,
    height:15,
    borderRadius:100,
  },
  setline: {
    width:3,
    height:70,
    borderRightWidth:2,
    // borderStyle:'dashed',
    position:'relative',
    left:6,
  },
  setlinetwo: {
    width:3,
    height:70,
    borderRightWidth:2,
    // borderStyle:'dashed',
    borderColor: ColorTheme.LighGrey,
    position:'relative',
    left:6,
  },
  dotviewmin: {
    marginRight:20,
    paddingTop:17,
  },
  topspaceminview: {
    position:'relative',
    top:40,
  },
  topspaceminviewtwo: {
    position:'relative',
    top:80,
  },
  topspaceminviewthree: {
    position:'relative',
    top:110,
    width:'90%',
  },
  dotstyletwo: {
    width:15,
    height:15,
    borderWidth:2,
    borderColor: ColorTheme.LighGrey,
    borderRadius:100,
  }
 
});
