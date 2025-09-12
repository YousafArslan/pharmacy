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
    backgroundColor: ColorTheme.BGScreen,
  },
  minviewsigninscreen: {
    width: '90%',
    height: '100%',
    marginHorizontal: '5%',
    paddingBottom: 30,
  },
  minflexview: {
    width: '100%',
    height: '100%',
  },
  settingtext: {
    color: colors.theme_backgound,
    fontWeight: '700',
    fontSize: 21,
    fontFamily: Fonts.Metropolis_Medium,
  },
  yoreorderstylebox: {
    backgroundColor: ColorTheme.BGWhiteColor,
    color: 'black',
    width: '97%',
    borderRadius: 10,
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',
    paddingTop: 20,
    marginLeft: 5,
    marginBottom: 20,
    marginRight: 2,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 4,
  },
  imagesetus: {
    height: 50,
    width: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  vadapavtextstyeleset: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  addreshrtext: {
    color: 'gray',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  flexrowsettext: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  flexminviewset: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 15,
  },
  priceflextext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '79%',
  },
  priceflexSaleSummarytext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '43%',
  },
  borderbottomview: {
    borderBottomColor: ColorTheme.LighGrey,
    // borderStyle:'dashed',
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 13,
  },
  borderbottomviewtwo: {
    // borderBottomColor: ColorTheme.LighGrey,
    // borderStyle:'dashed',
    // borderBottomWidth: 1,
    // paddingBottom: 7,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  setlistdataitems: {
    paddingLeft: 15,
    paddingRight: 15,

    // paddingBottom: 15,
    // width: '50%',
    alignItems: 'baseline',
  },
  setitemstext: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  blacktitle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.Metropolis_Medium,
  },
  setwidth70: {
    width: '90%',
  },
  rejectedtextstyle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'green',
    fontFamily: Fonts.Metropolis_Medium,
    paddingLeft: 10,
  },
  rigthdeliveredicon: {
    color: 'green',
  },
  setflexitemview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexrowsettextrejected: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 5,
    paddingTop: 18,
  },
  paddingtopset: {
    paddingTop: 20,
  },
  flexreowdilevry: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  chequeCard: {
    backgroundColor: ColorTheme.BGWhiteColor,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 80,
    maxHeight: 120,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  chequeLabel: {
    fontWeight: '600',
    color: '#718096',
    width: 90,
    fontSize: 13,
  },
  chequeValue: {
    color: '#2d3748',
    fontSize: 13,
  },
  chequeAmount: {
    color: '#38a169',
    fontWeight: 'bold',
    fontSize: 15,
  },
  chequeNo: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 4,
    color: '#2d3748',
  },
  chequeNoBlue: {
    color: '#3182ce',
    fontWeight: 'bold',
    fontSize: 14,
  },
  chequeCardRow: {
    flexDirection: 'row',
    marginBottom: 2,
    // justifyContent: 'space-between',
  },
  chequeCardFullRow: {
    marginBottom: 4,
  },
  openReturnButtonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 10,
  },
  openReturnButton: {
    width: 150,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  openReturnButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignSelf: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: 130,
  },
  actionButtonContainer: {
    flexDirection: 'column',
    gap: 10,
  },
});
