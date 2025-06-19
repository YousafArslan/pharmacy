import React, {useState} from 'react';
import {Modal, View, Text, TextInput, ScrollView} from 'react-native';
import {CartTabStyle, Colorpicker, Creditcard} from '../../styles';
import {Button} from '../../components';
import Styles from '../../styles/Tab/CartTabStyle';
import Dialog from '../../components/commoncomponets/Modal';
import axios from 'axios';

const ChequeDetailsModal = ({
  isVisible,
  onClose,
  onNavigateCart,
  colorrdata,
}) => {
  console.log("colorrdata",colorrdata)

  
  const [chequeDate, setChequeDate] = useState('');
  const [chequeNumber, setChequeNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [amount, setAmount] = useState('');
  const [confirmVisible, setConfirmVisible] = useState(false);

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

  const handleConfirm = () => {
    setConfirmVisible(false);
    onClose();
    // optionally process form submission
  };


  const onSubmit = async () => {
    const payload = [{
    "row_id": 105,
    "dss_id": "DSS123",
    "dist_id": "DIST456",
    "user_name": "john_doe",
    "cust_id": "CUST789",
    "cust_name": "Jane Smith",
    "cheque_no": chequeNumber,
    "cheque_date": chequeDate,
    "cheque_bank": bankName,
    "cheque_branch": branchName,
    "cheque_amount": +amount
  }];
  
    try {
      const response = await axios.post(
        'https://im-quirky.com/api/cheques/upload',
        payload
      );
      onClose()
    } catch (error) {
      console.error('Error uploading cheque:', error);
    }
  };

  return (
    <View>
      <Modal visible={isVisible} animationType="slide" >
        <View style={Creditcard.modalContainer}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '90%',
              borderRadius: 10,
              padding: 20,
              maxHeight: '90%',
            }}>
            <ScrollView contentContainerStyle={Creditcard.keybordtopviewstyle}>
              <View style={Creditcard.minflexview}>
                <Text style={Creditcard.titleStyle}>Add Cheque Details</Text>
                <View style={Creditcard.minviewsigninscreen}>
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Cheque Number</Text>
                    <TextInput
                      placeholder="Enter Cheque Number"
                      onChangeText={text => setChequeNumber(text)}
                      value={chequeNumber}
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
                      value={bankName}
                      style={Creditcard.inputstyle}
                    />
                  </View>

                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Branch</Text>
                    <TextInput
                      placeholder="Enter Branch Name"
                      onChangeText={text => setBranchName(text)}
                      value={branchName}
                      style={Creditcard.inputstyle}
                    />
                  </View>

                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Amount</Text>
                    <TextInput
                      placeholder="Enter Amount"
                      onChangeText={text => setAmount(text)}
                      value={amount}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                  </View>

                  <View style={Creditcard.setcheckbuttonstyle}>
                  <Button title="Checkout"
                    buttonTextStyle={CartTabStyle.textstylepayment}
                    buttonStyle={{ backgroundColor: colorrdata }}
                  />
                    <Button
                      title="Cancel"
                      buttonStyle={Creditcard.setcheckbuttonstylesavecard}
                      buttonTextStyle={Creditcard.setcheckbuttontextstyle}
                      onPress={() => onSubmit()}
                    />

                    <Button
                      title="Add"
                      buttonStyle={Creditcard.setcheckbuttonstylesavecard}
                      buttonTextStyle={Creditcard.setcheckbuttontextstyle}
                      onPress={onClose}
                      // onPress={onNavigateCart}
                    />
                  </View>
                </View>
              </View>

            </ScrollView>

            <Dialog
              isVisible={confirmVisible}
              onClose={() => setConfirmVisible(false)}
              onConfirm={handleConfirm}
              onCancel={() => setConfirmVisible(false)}
              title="Deliver This Invoice?"
              confirmText="Confirm"
              cancelText="Cancel"
              colorrdata="#000"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChequeDetailsModal;
