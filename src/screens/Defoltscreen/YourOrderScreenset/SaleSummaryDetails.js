import React, {useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Style, YourOrderScreenStyle} from '../../../styles';
import {useDispatch} from 'react-redux';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import {Image} from 'react-native';
import images from '../../../images';
import {useRoute, useFocusEffect} from '@react-navigation/native';
import {fetchSaleSummaryDetails} from '../../../redux/dss/dss.slice';
import {useDss, useCommon} from '../../../redux/hooks/useRedux';

const SaleSummaryDetails = ({navigation}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {details, saleSummary} = useDss();
  const {colorrdata} = useCommon();

  // Get the selected DSS item from route params
  const selectedId = route.params?.id;

  useFocusEffect(
    React.useCallback(() => {
      // Find the selected DSS item from the stored getDssById data
      const dssData = details.data;

      if (dssData && Array.isArray(dssData) && selectedId) {
        const selectedItem = dssData.find(item => item.id === selectedId);

        if (selectedItem?.dss_id && selectedItem?.dist_id) {
          dispatch(
            fetchSaleSummaryDetails({
              dist_id: selectedItem.dist_id,
              dss_id: selectedItem.dss_id,
            })
          );
        }
      }
    }, [selectedId, dispatch, details.data]),
  );

  const saleSummaryDetailsItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(RouteName.CHEQUE_DETAILS, {
            item: item,
          })
        }
        disabled={Boolean(item?.is_delivered)}>
        <View style={YourOrderScreenStyle.yoreorderstylebox}>
          <View style={YourOrderScreenStyle.borderbottomview}>
            <View style={YourOrderScreenStyle.flexminviewset}>
              <View style={YourOrderScreenStyle.flexrowsettext}>
                <View>
                  <Image
                    style={Style.yourorderdata}
                    resizeMode="cover"
                    source={images.Baby_care_imag_aeight}
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
                    disabled={Boolean(item?.is_delivered)}>
                    <Text
                      style={[
                        YourOrderScreenStyle.vadapavtextstyeleset,
                        {color: item?.is_delivered ? 'grey' : 'black'},
                      ]}>
                      {item.cust_name}
                    </Text>
                    <Text
                      style={[
                        YourOrderScreenStyle.addreshrtext,
                        {color: item?.is_delivered ? 'grey' : 'black'},
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
                  {color: item?.is_delivered ? 'grey' : 'black'},
                ]}>
                Invoice ID
              </Text>
              <Text
                style={[
                  YourOrderScreenStyle.blacktitle,
                  {color: item?.is_delivered ? 'grey' : 'black'},
                ]}>
                {item.inv_id}
              </Text>
            </View>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text
                style={[
                  YourOrderScreenStyle.setitemstext,
                  {color: item?.is_delivered ? 'grey' : 'black'},
                ]}>
                Amount
              </Text>
              <Text
                style={[
                  YourOrderScreenStyle.blacktitle,
                  {color: item?.is_delivered ? 'grey' : 'black'},
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
                {saleSummary.loading ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 300,
                    }}>
                    <ActivityIndicator
                      size="large"
                      color={colorrdata || '#000'}
                    />
                    <Text style={{marginTop: 10}}>Loading...</Text>
                  </View>
                ) : saleSummary.error ? (
                  <Text>Error: {saleSummary.error}</Text>
                ) : Array.isArray(saleSummary.data) &&
                  saleSummary.data.length > 0 ? (
                  <FlatList
                    data={saleSummary.data}
                    renderItem={({item}) => saleSummaryDetailsItem(item)}
                    keyExtractor={item => item.id.toString()}
                  />
                ) : (
                  <Text>No sale summary details found.</Text>
                )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={YourOrderScreenStyle.openReturnButtonContainer}>
        <TouchableOpacity
          style={[
            YourOrderScreenStyle.openReturnButton,
            {backgroundColor: colorrdata},
          ]}
          onPress={() => navigation.navigate(RouteName.OPEN_RETURN)}>
          <Text style={YourOrderScreenStyle.openReturnButtonText}>
            Open Return
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SaleSummaryDetails;
