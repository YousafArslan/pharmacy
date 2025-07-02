import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Creditcard, YourOrderScreenStyle} from '../../styles';
import {Button} from '../../components';
import {RouteName} from '../../routes';
import {useSelector} from 'react-redux';
import {yourorderdata} from '../../utils/Sliderimagedata';
import ChequeDetailsModal from './ChequeDetailsModal';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import apiBaseUrl from '../../utils/api';

const ChequeDetailScreen = ({navigation}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const route = useRoute();
  console.log('route', route);
  const [chequeDate, setChequeDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [cheques, setCheques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCheques = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${apiBaseUrl}/cheques`);
      setCheques(res.data);
    } catch (err) {
      setError('Failed to fetch cheques');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCheques();
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    // Handle confirm action
    setIsVisible(false);
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
              <View style={YourOrderScreenStyle.priceflexSaleSummarytext}>
                <View style={YourOrderScreenStyle.setwidth70}>
                  <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>
                    {route?.params?.item?.cust_name}
                  </Text>
                 <Text style={YourOrderScreenStyle.addreshrtext}>
                    {route?.params?.item?.dist_id}
                  </Text>
                 {/*   <Text style={YourOrderScreenStyle.addreshrtext}>
                    Invoice # {yourorderdata[0].invoicenumber}
                  </Text> */}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setIsVisible(true)}
                style={{
                  backgroundColor: colorrdata,
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                  borderRadius: 6,
                  alignSelf: 'flex-start', // keeps it from stretching full width
                  marginTop: 10,
                  shadowColor: '#000',
                  shadowOffset: {width: 0, height: 2},
                  shadowOpacity: 0.2,
                  shadowRadius: 2,
                  elevation: 3, // Android shadow
                }}>
                <Text style={{color: 'white', fontWeight: '600', fontSize: 14}}>
                  Add Cheque
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* List all cheques fetched from API */}
        {loading ? (
          <Text>Loading cheques...</Text>
        ) : error ? (
          <Text style={{color: 'red'}}>{error}</Text>
        ) : cheques && cheques.length > 0 ? (
          cheques.map((cheque, idx) => (
            <View
              key={cheque.id || idx}
              style={YourOrderScreenStyle.chequeCard}>
              {/* Cheque No: Full width row at top */}
              <View style={YourOrderScreenStyle.chequeCardFullRow}>
                <Text style={YourOrderScreenStyle.chequeNo}>
                  Cheque No:{' '}
                  <Text style={YourOrderScreenStyle.chequeNoBlue}>
                    {cheque.cheque_no || 'N/A'}
                  </Text>
                </Text>
              </View>
              {/* Row 1: Date, Bank */}
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <Text style={YourOrderScreenStyle.chequeLabel}>Customer:</Text>
                <Text style={YourOrderScreenStyle.chequeValue}>
                  {cheque.cust_name || 'N/A'}
                </Text>
              </View>
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Date:</Text>
                  <Text style={YourOrderScreenStyle.chequeValue}>
                    {cheque.cheque_date
                      ? new Date(cheque.cheque_date).toLocaleDateString()
                      : 'N/A'}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Bank:</Text>
                  <Text style={YourOrderScreenStyle.chequeValue}>
                    {cheque.cheque_bank || 'N/A'}
                  </Text>
                </View>
              </View>
              {/* Row 2: Branch, Amount */}
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Branch:</Text>
                  <Text style={YourOrderScreenStyle.chequeValue}>
                    {cheque.cheque_branch || 'N/A'}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Amount:</Text>
                  <Text style={YourOrderScreenStyle.chequeAmount}>
                    {cheque.cheque_amount || 'N/A'}
                  </Text>
                </View>
              </View>
              {/* Row 3: Customer (full width) */}
            </View>
          ))
        ) : (
          <Text>No cheques found.</Text>
        )}
      </ScrollView>

      <View style={YourOrderScreenStyle.openReturnButtonContainer}>
        <TouchableOpacity
          style={[
            YourOrderScreenStyle.openReturnButton,
            {backgroundColor: colorrdata},
          ]}
          onPress={() => navigation.navigate(RouteName.CART_TAB)}>
          <Text style={YourOrderScreenStyle.openReturnButtonText}>
            Open Return
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChequeDetailScreen;
