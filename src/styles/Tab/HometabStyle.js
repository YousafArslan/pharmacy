
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { SF, SH, SW, Fonts, ColorTheme, colors, widthPercent } from '../../utils';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');


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
  },
  minheaderflexview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  homeimagstyleusericon: {
    marginRight: 5,
  },
  homeimagstyle: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  hometext: {
    fontSize: 15,
    fontFamily: Fonts.Poppins_Medium,
  },
  addreshtext: {
    fontSize: 12,
    color: ColorTheme.ColorB2B2B2,
    fontFamily: Fonts.Poppins_Medium,
    marginTop: -5,
  },
  heartimagstyle: {
    width: 62,
    height: 62,
    position: 'relative',
    left: 10,
  },
  flextextinput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    backgroundColor: ColorTheme.InputBG,
    borderRadius: 13,
    marginHorizontal: '5%',
    width: '74%',
    height: Platform.OS === 'ios' ? 50 : 50,
  },
  setinputtext: {
    fontSize: 16,
    fontFamily: Fonts.Roboto_Medium,
  },
  flexinputstyle: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 10,
  },
  seticonborder: {
    borderWidth: 1,
    padding: 12,
    borderColor: ColorTheme.BorderColor,
    borderRadius: 13
  },
  placeholder: {
    height: 200,
    margin: 50,
    backgroundColor: ColorTheme.BGGreyColor,
  },
  stickyComponent: {
    height: 30,
    backgroundColor: ColorTheme.BgRed,
  },
  searchBarContainer: {
    backgroundColor: ColorTheme.BgRed,
  },
  header: {
    backgroundColor: ColorTheme.BG1c1c1c,
    width: '100%',
    zIndex: 1,
  },
  searcjtextcolorstyle: {
    color: ColorTheme.SrchText,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 16,
    marginLeft: 15,
  },

  setbgcolorviewtime: {
    marginRight: 15,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 10,
    // marginLeft: SH(3),
    width: 180,
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden'
  },
  flexrowsecenterimage: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    // borderBottomColor:'lightgray',
    // borderBottomWidth:1,
    // borderStyle:'dashed',
    marginBottom: 5,
  },
  whiteboximage: {
    marginTop: 20,
    width: '100%',
    height: 120,
  },
  setnormatextstyle: {
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 18,
    paddingLeft: 15,
  },
  flexrowjuctycenter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    marginTop: -5
  },
  flexrowsettext: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 2,
  },
  settextprice: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 21,
    marginRight: 10,
  },
  settextpricetwo: {
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 21,
    fontWeight: '700',
    marginRight: 10,
    color: 'black',
    textDecorationLine: 'line-through',
    textDecorationColor: 'gray',
  },
  dealtextset: {
    fontSize: 13,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 21,
    marginRight: 10,
    color: 'black',
  },
  timetextset: {
    fontSize: 16,
    fontFamily: Fonts.Metropolis_Medium,
    lineHeight: 21,
    marginRight: 10,
    fontWeight: '700',
    color: 'black',
  },
  flexrocenterjusty: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8,
    paddingBottom: 8,
  },
  addbutttonwidth: {
    width: '85%',
  },
  settextinbgcolor: {
    backgroundColor: colors.theme_backgound,
    position: 'absolute',
    top: 0,
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  setdescounrtextstyle: {
    color: 'white',
    fontSize: 12,
    fontFamily: Fonts.Metropolis_Medium,
  },
  outoftextset: {
    color: 'red',
    fontSize: 18,
    fontWeight: '700',
    fontFamily: Fonts.Metropolis_Medium,
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    top: 70,
  },
  minbgviewset: {
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 180,
    marginLeft: SH(2),
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    marginRight: 15,
    borderRadius: 7,
  },
  imagecengter: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    width: '100%',
    marginTop: 12
  },
  whiteboximagetwosettwo: {   
    width: '100%',
    height: 70,
    borderRadius: 7,   
  },

  settextcolorcenter: {
    fontFamily: Fonts.Metropolis_Medium,
    color: colors.theme_backgound,
    paddingTop: 2,
    fontWeight: '700',
    fontSize: 16,
  },
  settextcolorcenterthree: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 3,
    fontSize: 13,
    color: '#000'
  },
  flexrowseticon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  flexrowseticon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  settextpricebold: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
  },
  seticonbgcolorview: {
    height: 30,
    width: 30,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settextinbgcolor: {
    backgroundColor: colors.theme_backgound,
    position: 'absolute',
    top: 0,
    paddingLeft: 20,
    paddingRight: 20,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 13,
    borderTopLeftRadius: 13,
  },
  setdescounrtextstyle: {
    color: 'white',
    fontSize: 14,
    fontFamily: Fonts.Metropolis_Medium,
  },
  populaitemnearby: {
    width: 300,
    minHeight: 125,
    flexDirection: 'row',
    marginBottom: SH(5),
    padding: 5,
    // marginLeft: SH(2),
    marginTop: SH(2),
    backgroundColor: '#fff',
    shadowColor: '#b5b2b2',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    marginRight: 15,
    borderRadius: 7,
  },
  flexrowtextandimage: {
    flexDirection: 'row',
    position: 'relative'
  },
  setplusicon: {
    position: 'absolute',
    bottom: 0,
    right: 0    
  },  
  setimagewidthsevnty: {
    width: '40%',
  },
  whiteboximagetwoset: {
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  setwidthalltext: {
    width: '60%',
    // paddingRight:10,
  },
  settextpricebold: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
  },
  settextcolorcenterthree: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 3,
    fontSize: 15,
  },
  flexstarticon: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  ratingtextnumber: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 3,
    fontSize: 16,
    marginLeft: 7,
  },
  flexrowsetrating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dicscounttextflex: {
    flexDirection: 'row',
  },
  settextpricebold: {
    fontSize: 17,
    fontFamily: Fonts.Metropolis_Medium,
    fontWeight: '700',
  },
  flexcenterviewTWO: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widtsetnew: {
    width: 77,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecenterstyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textsetfood: {
    fontSize: 11,
    color: '#000',
    fontFamily: Fonts.Roboto_Medium,
    fontWeight: '600',
    textAlign: 'center',
    paddingTop: 4,
  },
  settopcategoriesnine: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.theme_backgound,
    paddingLeft: 20,
    paddingBottom: 20,
  },

  settopmargin: {
    marginTop: 30,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  settopcategories: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.theme_backgound,
    paddingLeft: 20,
    paddingBottom: 6,
  },
  settopcategoriestwo: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.theme_backgound,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  setflex: {
    overflow: 'hidden'
  },
  HeartIconLike: {
    position: 'absolute',
    right: 5,
    top: 3
  },
  settextcolorcenterthreetow: {
    paddingLeft: 15,
    color: '#000',
    fontSize: 13
  },
  settextcolorcentertwo: {
    fontFamily: Fonts.Metropolis_Medium,
    paddingTop: 3,
    fontSize: 13,
    color: '#000'
  },
  homebtnadd: {
    height: 30
  }
});
