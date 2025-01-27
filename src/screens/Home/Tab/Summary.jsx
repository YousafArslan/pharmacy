import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from 'react-native';
import IconR from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import SummaryStyle from '../../../styles/Defoltscreenstyle/SummaryStyle';
import images from '../../../images';
import {Style, YourOrderScreenStyle} from '../../../styles';
import IconA from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';

const Summary = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'http://quirkysofttech.com/Account/QD_GET?pType=QD_DSS_DATA&pParam=D307^sa',
        );
        setData(response.data); // Update state with the response
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //Adding commit to merge


  const orderData = [
    {
      id: 1,
      image: (
        <Image
          style={Style.yourorderdata}
          resizeMode="cover"
          source={images.Docter_tablet_imag}
        />
      ),
      vadapavtext: 'Avastin Pharmacy',
      sitytext: 'Kukatpally,Hyderabad',
      price: '110.00',
      items: 'ITEMS',
      onevx: 'Flexon Tablet',
      orderontext: 'ORDERED ON',
      timetextset: '02 Jun 2022 at 3:16 PM',
      rejectedtext: 'Delivered',
      righticon: 'md-checkmark-done',
      refreshicon: <IconA name="refresh" color={'green'} size={20} />,
      repeatordertext: 'Repeat Order',
    },
    {
      id: 1,
      image: (
        <Image
          style={Style.yourorderdata}
          resizeMode="cover"
          source={images.Docter_tablet_imag}
        />
      ),
      vadapavtext: 'Avastin Pharmacy',
      sitytext: 'Kukatpally,Hyderabad',
      price: '110.00',
      items: 'ITEMS',
      onevx: 'Flexon Tablet',
      orderontext: 'ORDERED ON',
      timetextset: '02 Jun 2022 at 3:16 PM',
      rejectedtext: 'Delivered',
      righticon: 'md-checkmark-done',
      refreshicon: <IconA name="refresh" color={'green'} size={20} />,
      repeatordertext: 'Repeat Order',
    },
  ];

  const orderDataitem = (item, index, navigation) => {
    return (
      <View>
        <View style={SummaryStyle.yoreorderstylebox}>
          <View style={SummaryStyle.borderbottomview}>
            <View style={SummaryStyle.flexminviewset}>
              <View style={SummaryStyle.flexrowsettext}>
                <View>{item.image}</View>
                <View style={SummaryStyle.priceflextext}>
                  <TouchableOpacity
                    style={YourOrderScreenStyle.setwidth70}
                    onPress={() =>
                      navigation.navigate(RouteName.YOUR_ORDER_SCREEN)
                    }>
                    <View style={SummaryStyle.setwidth70}>
                      <Text style={SummaryStyle.vadapavtextstyeleset}>
                        {item.delman_name}
                      </Text>
                      <Text style={SummaryStyle.addreshrtext}>
                        {item.dist_id}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={SummaryStyle.borderbottomviewtwo}>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Summary ID</Text>
              <Text style={SummaryStyle.blacktitle}>{item.dist_id}</Text>
            </View>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Delivery Man</Text>
              <Text style={SummaryStyle.blacktitle}>{item.assigned_to}</Text>
            </View>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Amount</Text>
              <Text style={SummaryStyle.blacktitle}>{item.amount}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={[SummaryStyle.minstyleviewphotograpgy, SummaryStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={SummaryStyle.minflexview}>
            <View style={SummaryStyle.minviewsigninscreen}>
              <View style={SummaryStyle.paddingtopset}>
                {loading && <Text>Loading...</Text>}
                {error && <p>Error: {error}</p>}
                {data && (
                  <FlatList
                    data={data}
                    renderItem={({item, index}) => orderDataitem(item, index,navigation)}
                    keyExtractor={item => item.dss_id}
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

export default Summary;
