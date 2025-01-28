import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Style, YourOrderScreenStyle} from '../../../styles';
import {useSelector} from 'react-redux';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import {Image} from 'react-native';
import images from '../../../images';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const YourOrderScreen = ({navigation}) => {

  const route = useRoute();
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    // Retrieve and store params when they change
    if (route.params?.id) {
      setOrderId(route.params.id);
    }

    // Ensure params persist
    navigation.setParams({ id: route.params?.id });
  }, [route.params?.id,navigation]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const link = orderId ? `http://quirkysofttech.com/Account/QD_GET?pType=QD_DSS_DETAIL_DATA&pParam=D307^${orderId}` :'http://quirkysofttech.com/Account/QD_GET?pType=QD_DSS_DETAIL_DATA&pParam=D307^0004695'
        const response = await axios.get(link);
        setInvoiceData(response.data); // Update state with the response
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  const yourorderdataitem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteName.CREDIT_CARD_SCREEN_SET)}>
        <View style={YourOrderScreenStyle.yoreorderstylebox}>
          <View style={YourOrderScreenStyle.borderbottomview}>
            <View style={YourOrderScreenStyle.flexminviewset}>
              <View style={YourOrderScreenStyle.flexrowsettext}>
                <View>
                  <Image
                    style={Style.yourorderdata}
                    resizeMode="cover"
                    source={images.Docter_tablet_imag}
                  />
                </View>
                <View style={YourOrderScreenStyle.priceflextext}>
                  <TouchableOpacity
                    style={YourOrderScreenStyle.setwidth70}
                    onPress={() =>
                      navigation.navigate(RouteName.CREDIT_CARD_SCREEN_SET)
                    }>
                    <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>
                      {item.cust_name}
                    </Text>
                    <Text style={YourOrderScreenStyle.addreshrtext}>
                      {item.dist_id}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={YourOrderScreenStyle.borderbottomviewtwo}>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>Invoice ID</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>{item.inv_id}</Text>
            </View>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>Amount</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>
                {item.inv_value}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={[
        YourOrderScreenStyle.minstyleviewphotograpgy,
        YourOrderScreenStyle.bgcolorset,
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={YourOrderScreenStyle.minflexview}>
            <View style={YourOrderScreenStyle.minviewsigninscreen}>
              <View style={YourOrderScreenStyle.paddingtopset}>
                {loading && <Text>Loading...</Text>}
                {error && <p>Error: {error}</p>}
                {invoiceData && (
                  <FlatList
                    data={invoiceData}
                    renderItem={({item, index}) =>
                      yourorderdataitem(item, index)
                    }
                    keyExtractor={item => item.id}
                  />
                )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default YourOrderScreen;
