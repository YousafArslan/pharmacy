import React from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Style, YourOrderScreenStyle} from '../../../styles';
import IconR from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import {Image} from 'react-native';
import IconA from 'react-native-vector-icons/MaterialIcons';
import images from '../../../images';

const YourOrderScreen = props => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;
  const yourorderdata = [
    {
      id: 1,
      image: (
        <Image
          style={Style.yourorderdata}
          resizeMode="cover"
          source={images.Docter_tablet_imag}
        />
      ),
      vadapavtext: 'Lifestyle Pharmacy',
      sitytext: 'Lahore, Punjab',
      price: '110.00',
      items: 'ITEMS',
      onevx: 'Flexon Tablet',
      orderontext: 'ORDERED ON',
      timetextset: '02 Jun 2022 at 3:16 PM',
      rejectedtext: 'Delivered',
      righticon: 'md-checkmark-done',
      refreshicon: <IconA name="refresh" color={'green'} size={20} />,
      repeatordertext: 'Repeat Order',
      invoicenumber: '0029861',
    },
    {
      id: 2,
      image: (
        <Image
          style={Style.yourorderdata}
          resizeMode="cover"
          source={images.Baby_care_imag}
        />
      ),
      vadapavtext: 'Medicose',
      sitytext: 'Lahore, Punjab',
      price: '129.00',
      items: 'ITEMS',
      onevx: 'Indocap SR Capsule',
      orderontext: 'ORDERED ON',
      timetextset: '20 Oct 2022 at 6:00 PM',
      rejectedtext: 'Rejected',
      righticon: 'close-octagon',
      refreshicon: <IconA name="refresh" color={'green'} size={20} />,
      repeatordertext: 'Repeat Order',
    },
    {
      id: 2,
      image: (
        <Image
          style={Style.yourorderdata}
          resizeMode="cover"
          source={images.Baby_care_imag}
        />
      ),
      vadapavtext: 'Health One Pharmacy',
      sitytext: 'Lahore, Punjab',
      price: '789.00',
      items: 'ITEMS',
      onevx: 'Indocap SR Capsule',
      orderontext: 'ORDERED ON',
      timetextset: '20 Oct 2022 at 6:00 PM',
      rejectedtext: 'Rejected',
      righticon: 'close-octagon',
      refreshicon: <IconA name="refresh" color={'green'} size={20} />,
      repeatordertext: 'Repeat Order',
    },
  ];

  const yourorderdataitem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteName.CREDIT_CARD_SCREEN_SET)}>
        <View style={YourOrderScreenStyle.yoreorderstylebox}>
          <View style={YourOrderScreenStyle.borderbottomview}>
            <View style={YourOrderScreenStyle.flexminviewset}>
              <View style={YourOrderScreenStyle.flexrowsettext}>
                <View>{item.image}</View>
                <View style={YourOrderScreenStyle.priceflextext}>
                  <TouchableOpacity
                    style={YourOrderScreenStyle.setwidth70}
                    onPress={() =>
                      navigation.navigate(RouteName.CREDIT_CARD_SCREEN_SET)
                    }>
                    <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>
                      {item.vadapavtext}
                    </Text>
                    <Text style={YourOrderScreenStyle.addreshrtext}>
                      {item.sitytext}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={YourOrderScreenStyle.borderbottomviewtwo}>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>Invoice ID</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>
                {item.invoicenumber ?? '00000123'}
              </Text>
            </View>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>Amount</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>{item.price}</Text>
            </View>
          </View>
          {/* <View style={YourOrderScreenStyle.flexrowsettextrejected}>
            {index === 0 ||
            index === 2 ||
            index === 3 ||
            index === 5 ||
            index === 7 ? (
              <TouchableOpacity style={YourOrderScreenStyle.flexreowdilevry}>
                <Text>
                  <IconR name={item.righticon} color={colorrdata} size={25} />
                </Text>
                <Text
                  style={[
                    YourOrderScreenStyle.rejectedtextstyle,
                    {color: colorrdata},
                  ]}>
                  {item.rejectedtext}
                </Text>
              </TouchableOpacity>
            ) : null}
            {index === 1 || index === 4 || index === 6 ? (
              <TouchableOpacity style={YourOrderScreenStyle.flexreowdilevry}>
                <Text>
                  <IconM name={item.righticon} color={'red'} size={25} />
                </Text>
                <Text
                  style={[
                    YourOrderScreenStyle.rejectedtextstyle,
                    {color: 'red'},
                  ]}>
                  {item.rejectedtext}
                </Text>
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity
              style={YourOrderScreenStyle.setflexitemview}
              onPress={() => navigation.navigate(RouteName.CART_TAB)}>
              <Text>{item.refreshicon}</Text>
              <Text style={YourOrderScreenStyle.rejectedtextstyle}>
                {item.repeatordertext}
              </Text>
            </TouchableOpacity>
          </View> */}
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
                <FlatList
                  data={yourorderdata}
                  renderItem={({item, index}) => yourorderdataitem(item, index)}
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

export default YourOrderScreen;
