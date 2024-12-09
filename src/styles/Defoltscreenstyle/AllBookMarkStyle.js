import { colors, Fonts, ColorTheme } from '../../utils';
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
    alignItems:'center',
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
   flexDirection:'row',
  },
  flexone: {
    flex:2,
  },
  settingtext: {
    color:'black',
    fontWeight:'600',
    fontSize:20,
    marginLeft:15,
    fontFamily:Fonts.Metropolis_Medium,
  },
  nothingheretext: {
    fontWeight:'600',
    paddingBottom:25,
    textAlign:'center',
    marginLeft:20,
    fontSize:17,
    fontFamily:Fonts.Metropolis_Medium,
  },
  nothingheretexttwo: {
    fontWeight:'600',
    paddingBottom:25,
    textAlign:'center',
    fontSize:17,
    fontFamily:Fonts.Metropolis_Medium,
  },
  flexixconview: {
    flexDirection:'row',
    justifyContent:'center',
  },
  flexixconviewtwo: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
  },
  addplacestextset: {
    textAlign:'center',
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:10,
    marginLeft:50,
    marginRight:50,
    fontWeight:'600',
    borderBottomWidth:2,
    borderStyle: 'dashed',
    fontSize:19,
    fontFamily:Fonts.Metropolis_Medium,
  },
  addplacestextsettwo: {
    textAlign:'center',
    marginTop:-12,
    fontWeight:'600',
    fontSize:19,
    color:'black',
    fontFamily:Fonts.Metropolis_Medium,
  },
  flexiconset: {
    flexDirection:'row',
    justifyContent:'center'
  },
  dropdown1BtnStyle: {
    width:'100%',
    borderRadius:100,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'space-between'
  },
  dropdown1BtnTxtStyle: {
    textAlign:'center',
    paddingTop:20,
    fontWeight:'600',
    fontSize:19,
    color:'black',
    fontFamily:Fonts.Metropolis_Medium,
  },
  dropdown1DropdownStyle: {
    backgroundColor: 'white'
  },
    dropdown1RowStyle: {
    backgroundColor: ColorTheme.DropdownRowColor, 
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: ColorTheme.DroptextColor,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Fonts.Poppins_Medium,
    textAlign:'left',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredViewtwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: ColorTheme.BGGreyColor,
    opacity:0.9,   
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    width:'90%',
    padding: 15,
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewtwo: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    width:'90%',
    height:400,
    padding: 15,
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: ColorTheme.BtnOpenBGColor,
  },
  buttonClose: {
    backgroundColor: ColorTheme.BtnCloseBGColor,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  simplestatetext: {
    color:'black',
    fontWeight:'600',
    opacity:0.7,
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:18,
    borderBottomWidth:1.5,
    borderStyle: 'dashed',
    paddingTop:10,
    paddingBottom:10,
  },
  simplestatetextsettwo: {
    color:'white',
    fontWeight:'600',
    opacity:0.7,
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:18,
    borderStyle: 'dashed',
    paddingTop:10,
    paddingBottom:10,
  },
  postionabolutemenu: {
    position:'absolute',
    right:20,
    width:80,
    height:80,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    bottom:20,
    backgroundColor:'black',
    borderRadius:100,
  },
  menucolorsetbgcolor: {
    color:'white',
    fontWeight:'700',
    fontFamily:Fonts.Metropolis_Medium,
    fontSize:13,
  },
  setcentericon: {
    flexDirection:'row',
    justifyContent:'center'
  },
  flextextrtwosimple: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  centeredViewtwochild: {
    width: '100%',
    position: 'relative'
  }
});
