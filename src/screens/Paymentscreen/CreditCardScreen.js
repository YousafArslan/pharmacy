import React, { useState } from "react";
import { Text, View, Image, ScrollView, TextInput,  } from "react-native";
import {Creditcard} from '../../styles';
import { Button } from '../../components';
import images from '../../images';
import { RouteName } from '../../routes';
import { useSelector } from "react-redux";

const CreditCardScreen = ({ navigation }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const [mobileNumber, setMobileNumber] = useState('');
  const [CvvNumber, setCvvNumber] = useState('');
  const [CardNumber, setCardNumber] = useState('');

  const onChangeText = (text, type) => {
    if (type === 'mobile') setMobileNumber(text);
    if (type === 'password') setPassword(text);
    if (type === 'CvvNumber') setCvvNumber(text);
    if (type === 'CardNumber') setCardNumber(text);
  };
  return (
    <View style={Creditcard.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={Creditcard.keybordtopviewstyle}>
          <View style={Creditcard.minflexview}>
            <View style={Creditcard.minviewsigninscreen}>
              <View style={Creditcard.setwidthimage}>
                <Image source={images.two_ten_four_twenty} resizeMode='cover' style={Creditcard.creditcard} />
              </View>
              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Name</Text>
                <TextInput
                  placeholder="John Doi"
                  onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                  style={Creditcard.inputstyle}
                />
              </View>
              <Text></Text>
              <View style={Creditcard.setstyleinputtext}>
                <View style={Creditcard.flexrowsetcemera}>
                  <View>
                    <Text style={Creditcard.textstyle}>Card Number</Text>
                    <TextInput
                      placeholder="8644 4356 8243 8070"
                      keyboardType="numeric"
                      maxLength={16}
                      onChangeText={(text) => onChangeText(text, 'setCardNumber')}
                      style={Creditcard.inputstyle}
                    />
                  </View>
                </View>
              </View>
              <View style={Creditcard.flexrowsetinput}>
                <View style={Creditcard.setstyleinputtexttwo}>
                  <Text style={Creditcard.textstyle}>mm/yy</Text>
                  <TextInput
                    placeholder="02/24"
                    onChangeText={(text) => onChangeText(text, 'mobile')}
                    value={mobileNumber}
                    maxLength={4}
                    keyboardType="numeric"
                    style={Creditcard.inputstyle}
                  />
                </View>
                <View style={Creditcard.setstyleinputtexttwo}>
                  <Text style={Creditcard.textstyle}>cvv</Text>
                  <TextInput
                    placeholder="502"
                    onChangeText={(text) => onChangeText(text, 'CvvNumber')}
                    value={CvvNumber}
                    maxLength={3}
                    keyboardType="numeric"
                    style={Creditcard.inputstyle}
                  />
                </View>
              </View>
              <View style={Creditcard.setbuttonstyle}>
                <Button title="Save Card"
                  onPress={() => navigation.replace(RouteName.PAYMENT_SUCCESSFULLY)}
                  buttonStyle={Creditcard.setbuttonCreditcardavecard}
                  buttonTextStyle={Creditcard.setbuttontextstyle}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  );
};

export default CreditCardScreen;
