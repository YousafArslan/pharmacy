import React from 'react';
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
import {Style} from '../../../styles';
import IconA from 'react-native-vector-icons/MaterialIcons';

const Summary = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  console.log("in here")
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

  const orderDataitem = (item, index) => {
    return (
      <View>
        <View style={SummaryStyle.yoreorderstylebox}>
          <View style={SummaryStyle.borderbottomview}>
            <View style={SummaryStyle.flexminviewset}>
              <View style={SummaryStyle.flexrowsettext}>
                <View>{item.image}</View>
                <View style={SummaryStyle.priceflextext}>
                  <View style={SummaryStyle.setwidth70}>
                    <Text style={SummaryStyle.vadapavtextstyeleset}>
                      {item.vadapavtext}
                    </Text>
                    <Text style={SummaryStyle.addreshrtext}>
                      {item.sitytext}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={SummaryStyle.borderbottomviewtwo}>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Summary ID</Text>
              <Text style={SummaryStyle.blacktitle}>123</Text>
            </View>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Delivery Man</Text>
              <Text style={SummaryStyle.blacktitle}>Waleed</Text>
            </View>
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Amount</Text>
              <Text style={SummaryStyle.blacktitle}>100</Text>
            </View>
          </View>
          {/* <View style={SummaryStyle.flexrowsettextrejected}>
            {index === 0 || index === 2 || index === 3 || index === 5 || index === 7?
              <TouchableOpacity style={SummaryStyle.flexreowdilevry}>
                <Text><IconR name={item.righticon} color={colorrdata} size={25} /></Text>
                <Text style={[SummaryStyle.rejectedtextstyle, { color: colorrdata }]}>{item.rejectedtext}</Text>
              </TouchableOpacity>
             :null}
              {index === 1 || index === 4 || index === 6 ?
              <TouchableOpacity style={SummaryStyle.flexreowdilevry}>
                <Text><IconM name={item.righticon} color={'red'} size={25} /></Text>
                <Text style={[SummaryStyle.rejectedtextstyle, { color: 'red' }]}>{item.rejectedtext}</Text>
              </TouchableOpacity>
             :null}
            <TouchableOpacity style={SummaryStyle.setflexitemview} onPress={() => navigation.navigate(RouteName.CART_TAB)}>
              <Text>{item.refreshicon}</Text>
              <Text style={SummaryStyle.rejectedtextstyle}>{item.repeatordertext}</Text>
            </TouchableOpacity>
          </View> */}
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
                <FlatList
                  data={orderData}
                  renderItem={({item, index}) => orderDataitem(item, index)}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Summary;
