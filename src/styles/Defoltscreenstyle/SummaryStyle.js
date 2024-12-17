import { SF, SW, wp, hp, colors, Fonts, ColorTheme } from '../../utils';
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
    fontFamily:Fonts.Metropolis_Medium,
  },
  yoreorderstylebox: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    width: '97%',
    borderRadius: 10,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingTop:20,
    marginLeft:5,
    marginBottom:20,
    marginRight:2,
    // paddingBottom:20,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  imagesetus: {
    height:50,
    width:50,
    borderRadius:5,
    marginRight:10,
  },
  vadapavtextstyeleset: {
    color:'black',
    fontSize:14,
    fontWeight:'600',
    fontFamily:Fonts.Metropolis_Medium,
  },
  addreshrtext: {
    color:'gray',
    fontSize:13,
    fontWeight:'600',
    fontFamily:Fonts.Metropolis_Medium,
  },
  flexrowsettext: {
    flexDirection:'row',
    alignItems:'center'
  },
  flexminviewset: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft: 12,
    paddingRight: 15,
  },
  priceflextext: {
    flexDirection:'row',
    justifyContent:'space-between',
    width:'79%'
  },
  borderbottomview: {
    borderBottomColor: ColorTheme.LighGrey,
    // borderStyle:'dashed',
    borderBottomWidth:1,
    // paddingBottom:20,
    marginBottom:13,
  },
  borderbottomviewtwo: {
    borderBottomColor: ColorTheme.LighGrey,
    // borderStyle: 'dashed',
    borderBottomWidth: 1,
    // paddingBottom: 7,
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows wrapping to the next line
  },
  setlistdataitems: {
    paddingLeft: 15,
    paddingBottom: 15,
    flexBasis: '49%', // Ensures each item takes 50% of the row
  },
  setitemstext: {
    color:'gray',
    fontSize:14,
    fontWeight:'600',
    fontFamily:Fonts.Metropolis_Medium,
  },
  blacktitle: {
    color:'black',
    fontSize:14,
    fontWeight:'600',
    fontFamily:Fonts.Metropolis_Medium,
  },
  setwidth70: {
    width:'70%'
  },
  rejectedtextstyle: {
    fontSize:17,
    fontWeight:'700',
    color:'green',
    fontFamily:Fonts.Metropolis_Medium,
    paddingLeft:10,
  },
  rigthdeliveredicon: {
    color: 'green'
  },
  setflexitemview: {
    flexDirection:'row',
    alignItems:'center',
  },
  flexrowsettextrejected: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:15,
    paddingLeft:5,
    paddingTop:18,
  },
  paddingtopset: {
    paddingTop:20,
  },
  flexreowdilevry: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
  }
});
