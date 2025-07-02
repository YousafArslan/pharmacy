import React, {useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {Style, YourOrderScreenStyle} from '../../../styles';
import {useDispatch, useSelector} from 'react-redux';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import {Image} from 'react-native';
import images from '../../../images';
import {useRoute} from '@react-navigation/native';
import {GetSaleSummaryDetailsAction} from '../../../redux/dss/dss.slice';

const SaleSummaryDetails = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const dssReducer = useSelector(state => state.dss);

  useEffect(() => {
    if (route.params?.id) {
      dispatch(GetSaleSummaryDetailsAction({data: route.params?.id}));
    }
  }, [route.params?.id]);

  const saleSummaryDetails = (item, index) => {
    console.log('item', item);
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(RouteName.CHEQUE_DETAILS)}
        // disabled={item?.is_delivered}
      >
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
                      navigation.navigate(RouteName.CHEQUE_DETAILS, {
                        item: item,
                      })
                    }
                    disabled={item?.is_delivered}>
                    <Text
                      style={[
                        YourOrderScreenStyle.vadapavtextstyeleset,
                        {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                      ]}>
                      {item.cust_name}
                    </Text>
                    <Text
                      style={[
                        YourOrderScreenStyle.addreshrtext,
                        {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                      ]}>
                      {item.dist_id}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={YourOrderScreenStyle.borderbottomviewtwo}>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text
                style={[
                  YourOrderScreenStyle.setitemstext,
                  {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                ]}>
                Invoice ID
              </Text>
              <Text
                style={[
                  YourOrderScreenStyle.blacktitle,
                  {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                ]}>
                {item.inv_id}
              </Text>
            </View>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text
                style={[
                  YourOrderScreenStyle.setitemstext,
                  {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                ]}>
                Amount
              </Text>
              <Text
                style={[
                  YourOrderScreenStyle.blacktitle,
                  {color: item?.is_delivered ? 'black' : 'grey'}, // Change color based on condition
                ]}>
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
                {dssReducer?.getSaleSummaryDetailsLoading && (
                  <Text>Loading...</Text>
                )}
                {dssReducer?.getSaleSummaryDetailsError && (
                  <Text>Error: {dssReducer?.getSaleSummaryDetailsError}</Text>
                )}
                {dssReducer?.getSaleSummaryDetails && (
                  <FlatList
                    data={dssReducer?.getSaleSummaryDetails}
                    renderItem={({item, index}) =>
                      saleSummaryDetails(item, index)
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

export default SaleSummaryDetails;
