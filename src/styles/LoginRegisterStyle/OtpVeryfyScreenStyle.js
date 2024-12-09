
import { StyleSheet } from 'react-native';
import { SF, SW, SH, widthPercent, Fonts, ColorTheme } from '../../utils';

export default StyleSheet.create({
  paregraphotpbottom: {
    color: 'gray',
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 13,
    marginBottom: '8%',
    marginRight: 10,
  },
  bgcolorset: {
    backgroundColor: ColorTheme.BGScreen
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
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
    marginHorizontal: '5%',
    marginTop: '5%',
  },

  paregraph: {
    color: ColorTheme.LighColorSix,
    fontFamily: Fonts.Metropolis_Medium,
    fontSize: 12,
  },

  signintextset: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    color: ColorTheme.Color4FA987,
    fontFamily: Fonts.Metropolis_Medium,
  },

  accountbutton: {
    width: '100%',
    marginBottom: 15,
  },
  flexrowsettext: {
    flexDirection: 'row',
  },

  otpbuttonstyle: {
    width: SW(50),
    height: SH(61),
    borderWidth: 2.5,
    borderColor: ColorTheme.Color4FA987,
    color: '#000000',
    fontSize: SF(28),
    fontWeight: '700',
    borderRadius: SH(7),
  },
  textinputcolorbutton: {
    color: 'white'
  },
  resendtextbold: {
    fontSize: 13,
    color: 'black',
    fontWeight:'700',
    fontFamily: Fonts.Metropolis_Medium,
  }
});
