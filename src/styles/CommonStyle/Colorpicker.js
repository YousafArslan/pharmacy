import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, Strings, widthPercent, colors } from '../../utils';

export default StyleSheet.create({
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorTheme.BGGreyColor,
    opacity:0.9  ,
  },
  centeredViewtwo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: ColorTheme.BGWhiteColor,
    borderRadius: 7,
    paddingLeft:5,
    paddingRight:5,
    marginHorizontal:22,
    width:'93%',
    paddingBottom:30,
    alignItems: "center",
    shadowColor: ColorTheme.BoxShadowColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
    color: ColorTheme.TextWhiteColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  setheight: {
    height:300,
  },
  setbuttonwidth :{
      paddingTop:30,
      width:'100%',
  },
  setcolorwhite: {
    color: ColorTheme.TextWhiteColor,
    paddingTop:15,
    paddingLeft:15,
    fontSize:20,
  },
  colorpickerpickerimagwidth: {
    width:30,
    height:30,
    marginRight:10,
  },
  pickerbtn: {
    colors: '#000'
  }
});