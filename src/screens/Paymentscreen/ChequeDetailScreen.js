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

const ChequeDetailScreen = ({navigation}) => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const route = useRoute()
  console.log("route",route)
  const [chequeDate, setChequeDate] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   // Retrieve and store params when they change
  //   if (route.params) {
  //     console.log(route.params.id);
  //   }

  //   // Ensure params persist
  //   navigation.setParams({ item: route.params?.item });
  // }, [route.params,navigation]);
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
                  Open Cheque Modal
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ChequeDetailsModal
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
          onNavigateCart={() => navigation.navigate(RouteName.CART_TAB)}
          colorrdata={colorrdata}
        />
      </ScrollView>
    </View>
  );
};

export default ChequeDetailScreen;
