import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {CartTabStyle, Creditcard, YourOrderScreenStyle} from '../../styles';
import {Button} from '../../components';
import {RouteName} from '../../routes';
import {useSelector} from 'react-redux';
import {yourorderdata} from '../../utils/Sliderimagedata';
import ChequeDetailsModal from './ChequeDetailsModal';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import apiBaseUrl from '../../utils/api';
import {useToast} from 'react-native-toast-notifications';
import EditChequesModal from './EditChequesModal';
import Geolocation from '@react-native-community/geolocation';

const ChequeDetailScreen = ({navigation}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const authReducer = useSelector(state => state.auth);
  const route = useRoute();
  const toast = useToast();
  const [chequeDate, setChequeDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [chequeData, setChequeData] = useState();
  const [editCheque, setEditCheque] = useState(false);
  const [cheques, setCheques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [invValue, setInvValue] = useState('');

  const fetchCheques = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${apiBaseUrl}/cheques/${route.params.item.dist_id}/${route.params.item.id}`,
      );
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


  const handleDeliver = async () => {
    try {
      // Get user's current location
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            await axios.put(
              `${apiBaseUrl}/dssDetail/${route.params.item.dist_id}/${route.params.item.id}`,
              {
                is_delivered: true,
                cash_value: invValue || 0,
                cheque_value: cheques.reduce(
                  (sum, cheque) => sum + Number(cheque.cheque_amount) || 0,
                  0,
                ),
                user_name: authReducer?.currentUser?.user?.username || 'Unknown',
                lng: longitude,
                lat: latitude,
              },
            );
            toast.show('Invoice has been delivered', {
              type: 'success',
              placement: 'top',
              style: { backgroundColor: colorrdata },
            });
            navigation.pop();
            // navigation.navigate(RouteName.SUMMARY_INVOICE);
          } catch (error) {
            toast.show('Failed to deliver invoice', {
              type: 'danger',
              placement: 'top',
            });
            console.error('Error delivering invoice:', error);
          }
        },
        (error) => {
          // Handle location error - still proceed but without location
          console.warn('Location error:', error);
          toast.show('Could not get location, but proceeding with delivery', {
            type: 'warning',
            placement: 'top',
          });

          // Proceed without location data
          axios.put(
            `${apiBaseUrl}/dssDetail/${route.params.item.dist_id}/${route.params.item.id}`,
            {
              is_delivered: true,
              cash_value: invValue || 0,
              cheque_value: cheques.reduce(
                (sum, cheque) => sum + Number(cheque.cheque_amount) || 0,
                0,
              ),
              user_name: authReducer?.currentUser?.user?.username || 'Unknown',
              lng: null,
              lat: null,
            },
          )
            .then(() => {
              toast.show('Invoice has been delivered', {
                type: 'success',
                placement: 'top',
                style: { backgroundColor: colorrdata },
              });
              navigation.pop();
            })
            .catch((error) => {
              toast.show('Failed to deliver invoice', {
                type: 'danger',
                placement: 'top',
              });
              console.error('Error delivering invoice:', error);
            });
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    } catch (error) {
      toast.show('Failed to deliver invoice', {
        type: 'danger',
        placement: 'top',
      });
      console.error('Error delivering invoice:', error);
    }
  };

  const showDeliverConfirmation = () => {
    const cashValueNum = Number(invValue) || 0;
    const chequeValueNum = cheques.reduce(
      (sum, cheque) => sum + (Number(cheque.cheque_amount) || 0),
      0
    );
    const total = cashValueNum + chequeValueNum;
    const invoiceValue = Number(route.params.item.inv_value) || 0;

    if (total > invoiceValue) {
      toast.show(
        "Sum of Cheques and Cash value should not greater then Invoice Value",
        {
          type: 'danger',
          placement: 'top',
          duration: 2000,
          offset: 10,
          animationType: 'slide-in',
        }
      );
      return;
    }

    Alert.alert(
      'Confirm Delivery',
      'Are you sure you want to deliver this invoice?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: handleDeliver },
      ],
      { cancelable: true },
    );
  };

  return (
    <View style={Creditcard.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
          paddingBottom: 100, 
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
                    {route?.params?.item?.inv_id}
                  </Text>
                  {/*   <Text style={YourOrderScreenStyle.addreshrtext}>
                    Invoice # {yourorderdata[0].invoicenumber}
                  </Text> */}
                </View>
              </View>
              <View style={YourOrderScreenStyle.actionButtonContainer}>
                <TouchableOpacity
                  onPress={() => setIsVisible(true)}
                  style={[
                    YourOrderScreenStyle.actionButton,
                    {backgroundColor: colorrdata},
                  ]}>
                  <Text style={YourOrderScreenStyle.openReturnButtonText}>
                    Add Cheque
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    YourOrderScreenStyle.actionButton,
                    {backgroundColor: colorrdata},
                  ]}
                  onPress={() =>
                    navigation.navigate(RouteName.CART_TAB, {
                      invoiceDetails: route.params.item,
                    })
                  }>
                  <Text style={YourOrderScreenStyle.openReturnButtonText}>
                    Sale Return
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* List all cheques fetched from API */}
        {loading ? (
          <ActivityIndicator size="large" color={colorrdata} />
        ) : error ? (
          <Text style={{color: 'red'}}>{error}</Text>
        ) : cheques && cheques.length > 0 ? (
          cheques.map((cheque, idx) => (
            <TouchableOpacity
              onPress={() => {
                setChequeData(cheque);
                setEditCheque(true);
              }}
              style={YourOrderScreenStyle.chequeCard}>
              {/* <View style={YourOrderScreenStyle.chequeCard} key={cheque.id || idx}> */}

              {/* Cheque No: Full width row at top */}
              <View style={YourOrderScreenStyle.chequeCardFullRow}>
                <Text style={YourOrderScreenStyle.chequeNo}>
                  Cheque No:{' '}
                  <Text
                    style={YourOrderScreenStyle.chequeNoBlue}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {cheque.cheque_no || 'N/A'}
                  </Text>
                </Text>
              </View>
              {/* Row 1: Date, Bank */}
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <Text style={YourOrderScreenStyle.chequeLabel}>Customer:</Text>
                <Text
                  style={YourOrderScreenStyle.chequeValue}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {cheque.cust_name || 'N/A'}
                </Text>
              </View>
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Date:</Text>
                  <Text style={YourOrderScreenStyle.chequeValue}>
                    {cheque.cheque_date ?? 'N/A'}
                  </Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Bank:</Text>
                  <Text
                    style={YourOrderScreenStyle.chequeValue}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {cheque.cheque_bank || 'N/A'}
                  </Text>
                </View>
              </View>
              {/* Row 2: Branch, Amount */}
              <View style={YourOrderScreenStyle.chequeCardRow}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={YourOrderScreenStyle.chequeLabel}>Branch:</Text>
                  <Text
                    style={YourOrderScreenStyle.chequeValue}
                    numberOfLines={1}
                    ellipsizeMode="tail">
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
              {/* </View> */}
            </TouchableOpacity>
          ))
        ) : (
          <Text>No cheques found.</Text>
        )}
        {isVisible && (
          <ChequeDetailsModal
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
            onNavigateCart={() => navigation.navigate(RouteName.CART_TAB)}
            colorrdata={colorrdata}
            refetchCheques={fetchCheques}
            dssDetails={route.params.item}
            invoiceValue={Number(route.params.item.inv_value) || 0}
            currentCheques={cheques}
            cashValue={invValue}
          />
        )}
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
                Cash Amount
              </Text>
              <TextInput
                style={CartTabStyle.digitaltextsettwo}
                value={invValue}
                onChangeText={setInvValue}
                placeholder="Enter Amount"
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={CartTabStyle.setbuttonwidthview}>
            <TouchableOpacity
              style={[
                YourOrderScreenStyle.openReturnButton,
                {backgroundColor: colorrdata},
              ]}
              onPress={showDeliverConfirmation}>
              <Text style={YourOrderScreenStyle.openReturnButtonText}>
                Deliver Invoice
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View style={YourOrderScreenStyle.openReturnButtonContainer}>
        <TouchableOpacity
          style={[
            YourOrderScreenStyle.openReturnButton,
            {backgroundColor: colorrdata},
          ]}
          onPress={() =>
            navigation.navigate(RouteName.CART_TAB, {
              invoiceDetails: route.params.item,
            })
          }>
          <Text style={YourOrderScreenStyle.openReturnButtonText}>
            Sale Return
          </Text>
        </TouchableOpacity>
      </View> */}

      {editCheque && (
        <EditChequesModal
          isVisible={editCheque}
          chequeData={chequeData}
          onClose={() => setEditCheque(false)}
          onNavigateCart={() => navigation.navigate(RouteName.CART_TAB)}
          colorrdata={colorrdata}
          refetchCheques={fetchCheques}
          dssDetails={route.params.item}
          invoiceValue={Number(route.params.item.inv_value) || 0}
          currentCheques={cheques}
          cashValue={invValue}
        />
      )}
    </View>
  );
};

export default ChequeDetailScreen;
