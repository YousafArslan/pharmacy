import React, { useState } from 'react';
import { Modal, View, Text, TextInput, ScrollView } from 'react-native';
import { Creditcard } from '../../styles';
import { Button } from '../../components';
import Dialog from '../../components/commoncomponets/Modal';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiBaseUrl from '../../utils/api';

const ChequeDetailsModal = ({isVisible, onClose, refetchCheques}) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [rowId, setRowId] = useState(105);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      chequeNumber: '',
      chequeDate: '',
      bankName: '',
      branchName: '',
      amount: '',
    },
    validationSchema: Yup.object({
      chequeNumber: Yup.string().required('Cheque Number is required'),
      chequeDate: Yup.string().required('Cheque Date is required'),
      bankName: Yup.string().required('Bank Name is required'),
      branchName: Yup.string().required('Branch Name is required'),
      amount: Yup.number()
        .required('Amount is required')
        .positive('Amount must be a positive number'),
    }),
    onSubmit: async values => {
      const payload = {
        row_id: rowId,
        dss_id: 'DSS123',
        dist_id: 'DIST456',
        user_name: 'john_doe',
        cust_id: 'CUST789',
        cust_name: 'Jane Smith',
        cheque_no: values.chequeNumber,
        cheque_date: values.chequeDate,
        cheque_bank: values.bankName,
        cheque_branch: values.branchName,
        cheque_amount: +values.amount,
      };

      try {
        await axios.post(`${apiBaseUrl}/cheques/upload`, payload);
        setErrorMessage('');
        setRowId(prev => prev + 1);
        formik.resetForm();
        handleClose();
        refetchCheques();
      } catch (error) {
        const msg =
          error.response?.data?.message ||
          error.message ||
          'An error occurred while uploading the cheque.';
        setErrorMessage(msg);
        console.error('Error uploading cheque:', error);
      }
    },
  });

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

      formik.setFieldValue('chequeDate', newDate.substr(0, 10));
    }
  };

  const handleClose = () => {
    setErrorMessage('');
    onClose();
  };

  return (
    <View>
      <Modal visible={isVisible} animationType="slide">
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
                {/* Error Message */}
                {errorMessage ? (
                  <Text style={{color: 'red', marginBottom: 10}}>
                    {errorMessage}x
                  </Text>
                ) : null}
                <View style={Creditcard.minviewsigninscreen}>
                  {/* Cheque Number */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Cheque Number</Text>
                    <TextInput
                      placeholder="Enter Cheque Number"
                      x
                      onChangeText={formik.handleChange('chequeNumber')}
                      value={formik.values.chequeNumber}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                    {formik.touched.chequeNumber &&
                      formik.errors.chequeNumber && (
                        <Text style={{color: 'red'}}>
                          x{formik.errors.chequeNumber}
                        </Text>
                      )}
                  </View>

                  {/* Cheque Date */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Cheque Date</Text>
                    <TextInput
                      placeholder="DD/MM/YYYY"
                      onChangeText={handleDateChange}
                      value={formik.values.chequeDate}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                    {formik.touched.chequeDate && formik.errors.chequeDate && (
                      <Text style={{color: 'red'}}>
                        {formik.errors.chequeDate}
                      </Text>
                    )}
                  </View>

                  {/* Bank Name */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Bank</Text>
                    <TextInput
                      placeholder="Enter Bank Name"
                      onChangeText={formik.handleChange('bankName')}
                      value={formik.values.bankName}
                      style={Creditcard.inputstyle}
                    />
                    {formik.touched.bankName && formik.errors.bankName && (
                      <Text style={{color: 'red'}}>
                        {formik.errors.bankName}
                      </Text>
                    )}
                  </View>

                  {/* Branch Name */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Branch</Text>
                    <TextInput
                      placeholder="Enter Branch Name"
                      onChangeText={formik.handleChange('branchName')}
                      value={formik.values.branchName}
                      style={Creditcard.inputstyle}
                    />
                    {formik.touched.branchName && formik.errors.branchName && (
                      <Text style={{color: 'red'}}>
                        {formik.errors.branchName}
                      </Text>
                    )}
                  </View>

                  {/* Amount */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Amount</Text>
                    <TextInput
                      placeholder="Enter Amount"
                      onChangeText={formik.handleChange('amount')}
                      value={formik.values.amount}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                    {formik.touched.amount && formik.errors.amount && (
                      <Text style={{color: 'red'}}>{formik.errors.amount}</Text>
                    )}
                  </View>

                  {/* Buttons */}
                  <View style={Creditcard.setcheckbuttonstyle}>
                    <Button
                      title="Cancel"
                      buttonStyle={Creditcard.setbuttonstylesavecard}
                      buttonTextStyle={Creditcard.setbuttontextstyle}
                      onPress={onClose}
                    />
                    <Button
                      title="Add"
                      buttonStyle={Creditcard.setbuttonstylesavecard}
                      buttonTextStyle={Creditcard.setbuttontextstyle}
                      onPress={formik.handleSubmit}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>

            <Dialog
              isVisible={confirmVisible}
              onClose={() => setConfirmVisible(false)}
              onConfirm={() => setConfirmVisible(false)}
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
