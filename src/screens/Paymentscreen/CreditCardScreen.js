import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Creditcard, YourOrderScreenStyle} from '../../styles';
import {Button} from '../../components';
import images from '../../images';
import {RouteName} from '../../routes';
import {useSelector} from 'react-redux';
import {yourorderdata} from '../../utils/Sliderimagedata';
import Styles from '../../styles/Tab/CartTabStyle';
import {price_symbol_action} from '../../redux/action/CommonAction';
import IconH from 'react-native-vector-icons/AntDesign';
import Dialog from '../../components/commoncomponets/Modal';

const CreditCardScreen = ({navigation}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [chequeNumber, setChequeNumber] = useState('');
  const [chequeDate, setChequeDate] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [amount, setAmount] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    // Handle confirm action
    setIsVisible(false);
    console.log('Confirmed!');
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  // const {pricesymboldata} = useSelector(state => state.commonReducer) || {};
  const handleDateChange = text => {
    const dateRegex = /^(\d{0,2})\/?(\d{0,2})\/?(\d{0,4})$/;
    let match = text.match(dateRegex);
    if (match) {
      let day = match[1] || '';
      let month = match[2] || '';
      let year = match[3] || '';

      let newDate = day;
      if (day.length === 2) newDate += '/';
      newDate += month;
      if (month.length === 2) newDate += '/';
      newDate += year;

      setChequeDate(newDate.substr(0, 10));
    }
  };
  return (
    <View style={Creditcard.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={YourOrderScreenStyle.borderbottomview}>
          <View style={YourOrderScreenStyle.flexminviewset}>
            <View style={YourOrderScreenStyle.flexrowsettext}>
              <View>{yourorderdata[0].image}</View>
              <View style={YourOrderScreenStyle.priceflextext}>
                <View style={YourOrderScreenStyle.setwidth70}>
                  <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>
                    {yourorderdata[0].vadapavtext}
                  </Text>
                  <Text style={YourOrderScreenStyle.addreshrtext}>
                    {yourorderdata[0].sitytext}
                  </Text>
                  <Text style={YourOrderScreenStyle.addreshrtext}>
                    Invoice # {yourorderdata[0].invoicenumber}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={Creditcard.keybordtopviewstyle}>
          <View style={Creditcard.minflexview}>
            <Text style={Creditcard.titleStyle}>Add Cheque Details</Text>
            <View style={Creditcard.minviewsigninscreen}>
              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Cheque Number</Text>
                <TextInput
                  placeholder="Enter Cheque Number"
                  onChangeText={text => setChequeNumber(text)}
                  style={Creditcard.inputstyle}
                  keyboardType="numeric"
                />
              </View>

              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Cheque Date</Text>
                <TextInput
                  placeholder="DD/MM/YYYY"
                  onChangeText={handleDateChange}
                  value={chequeDate}
                  style={Creditcard.inputstyle}
                  keyboardType="numeric"
                />
              </View>

              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Bank</Text>
                <TextInput
                  placeholder="Enter Bank Name"
                  onChangeText={text => setBankName(text)}
                  style={Creditcard.inputstyle}
                />
              </View>

              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Branch</Text>
                <TextInput
                  placeholder="Enter Branch Name"
                  onChangeText={text => setBranchName(text)}
                  style={Creditcard.inputstyle}
                />
              </View>

              <View style={Creditcard.setstyleinputtext}>
                <Text style={Creditcard.textstyle}>Amount</Text>
                <TextInput
                  placeholder="Enter Amount"
                  onChangeText={text => setAmount(text)}
                  style={Creditcard.inputstyle}
                  keyboardType="numeric"
                />
              </View>
              <View style={Creditcard.setbuttonstyle}>
                <Button
                  title="Save"
                  buttonStyle={Creditcard.setbuttonstylesavecard}
                  buttonTextStyle={Creditcard.setbuttontextstyle}
                  onPress={() => console.log('Save')}
                />

                <Button
                  title="Sales Return"
                  buttonStyle={Creditcard.setbuttonCreditcardavecard}
                  buttonTextStyle={Creditcard.setbuttontextstyle}
                  onPress={() => navigation.navigate(RouteName.CART_TAB)}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={Creditcard.bottomContainer}>
          <View style={Creditcard.bottomPricing}>
            <View style={Styles.textcenyet}>
              <View>
                <Text style={Styles.digitaltextsettwo}>
                  {/* {pricesymboldata} {140 * count} */}
                  $500
                </Text>
                <Text
                  style={[Styles.viewdetailesbilltext, {color: colorrdata}]}>
                  View Detailed Bill
                </Text>
              </View>
            </View>

            <View style={Styles.setbuttonwidthview}>
              <Button
                title="Deliver"
                buttonTextStyle={Styles.textstylepayment}
                buttonStyle={{backgroundColor: colorrdata}}
                onPress={() => setIsVisible(true)}
              />
            </View>
          </View>
        </View>
        <View>
          {/* Some other UI */}
          <Dialog
            isVisible={isVisible}
            onClose={handleClose}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            title="Deliver This Invoice?"
            confirmText="Confirm"
            cancelText="Cancel"
            colorrdata="#000"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreditCardScreen;
