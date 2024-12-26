import React, {useEffect} from "react";
import { Text, View, Image, ScrollView, StatusBar, TouchableOpacity, } from "react-native";
import {Payment} from '../../styles';
import images from '../../images';
import { useSelector } from "react-redux";
import { RouteName } from '../../routes';
import { useNavigation } from '@react-navigation/native';

const PaytmSuccessFully = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
   const navigation = useNavigation();

  useEffect(() => {
    let interval;    
      interval = setInterval(() => {
        console.log('In setInterval');
        navigation.navigate(RouteName.HOME_TAB);
        clearInterval(interval);
      }, 3000);
      
    
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={Payment.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={Payment.keybordtopviewstyle}>
          <View style={Payment.minflexview}>
            <View style={Payment.minviewsigninscreen}>
              <TouchableOpacity style={Payment.imagecebter}>
                <Image source={images.Two_Hundred} resizeMode='cover' style={Payment.paymentsuccesfullimg} />
              </TouchableOpacity>
              <View style={Payment.textcenterview}>
                <Text style={[Payment.textcenterpayment,{color:colorrdata}]}>PAYMENT SUCCESSFULL</Text>
              </View>
              <Text style={Payment.textcenterpaymenttwo}>Your payment has been successfully! Details of transaction are include below.</Text>
              <TouchableOpacity>
                <Text style={[Payment.burgeritemname,{color:colorrdata}]}>Admenta 5 Tablet</Text>
              </TouchableOpacity>
              <View style={Payment.flexrowcoffitext}>
                <TouchableOpacity>
                  <Text style={Payment.totalamountpaid}>TOTAL AMOUNT PAID</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={Payment.proicetextset}>$20.00</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Payment.flexrowcoffitext}>
                <Text style={Payment.totalamountpaid}>PAYED BY</Text>
                <Text style={Payment.proicetextset}>PAYTM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Payment.flexrowcoffitexttwo}>
                <Text style={Payment.totalamountpaid}>TRANCATION DATE</Text>
                <Text style={Payment.proicetextset}>22 aug 2020,05:25 AM</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default PaytmSuccessFully;
