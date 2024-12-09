import { colors,widthPercent, Fonts, ColorTheme} from '../../utils';
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
    height: '100%',
    width: '100%',  
    alignItems: 'center'  
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minviewsigninscreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    width: '100%',  
    alignItems: 'center' 
    // marginHorizontal: '5%',
  },
  minflexview: {
    width: '100%',
    height: '100%',
    marginTop: 20, 
  },
  pharamacyimagestyle: {
    width:100,
    height:80,
  },
  bgwhiteboxminviewWrap: {
    shadowColor: '#52006A',
    fontFamily: 'DMSans-Medium',    
    shadowColor: '#b5b2b2', 
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',      
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,   
    backgroundColor:'white',
    marginRight:20,
    borderRadius: 10,
    marginBottom:12,   
    marginTop: 0,  
  },
  bgwhiteboxminview: {
    color: 'black',   
    paddingBottom:35,
    width: 160,
    flex:1,      
  },
  ListItemHertWrap: {
    position: 'absolute',
    top: 3,
    right: 5
  },
  bgcolorwhiteset: {
    paddingLeft:10,  
  },
  setimageviewstyle: {
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
  },
  textstylesimple: {
    paddingRight:20,
    fontWeight:'700',
    fontSize:16,
    paddingLeft:15,    
    paddingTop:10,
    marginTop:10,
  },
  textstylesimpletwo: {
    color:'black',
    paddingRight:20,
    fontSize:17,
    paddingLeft:15,
  },
  setplusbgcolorset: {
    backgroundColor:colors.theme_backgound,
    width:30,
    height:30,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  justicenterflexrow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    position:'absolute',
    bottom:0,
    borderStyle:'dashed',
    width:'100%',
  },
  setflexstadr: {
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:13,
  },
  setratingtextstyle: {
    fontSize:16,
    fontFamily:Fonts.Metropolis_Medium,
    fontWeight:'700',
    marginLeft:5,
  },
  setherticon: {
    position:'absolute',
    top:5,
    right:5,
  },
  HeartIconLike: {
    position: 'absolute',
    right: 5,
    top: 3
  },
  settextcolorcenterlist: {
    paddingLeft: 15,
    fontFamily:Fonts.Metropolis_Medium,    
    fontSize:13,
    color: '#000'
  }
});
