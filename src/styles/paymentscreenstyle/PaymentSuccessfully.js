import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, colors, heightPercent, widthPercent } from '../../utils';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: ColorTheme.sp_Theme,
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width:'90%',
    marginHorizontal:'5%',   
    marginTop:-30,
  },
  minstyleviewphotograpgy: {
    flexDirection:'row',
    justifyContent:'center',
    height:'100%',
   
    alignItems:'center',
    backgroundColor:'white'
},
paymentsuccesfullimg: {
    width:200,
    height:200,
},
imagecebter: {
  flexDirection:'row',
  justifyContent:'center',
},
textcenterpayment: {
  textAlign:'center',
  fontSize:25,
  lineHeight:30,
  fontWeight:'700',
  fontFamily:Fonts.Metropolis_Medium,
},
textcenterpaymenttwo: {
  textAlign:'center',
  fontSize:16,
  paddingLeft:5,
  paddingRight:5,
  lineHeight:20,
  color: ColorTheme.TextGreyColor,
  borderBottomColor:ColorTheme.TextGreyColor,
  borderBottomWidth:1,
  // borderStyle:'dashed',
  paddingBottom:20,
  fontWeight:'600',
  fontFamily:Fonts.Metropolis_Medium,
  paddingTop:20,
},
burgeritemname: {
  fontSize:18,
  paddingLeft:5,
  lineHeight:20,
  color:'black',
  paddingBottom:20,
  fontWeight:'700',
  fontFamily:Fonts.Metropolis_Medium,
  paddingTop:30,
},
textcenterview: {
  flexDirection:'row',
  justifyContent:'center',
},
flexrowcoffitext: {
  flexDirection:'row',
  justifyContent:'space-between',
  borderBottomWidth:1,
  // borderStyle:'dashed',
  paddingBottom:10,
  marginBottom:10,
  borderBottomColor:'gray',
},
flexrowcoffitexttwo: {
  flexDirection:'row',
  justifyContent:'space-between',
  paddingBottom:10,
  marginBottom:10,
},
totalamountpaid: {
  textAlign:'center',
  fontSize:12,
  color:'gray',
  lineHeight:30,
  fontWeight:'600',
  fontFamily:Fonts.Metropolis_Medium,
},
proicetextset: {
  textAlign:'center',
  fontSize:12,
  color:'black',
  lineHeight:30,
  fontWeight:'600',
  fontFamily:Fonts.Metropolis_Medium,
}
});