import React, { useState } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {PaymentStyle} from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import images from '../../../images';
import { RouteName } from '../../../routes';
import { useSelector } from "react-redux";
import { ScrollView } from 'react-native-virtualized-view';

const MangePaymentMethode = () => {
  const navigation = useNavigation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [Paymentdata] = useState([
    {
      "id": 1,
      "paymentparegraph": "You need to have a registered UPI ID.",
      "image": <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />,
      "smalltext": 'Pay Via UPI',
      "walletstextset": 'Wallets',
    },
    {
      "id": 2,
      "paymentparegraph": "Link Your Paytm Wallet to Use This Paymets Methode.",
      "image": <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />,
      "smalltext": 'Paytm',
    },
    {
      "id": 3,
      "paymentparegraph": "Link Your MobikWik Wallet to Use This Paymets Methode.",
      "image": <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />,
      "smalltext": 'MobikWik',
    },
    {
      "id": 4,
      "paymentparegraph": "Link Your FreeCharge Wallet to Use this Payments",
      "image": <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />,
      "smalltext": 'Freecharge',
    },

  ]);
  const [show, setShow] = useState(null);
  const toggleHandler = (id) => {
    (id === show) ? setShow(null) : setShow(id)
  };
  const ItemRender = (item, index) => {
    return (
      <TouchableOpacity onPress={() => toggleHandler(item.id)}>
        <View>
          <View style={PaymentStyle.setflexrowarrowleftthree}>
            <View style={PaymentStyle.flexrowcreditcard}>
              <View style={PaymentStyle.iconsetborderwidth}>
                {item.image}
              </View>
              <View style={PaymentStyle.settextwidth}>
                <Text style={PaymentStyle.creditcardtext}>{item.smalltext}</Text>
                <Text style={PaymentStyle.youneedstext}>{item.paymentparegraph}</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => toggleHandler(item.id)}>
                {show === item.id ? <Icon name='up' size={21} /> : <Icon name='down' size={21} />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {show === item.id ? <View>
          <View style={PaymentStyle.setparegraphviewstyle}>
            <Text style={PaymentStyle.paregraphtextPaymentStyleet}>Paytm is India's leading financial services company that offers full-stack payments financial solutions to consumers, offline merchants and online platforms.</Text>
          </View>
        </View> : null}
      </TouchableOpacity>
    );
  }
  return (
    <View style={PaymentStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={PaymentStyle.minflexview}>
            <View style={PaymentStyle.minviewsigninscreen}>
              <View>
                <Text style={[PaymentStyle.cardtextstyle, { color: colorrdata }]}>Cards</Text>
                <TouchableOpacity style={PaymentStyle.setflexrowarrowleft} onPress={() => navigation.replace(RouteName.CREDIT_CARD_SCREEN_SET)}>
                  <View style={PaymentStyle.flexrowcreditcard}>
                    <View style={PaymentStyle.iconsetborderwidth}>
                      <Icon name="creditcard" size={25} color={'gray'} />
                    </View>
                    <Text style={PaymentStyle.creditcardtext}>Creadit,Debit & ATM Cards</Text>
                  </View>
                  <View>
                    <Icon name="right" size={21} color={'gray'} />
                  </View>
                </TouchableOpacity>
                <View style={PaymentStyle.setflexrowarrowlefttwo}>
                </View>

                {/* START PAYPAL */}
                <TouchableOpacity style={[PaymentStyle.flexrowcreditcardtwo, PaymentStyle.bottomborder]} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyle.iconsetborderwidth}>
                    <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />
                  </View>
                  <Text style={PaymentStyle.creditcardtext}>Paypal</Text>
                </TouchableOpacity>

                {/* END PAYPAL */}
                <Text style={[PaymentStyle.cardtextstyletwo, { color: colorrdata }]}>UPI</Text>
                <TouchableOpacity style={PaymentStyle.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyle.iconsetborderwidth}>
                    <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />
                  </View>
                  <Text style={PaymentStyle.creditcardtext}>Paytm UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyle.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyle.iconsetborderwidth}>
                    <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />
                  </View>
                  <Text style={PaymentStyle.creditcardtext}>Google Pay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyle.flexrowcreditcardtwo} onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}>
                  <View style={PaymentStyle.iconsetborderwidth}>
                    <Image source={images.thirty_five_imag} resizeMode='center' style={PaymentStyle.setbgimage} />
                  </View>
                  <Text style={PaymentStyle.creditcardtext}>Phone pay</Text>
                </TouchableOpacity>

                <Text style={[PaymentStyle.cardtextstylethree, { color: colorrdata }]}>Wallets</Text>
                <FlatList
                  data={Paymentdata}
                  renderItem={({ item, index }) => ItemRender(item, index)}
                  keyExtractor={item => item.id}
                  style={PaymentStyle.flatelist}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default MangePaymentMethode;
