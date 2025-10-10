import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, StatusBar, TouchableOpacity, } from "react-native";
import {CartTabStyle, YourOrderScreenStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';
import IconA from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/AntDesign';
import {Button} from '../../../components';
import {RouteName} from '../../../routes';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import images from '../../../images';
import apiBaseUrl from '../../../utils/api';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';

const CartTab = ({route}) => {
  const {doctoreDetaile} = useSelector(state => state.doctorDataReducer) || {
    doctoreDetaile,
  };
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {pricesymboldata} = useSelector(state => state.commonReducer) || {};

  const navigation = useNavigation();
  const [DisplayAlert, setDisplayAlert] = useState(0);
  const [count, setCount] = useState(1);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState([]);
  const dispatch = useDispatch();
  const toast = useToast();
  const {invoiceDetails} = route.params;
  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  useEffect(() => {
    async function fetchInvoiceDetails() {
      try {
        const res = await axios.get(
          `${apiBaseUrl}/invoiceDetail/${invoiceDetails.dist_id}/${invoiceDetails.dss_id}`,
        );
        setInvoiceItems(res.data);
        setItemQuantities(res.data.map(() => 0));
      } catch (err) {
        setInvoiceItems([]);
        setItemQuantities([]);
      }
    }
    fetchInvoiceDetails();
  }, [invoiceDetails]);

  const handleIncrement = idx => {
    setItemQuantities(prev =>
      prev.map((q, i) =>
        i === idx
          ? Math.min(q + 1, invoiceItems[idx]?.item_qty || 1) // Don't exceed original item_qty
          : q,
      ),
    );
  };
  const handleDecrement = idx => {
    setItemQuantities(prev =>
      prev.map((q, i) => (i === idx && q > 1 ? q - 1 : q)),
    );
  };

  const handleDeliver = async () => {
    try {
      // Add item_rtn_qty to each item
      const itemsWithReturnQty = invoiceItems.map((item, idx) => ({
        ...item,
        item_rtn_qty: itemQuantities[idx] || 1,
      }));

      await axios.put(
        `${apiBaseUrl}/invoiceDetail/${invoiceDetails.dist_id}/${invoiceDetails.dss_id}`,
        itemsWithReturnQty, // send the updated items
      );

      toast.show('Invoice has been delivered', {
        type: 'success',
        placement: 'top',
        style: {backgroundColor: colorrdata},
      });
    } catch (error) {
      toast.show('Failed to deliver invoice', {
        type: 'danger',
        placement: 'top',
      });
      console.error('Error delivering invoice:', error);
    }
  };

  return (
    <View
      style={[CartTabStyle.minstyleviewphotograpgy, CartTabStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          paddingBottom: 50,
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
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginBottom: 16,
                      }}>
                      Invoice Items ({invoiceItems.length})
                    </Text>
                    {invoiceItems.map((item, idx) => (
                      <View
                        key={item.id || idx}
                        style={CartTabStyle.invoiceCard}>
                        <View>
                          <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>
                            #{idx + 1}
                          </Text>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: 'bold',
                              marginBottom: 4,
                            }}>
                            {item.item_name}
                          </Text>
                          <Text>Quantity: {item.item_qty}</Text>
                          <Text>Rate: {item.item_rate}</Text>
                          <Text>Net: {item.item_net}</Text>
                        </View>
                        <View>
                          <View style={CartTabStyle.counterDiv}>
                            <TouchableOpacity
                              onPress={() => handleDecrement(idx)}>
                              <IconA
                                name="minus"
                                size={20}
                                color={colorrdata}
                              />
                            </TouchableOpacity>
                            <Text
                              style={[
                                CartTabStyle.minustextstyle,
                                { color: colorrdata },
                              ]}>
                              {(itemQuantities[idx] || 0)
                                .toString()
                                .slice(0, 20)}{' '}
                            </Text>
                            <TouchableOpacity
                              onPress={() => handleIncrement(idx)}>
                              <IconA
                                name="plus"
                                size={20}
                                color={colorrdata}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ))}
                    {invoiceItems.length === 0 && (
                      <Text>No items found.</Text>
                    )}
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
          <View style={CartTabStyle.textcenyet}>
            <View>
              <Text
                style={[
                  CartTabStyle.viewdetailesbilltext,
                  {color: colorrdata},
                ]}>
                Total Amount
              </Text>
              <Text style={CartTabStyle.digitaltextsettwo}>
                {invoiceItems.reduce((sum, item, idx) => {
                  const qty = itemQuantities[idx] || 0;
                  const rate = Number(item.item_rate) || 0;
                  return sum + qty * rate;
                }, 0)}
              </Text>
            </View>
          </View>
          <View style={CartTabStyle.setbuttonwidthview}>
            <TouchableOpacity
              style={[
                YourOrderScreenStyle.openReturnButton,
                {backgroundColor: colorrdata},
              ]}
              onPress={handleDeliver}>
              <Text style={YourOrderScreenStyle.openReturnButtonText}>
                Add Return
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CartTab;
