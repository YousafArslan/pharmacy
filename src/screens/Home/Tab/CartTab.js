import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import {CartTabStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/AntDesign';
import { Button } from '../../../components';
import { RouteName } from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../../redux/action/CommonAction';
import images from '../../../images';

const CartTab = ({route}) => {
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
    dispatch(price_symbol_action(PriceSymbol))
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  return (
    <View
      style={[CartTabStyle.minstyleviewphotograpgy, CartTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: '100%',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[CartTabStyle.minflexview, CartTabStyle.bgcolorset]}>
            <View
              style={[
                CartTabStyle.minviewsigninscreen,
                CartTabStyle.bgcolorset,
              ]}>
              <View backgroundColor={colorrdata}>
                <View
                  style={[
                    CartTabStyle.setwhitebox,
                    CartTabStyle.cartboxwrap,
                    CartTabStyle.bgcolorset,
                  ]}>
                  <View
                    style={[
                      CartTabStyle.flexsetviewwhitebox,
                      CartTabStyle.bgcolorset,
                    ]}>
                    <View style={CartTabStyle.twoflexview}>
                      <View style={CartTabStyle.settextflexview}>
                        <Text style={CartTabStyle.yourordertextset}>
                          Your Order
                        </Text>
                      </View>
                      <View style={CartTabStyle.flexicondighit}>
                        <Text>
                          <Icon
                            name="shopping-bag"
                            size={20}
                            color={'#010101'}
                          />
                        </Text>
                        <Text style={CartTabStyle.twodigitset}>2</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(RouteName.HOME_TAB)}>
                      <IconF name="close" size={20} color={'#010101'} />
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View
                      style={[
                        CartTabStyle.flexminviewcount,
                        CartTabStyle.bgcolorset,
                      ]}>
                      <View style={CartTabStyle.flexiconandimagetext}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              RouteName.PRODUCT_DETAILS_SCREEN,
                            )
                          }>
                          <Image
                            style={CartTabStyle.setimagehightwidth}
                            resizeMode="contain"
                            source={images.Baby_care_imag_six}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={CartTabStyle.pistahouse}>
                            Alerid-D Tablet
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          CartTabStyle.flexiconandimagetext,
                          CartTabStyle.bgcolorset,
                        ]}>
                        <View
                          style={[
                            CartTabStyle.setplusminusflex,
                            CartTabStyle.bgcolorset,
                            {borderColor: colorrdata},
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              if (count > 1) {
                                setCount(count - 1);
                              }
                            }}>
                            <IconA name="minus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                          <Text
                            style={[
                              CartTabStyle.minustextstyle,
                              {color: colorrdata},
                            ]}>
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <IconA name="plus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                        </View>
                        {Applycoupon === 0 ? (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {175 * count}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {105 * count}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <View
                      style={[
                        CartTabStyle.flexminviewcount,
                        CartTabStyle.bgcolorset,
                      ]}>
                      <View style={CartTabStyle.flexiconandimagetext}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              RouteName.PRODUCT_DETAILS_SCREEN,
                            )
                          }>
                          <Image
                            style={CartTabStyle.setimagehightwidth}
                            resizeMode="contain"
                            source={images.Baby_care_imag_six}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={CartTabStyle.pistahouse}>
                            Alerid-D Tablet
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          CartTabStyle.flexiconandimagetext,
                          CartTabStyle.bgcolorset,
                        ]}>
                        <View
                          style={[
                            CartTabStyle.setplusminusflex,
                            CartTabStyle.bgcolorset,
                            {borderColor: colorrdata},
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              if (count > 1) {
                                setCount(count - 1);
                              }
                            }}>
                            <IconA name="minus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                          <Text
                            style={[
                              CartTabStyle.minustextstyle,
                              {color: colorrdata},
                            ]}>
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <IconA name="plus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                        </View>
                        {Applycoupon === 0 ? (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {175 * count}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {105 * count}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <View
                      style={[
                        CartTabStyle.flexminviewcount,
                        CartTabStyle.bgcolorset,
                      ]}>
                      <View style={CartTabStyle.flexiconandimagetext}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              RouteName.PRODUCT_DETAILS_SCREEN,
                            )
                          }>
                          <Image
                            style={CartTabStyle.setimagehightwidth}
                            resizeMode="contain"
                            source={images.Baby_care_imag_six}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={CartTabStyle.pistahouse}>
                            Alerid-D Tablet
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          CartTabStyle.flexiconandimagetext,
                          CartTabStyle.bgcolorset,
                        ]}>
                        <View
                          style={[
                            CartTabStyle.setplusminusflex,
                            CartTabStyle.bgcolorset,
                            {borderColor: colorrdata},
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              if (count > 1) {
                                setCount(count - 1);
                              }
                            }}>
                            <IconA name="minus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                          <Text
                            style={[
                              CartTabStyle.minustextstyle,
                              {color: colorrdata},
                            ]}>
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <IconA name="plus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                        </View>
                        {Applycoupon === 0 ? (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {175 * count}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {105 * count}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                    <View
                      style={[
                        CartTabStyle.flexminviewcount,
                        CartTabStyle.bgcolorset,
                      ]}>
                      <View style={CartTabStyle.flexiconandimagetext}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate(
                              RouteName.PRODUCT_DETAILS_SCREEN,
                            )
                          }>
                          <Image
                            style={CartTabStyle.setimagehightwidth}
                            resizeMode="contain"
                            source={images.Baby_care_imag_six}
                          />
                        </TouchableOpacity>
                        <View>
                          <Text style={CartTabStyle.pistahouse}>
                            Alerid-D Tablet
                          </Text>
                        </View>
                      </View>
                      <View
                        style={[
                          CartTabStyle.flexiconandimagetext,
                          CartTabStyle.bgcolorset,
                        ]}>
                        <View
                          style={[
                            CartTabStyle.setplusminusflex,
                            CartTabStyle.bgcolorset,
                            {borderColor: colorrdata},
                          ]}>
                          <TouchableOpacity
                            onPress={() => {
                              if (count > 1) {
                                setCount(count - 1);
                              }
                            }}>
                            <IconA name="minus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                          <Text
                            style={[
                              CartTabStyle.minustextstyle,
                              {color: colorrdata},
                            ]}>
                            {count}
                          </Text>
                          <TouchableOpacity onPress={() => setCount(count + 1)}>
                            <IconA name="plus" size={20} color={colorrdata} />
                          </TouchableOpacity>
                        </View>
                        {Applycoupon === 0 ? (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {175 * count}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.digitalsawtwext,
                                {color: colorrdata},
                              ]}>
                              {pricesymboldata} {105 * count}
                            </Text>
                          </TouchableOpacity>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View
        style={[
          CartTabStyle.positionabsolutesetbutton,
          CartTabStyle.bgcolorset,
        ]}>
        <View style={CartTabStyle.accountbutton}>
          {Applycoupon === 0 ? (
            <View style={CartTabStyle.textcenyet}>
              <View>
                <Text style={CartTabStyle.digitaltextsettwo}>
                  {pricesymboldata} {175 * count}
                </Text>
                <Text
                  style={[
                    CartTabStyle.viewdetailesbilltext,
                    {color: colorrdata},
                  ]}>
                  Total Amount
                </Text>
              </View>
            </View>
          ) : (
            <View style={CartTabStyle.textcenyet}>
              <View>
                <Text style={CartTabStyle.digitaltextsettwo}>
                  {pricesymboldata} {140 * count}
                </Text>
                <Text
                  style={[
                    CartTabStyle.viewdetailesbilltext,
                    {color: colorrdata},
                  ]}>
                  Total Amount
                </Text>
              </View>
            </View>
          )}
          <View style={CartTabStyle.setbuttonwidthview}>
            <Button
              title="Checkout"
              buttonTextStyle={CartTabStyle.textstylepayment}
              buttonStyle={{backgroundColor: colorrdata}}
              onPress={() => console.log('Checkout')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CartTab;
