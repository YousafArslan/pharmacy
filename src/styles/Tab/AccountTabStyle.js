import { SF,SW,wp,hp,colors, Fonts, ColorTheme} from '../../utils';
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
    // backgroundColor:'hsl(0, 0%, 94.9%)',
    backgroundColor:'white'   
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    width: '100%',
    paddingHorizontal:'5%',
  },

  minflexview: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  useraccountwhitebox: {
    width:'100%',
    marginTop:20,
    borderRadius:20,
    paddingTop:16,
    paddingBottom:16,
    paddingLeft:30,
    backgroundColor: ColorTheme.LighColorFour,
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 345,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 0,
  },
  flexrowtwxtspace: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:'2%'
  },
  persnaltext: {
    fontSize:17,
    fontWeight:'700',
    color:'#000000',
    fontFamily:Fonts.Metropolis_Medium,
  },
  edittextset: {
    fontSize:18,
    fontWeight:'700',
    fontFamily:Fonts.Metropolis_Medium,
  },
  imagesetus: {
    height:90,
    width:90,
    marginRight:15,
  },
  fleximageandtext: {
    flexDirection:'row',
  },
  sumanyatextset: {
    fontSize:17,
    fontWeight:'600',
    color:'black',
    fontFamily:Fonts.Metropolis_Medium,
  },
  setgimailtext: {
    fontSize:14,
    fontWeight:'600',
    color:'#000000',
    opacity:0.5,
    fontFamily:Fonts.Metropolis_Medium,
    borderBottomWidth:1,
    borderBottomColor:'#000000',
    paddingBottom:8,
  },
  setgimailtextwo: {
    fontSize:15,
    fontWeight:'600',
    color:'#000000',
    opacity:0.5,
    paddingTop:5,
    fontFamily:Fonts.Metropolis_Medium,
    borderBottomWidth:1,
    borderBottomColor:'#000000',
    paddingBottom:8,
    marginBottom:6,
  },
  addreshtext: {
    fontSize:14,
    fontWeight:'600',
    color:'#000000',
    opacity:0.5,
    paddingTop:3,
    fontFamily:Fonts.Metropolis_Medium,
  },
  setviewwidth: {
    width:'53%',
  },
  setbgcolorwhite: {
    backgroundColor:'hsl(0, 0%, 94.9%)',
    width:'22%',
    marginRight:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:30,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:13,
  },
  flexrowsettile: {
    flexDirection:'row',
    justifyContent:'center'
  },
  bookmarktextstyle: {
    fontSize:9,
    paddingTop:4,
    fontWeight:'600',
    color:'black',
    fontFamily:Fonts.Metropolis_Medium,
  },
  flexrowsetbgcolor: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:15,
    marginBottom:20,
  },
  setbgcolordata: {
    backgroundColor:ColorTheme.LighColorFour,
    borderRadius:20,
    height:50,
    paddingHorizontal:'5%',
    justifyContent:'space-between',
    paddingRight:40,
    flexDirection:'row',
    alignItems:'center',
    marginTop:15,
  },
  flexrowset: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100%',
    paddingHorizontal:'5%',
    paddingRight:40,
  },
  usertextstyle: {
    fontSize:18,
    fontFamily:Fonts.Poppins_Medium,
    fontWeight:'700',
    marginRight:10
  },
  fourtextminview: {
    marginTop:30,
    marginBottom:30,
  },
  sendfeedbacktext: {
    fontSize:18,
    color:'#000000',
    fontFamily:Fonts.Metropolis_Medium,
    fontWeight:'600',
    paddingBottom:13,
  },
  setbgwhiteabout: {
    backgroundColor: ColorTheme.LighColorFour,
    width:'35%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start',
    padding:9,
    marginBottom:30,
    borderRadius:100,
  },
  abouttextstyle: {
    fontSize:17,
    color:'#000000',
    fontFamily:Fonts.Metropolis_Medium,
    fontWeight:'600',
    marginLeft:10,
  },
  updatebutton: {
    borderRadius:100,
  },
  textstyleupdate: {
    color:'white'
  },
  setbuttonstyleview:{
    marginTop:20,
    marginBottom:40,
  }
});
