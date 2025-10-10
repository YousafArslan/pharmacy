import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, ScrollView } from 'react-native';
import { Creditcard } from '../../styles';
import { Button } from '../../components';
import Dialog from '../../components/commoncomponets/Modal';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import apiBaseUrl from '../../utils/api';
import { useDispatch } from 'react-redux';
import { AddChequeAction } from '../../redux/cheques/cheques.slice';

const ChequeDetailsModal = ({
  isVisible,
  onClose,
  refetchCheques,
  dssDetails,
  invoiceValue,
  currentCheques = [],
  cashValue = 0
}) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
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
      chequeDate: Yup.string()
        .required('Cheque Date is required')
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
          'Please enter a valid date in DD/MM/YYYY format'
        )
        .test('is-valid-date', 'Please enter a valid date', function(value) {
          if (!value) return false;
          const [day, month, year] = value.split('/').map(Number);
          const date = new Date(year, month - 1, day);
          return (
            date.getDate() === day &&
            date.getMonth() === month - 1 &&
            date.getFullYear() === year
          );
        })
        .test('is-not-past', 'Cannot select a previous date', function(value) {
          if (!value) return false;
          const [day, month, year] = value.split('/').map(Number);
          const enteredDate = new Date(year, month - 1, day);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return enteredDate >= today;
        }),
      bankName: Yup.string().required('Bank Name is required'),
      branchName: Yup.string().required('Branch Name is required'),
      amount: Yup.string()
        .required('Amount is required')
        .test('is-positive', 'Amount must be a positive number', value => {
          return value && parseFloat(value) > 0;
        })
        .test('not-exceed-invoice', 'Total amount exceeds invoice value', function(value) {
          if (!value || !invoiceValue) return true;

          const newAmount = parseFloat(value) || 0;
          const existingChequesTotal = currentCheques.reduce(
            (sum, cheque) => sum + (Number(cheque.cheque_amount) || 0),
            0
          );
          const cash = Number(cashValue) || 0;
          const total = existingChequesTotal + cash + newAmount;

          return total <= invoiceValue;
        }),
    }),
    onSubmit: async values => {
      const payload = {
        row_id: Math.floor(100 + Math.random() * 900),
        dss_id: dssDetails.dss_id,
        dist_id: dssDetails.dist_id,
        user_name: dssDetails.cust_name,
        cust_id: dssDetails.cust_id,
        cust_name: dssDetails.cust_name,
        cheque_no: values.chequeNumber,
        cheque_date: values.chequeDate,
        cheque_bank: values.bankName,
        cheque_branch: values.branchName,
        cheque_amount: +values.amount,
      };

      try {
        await axios.post(
          `${apiBaseUrl}/cheques/upload/${dssDetails.id}`,
          payload,
        );
        setErrorMessage('');
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

      // Validate date if complete (DD/MM/YYYY)
      if (day.length === 2 && month.length === 2 && year.length === 4) {
        const dayNum = parseInt(day);
        const monthNum = parseInt(month);
        const yearNum = parseInt(year);

        // Check if date values are valid
        if (monthNum < 1 || monthNum > 12) {
          formik.setFieldError('chequeDate', 'Invalid month. Please enter 01-12');
          return;
        }

        if (dayNum < 1 || dayNum > 31) {
          formik.setFieldError('chequeDate', 'Invalid day. Please enter 01-31');
          return;
        }

        // Create date and check if it's valid (handles Feb 30, etc.)
        const enteredDate = new Date(yearNum, monthNum - 1, dayNum);

        // Check if the date is actually valid (e.g., Feb 30 becomes Mar 2)
        if (
          enteredDate.getDate() !== dayNum ||
          enteredDate.getMonth() !== monthNum - 1 ||
          enteredDate.getFullYear() !== yearNum
        ) {
          formik.setFieldError('chequeDate', 'Invalid date. Please check day and month');
          return;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to start of day

        // Check if the entered date is in the past
        if (enteredDate < today) {
          formik.setFieldError('chequeDate', 'Cannot select a previous date');
          return;
        }

        // Clear any previous errors
        formik.setFieldError('chequeDate', '');
      }

      formik.setFieldValue('chequeDate', newDate.substr(0, 10));
    }
  };

  const handleClose = () => {
    setErrorMessage('');
    formik.resetForm();
    onClose();
  };

  useEffect(() => {
    if (!isVisible) {
      formik.resetForm();
    }
  }, [isVisible]);

  return (
    <View>
      <Modal visible={isVisible} animationType="slide" transparent={true}>
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
                    {errorMessage}
                  </Text>
                ) : null}
                <View style={Creditcard.minviewsigninscreen}>
                  {/* Cheque Number */}
                  <View style={Creditcard.setstyleinputtext}>
                    <Text style={Creditcard.textstyle}>Cheque Number</Text>
                    <TextInput
                      placeholder="Enter Cheque Number"
                      onChangeText={formik.handleChange('chequeNumber')}
                      value={formik.values.chequeNumber}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                    {formik.touched.chequeNumber &&
                      formik.errors.chequeNumber && (
                        <Text style={{color: 'red'}}>
                        {formik.errors.chequeNumber}
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
                      onChangeText={(text) => {
                        formik.setFieldValue('amount', text);
                      }}
                      onBlur={formik.handleBlur('amount')}
                      value={formik.values.amount}
                      style={Creditcard.inputstyle}
                      keyboardType="numeric"
                    />
                    {invoiceValue > 0 && (
                      <Text style={{color: '#666', fontSize: 12, marginTop: 4}}>
                        Invoice Value: {invoiceValue} | Remaining: {
                          invoiceValue -
                          (currentCheques.reduce((sum, cheque) => sum + (Number(cheque.cheque_amount) || 0), 0)) -
                          (Number(cashValue) || 0)
                        }
                      </Text>
                    )}
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
                      loading={formik.isSubmitting}
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
