import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import Styles from '../../styles/Tab/CartTabStyle';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconW from 'react-native-vector-icons/Ionicons';
import IconC from 'react-native-vector-icons/AntDesign';
import {Button, SweetaelertModal} from '../../components';
import {RouteName} from '../../routes';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../redux/action/CommonAction';
import images from '../../images';

const CheckOutScreen = ({route}) => {
  const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0)
  const [count, setCount] = useState(1);
  const [Applycoupon, setApplycoupon] = useState(0);
  const dispatch = useDispatch();
  let PriceSymbol = '$';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol));       
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[Styles.minflexview, Styles.checkoutboxwrap, Styles.bgcolorset]}>
            <View style={[Styles.minviewsigninscreen, Styles.bgcolorset]}>              
              <View style={[Styles.setwhitebox, Styles.bgcolorset]}>
                <View style={[Styles.flexsetviewwhitebox, Styles.bgcolorset]}>
                  <View style={[Styles.twoflexview, Styles.bgcolorset]}>
                    <View style={[Styles.settextflexview, Styles.bgcolorset]}>
                      <Text style={Styles.yourordertextset}>Order</Text>
                    </View>
                    <View style={Styles.flexicondighit}>
                      <Text><Icon name="shopping-bag" size={20} color={'#010101'} /></Text>
                      <Text style={Styles.twodigitset}>2</Text>
                    </View>
                  </View>                 
                </View>
                <View style={[Styles.bgcolorhomeaddresh, { backgroundColor: colorrdata }]}>
                  <View style={Styles.minflehomeandedit}>
                    <View style={Styles.flexhomeaddresh}>
                      <View>
                        <IconW name="md-home-outline" size={27} color={'white'} />
                      </View>
                      <View>
                        <Text style={Styles.satyanilayam}>Satya Nilayam</Text>
                        <Text style={Styles.homeaddreshtext}>21-42-34, Banjara Hills, Hyderabad, 500072</Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(RouteName.EDIT_LOCATION_SCREEN)}>
                      <Icon name='edit' size={25} color={'white'}/>
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.minflehomeandedittwo}>
                    <View style={Styles.flexhomeaddreshtwo}>
                      <View style={Styles.setclockbgview}>
                        <IconC name="clockcircleo" size={20} color={'#2E3A59'} />
                      </View>
                      <View>
                        <Text style={Styles.satyanilayamtwo}>{doctoreDetaile.text}</Text>
                      </View>
                    </View>
                    <TouchableOpacity>
                      <IconM name='schedule' size={27} color={'white'}/>
                    </TouchableOpacity>
                  </View>
                </View>
                <View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <TouchableOpacity onPress={()=> navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)}>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Baby_care_imag_six} />
                      </TouchableOpacity>
                      <View>
                        <Text style={Styles.pistahouse}>{doctoreDetaile.text}</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {175 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <TouchableOpacity onPress={()=> navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)}>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Baby_care_imag} />
                      </TouchableOpacity>
                      <View>
                        <Text style={Styles.pistahouse}>{doctoreDetaile.text}</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {175 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.flexminviewcount}>
                    <View style={Styles.flexiconandimagetext}>
                      <TouchableOpacity onPress={()=> navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)}>
                        <Image style={Styles.setimagehightwidth} resizeMode="contain" source={images.Baby_care_imag_six} />
                      </TouchableOpacity>
                      <View>
                        <Text style={Styles.pistahouse}>{doctoreDetaile.text}</Text>
                      </View>
                    </View>
                    <View style={Styles.flexiconandimagetext}>
                      {Applycoupon === 0 ?
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {175 * count}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity>
                          <Text style={[Styles.digitalsawtwext, { color: colorrdata }]}>{pricesymboldata} {105 * count}</Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                  <View style={Styles.textinputandbuttonflex}>
                    <View>
                      <TextInput
                        placeholder="Enter Promo Code"
                        placeholderTextColor={'#838383'}
                        style={Styles.inputcarttextstyle}
                        keyboardType={'number-pad'}
                      />
                    </View>
                    <View style={Styles.setbutttonview}>
                      <Button buttonStyle={{ backgroundColor: colorrdata }} onPress={() => { setDisplayAlert(1); setApplycoupon(); }} buttonTextStyle={Styles.textstyle} title="Apply" />
                    </View>
                  </View>
                  <View style={Styles.centeredView}>
                    {console.log(DisplayAlert, 'print')}
                    {DisplayAlert !== 0 ?
                      <SweetaelertModal message='Applied Successful' link={RouteName.CHECK_OUT} />
                      :
                      null
                    }
                  </View>
                  <View style={Styles.setviewlistbill}>
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Subtotal</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} {175 * count}</Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Subtotal</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} {105 * count}</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Delivery</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 45</Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.subtotaltext}>Delivery</Text>
                        <Text style={Styles.digitaltext}>{pricesymboldata} 35</Text>
                      </View>
                    }
                    {Applycoupon === 0 ?
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.digitaltextsettwo}>Total</Text>
                        <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {220 * count}</Text>
                      </View>
                      :
                      <View style={Styles.flexrowspacebeetveen}>
                        <Text style={Styles.digitaltextsettwo}>Total</Text>
                        <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {140 * count}</Text>
                      </View>
                    }
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[Styles.positionabsolutesetbutton, Styles.bgcolorset]}>
        <View style={Styles.accountbutton}>
          {Applycoupon === 0 ?
            <View style={Styles.textcenyet}>
              <View>
                <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {220 * count}</Text>
                <Text style={[Styles.viewdetailesbilltext, { color: colorrdata }]}>View Detailed Bill</Text>
              </View>
            </View>
            :
            <View style={Styles.textcenyet}>
              <View>
                <Text style={Styles.digitaltextsettwo}>{pricesymboldata} {140 * count}</Text>
                <Text style={[Styles.viewdetailesbilltext, { color: colorrdata }]}>View Detailed Bill</Text>
              </View>
            </View>
          }
          <View style={Styles.setbuttonwidthview}>
            <Button title="Proceed to Pay"
              buttonTextStyle={Styles.textstylepayment}
              buttonStyle={{ backgroundColor: colorrdata }}
              onPress={() => navigation.navigate(RouteName.PAYMENTSCREEN)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CheckOutScreen;
