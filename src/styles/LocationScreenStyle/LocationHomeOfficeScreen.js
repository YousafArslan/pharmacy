
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, colors, Strings, widthPercent, ColorTheme } from '../../utils';

export default StyleSheet.create({
  minstyleviewphotograpgy: {
    height: '100%',
    width: '100%',
     backgroundColor: ColorTheme.LighColorFour
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:Platform.OS === 'ios' ? 70 : 30,
    height:Platform.OS === 'ios' ? 240 : 200,
    
    paddingBottom:40,
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  setflexcenter: {
    flexDirection:'row',
    justifyContent:'center',
    height: 80,
    width: 80,
    backgroundColor:'white',
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  bgwhiteview: {
    backgroundColor:'white',
     borderRadius:30,
    marginTop:-70,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:40,
    paddingTop:40,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 0 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 0 : 25,
    elevation: Platform.OS === 'ios' ? 0 : 2,
  },
  setsearchinputbgcolor: {
    backgroundColor: ColorTheme.BGF4F4F4,
    paddingLeft:15,
    flexDirection:'row',
    alignItems:'center',
    alignItems:'center',
    borderRadius:15,
    height:57,
    marginTop:25,
  },
  texttype: {
    fontSize:16,
    fontFamily:Fonts.Poppins_Medium,
    padding:0,
    paddingTop:5,
    width:220,
    marginLeft:10,
  },
  flexrowhomeimage: {
    flexDirection:'row',
    paddingTop:20,
    alignItems:'center',
    // width:'90%'
  },
  satyanilaym: {
    color:'#000000',
    fontSize:17,
    fontFamily:Fonts.Poppins_Medium,
  },
  satyanilaymtwo: {
    color: ColorTheme.InputTextColor,
    fontSize:13,
    width:'99%',
    fontFamily:Fonts.Poppins_Medium,
  },
  marginright: {
    marginRight:20,
  },
  flexrowset: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:'10%',
    paddingTop:30,
  },
  saveaddresh: {
    color:'#757575',
    fontSize:18,
    fontFamily:Fonts.Poppins_Medium,
    marginRight:16,
  },
  setbgminviewhome: {
    paddingHorizontal:'17%',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
  },
  sethometext: {
    fontSize:15,
    lineHeight:24,
    fontFamily:Fonts.Poppins_Medium,
    color:'#2E3A59',
    paddingTop:7,
  },
 setwhiteboxinhome: {
   width:110,
   height:90,
   flexDirection:'row',
   borderRadius:30,
   marginBottom:30,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:'white',
  shadowOffset: {
    width: 0,
    height: Platform.OS === 'ios' ? 2 : 25,
  },
  shadowOpacity: 0.58,
  shadowRadius: Platform.OS === 'ios' ? 2 : 25,
  elevation: Platform.OS === 'ios' ? 1 : 2,
 },
 centerimg: {
   marginLeft:5,
 },
 dilivertotextstyle: {
   fontWeight:'600',
   color:'#000000',
   fontFamily:Fonts.Poppins_Medium,
   fontSize:17,
 },
 flexrowdilevericon: {
   flexDirection:'row',
   alignItems:'center',
 },
 edittextflexpencil: {
  flexDirection:'row',
  alignItems:'center'
 },
 homeimage: {
   width:60,
   height:60,
  //  tintColor:colors.theme_backgound,
 },
 iconcenter: {
   flexDirection:'row',
   justifyContent:'center'
 },
 mapstyle: {
   flex:1,
 },
 setimage: {
   width:'100%',
   height:100,
 }
});
