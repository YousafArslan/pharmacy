import React, {useEffect} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import SummaryStyle from '../../../styles/Defoltscreenstyle/SummaryStyle';
import {YourOrderScreenStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {GetDssByIDAction} from '../../../redux/dss/dss.slice';
import NetInfo from '@react-native-community/netinfo';
import { setConnectionStatus, setLoading, setError } from '../../../redux/network/network.slice'; // Import actions



const Summary = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const dssReducer = useSelector(state => state.dss);
  const isConnected = useSelector(state => state.network.isConnected);
  const isLoading = useSelector(state => state?.network?.isLoading);
  const isError = useSelector(state => state?.network?.isError);
  console.log("isConnected",isConnected);
  // console.log("isLoading",isLoading);
  // console.log("isError",isError);


  useEffect(() => {
    if (authReducer?.currentUser?.user?.dist_id) {
      dispatch(
        GetDssByIDAction({data: authReducer?.currentUser?.user?.dist_id}),
      );
    }
  }, [authReducer?.currentUser]);

  useEffect(() => {
    // Dispatch setLoading to indicate we are checking network status
    dispatch(setLoading(true));
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("state",state)
      dispatch(setConnectionStatus(state.isInternetReachable)); // Dispatch the connection status
      dispatch(setLoading(false)); // Set loading to false when status is received
    });

    // Clean up the listener when the component unmounts
    // return () => {
    //   unsubscribe();
    // };
  }, [dispatch]);

  const orderDataitem = (item, index, navigation) => {
    return (
      <View>
        <View style={SummaryStyle.yoreorderstylebox}>
          <View style={SummaryStyle.borderbottomview}>
            <View style={SummaryStyle.flexminviewset}>
              <View style={SummaryStyle.flexrowsettext}>
                <View></View>
                <View style={SummaryStyle.priceflextext}>
                  <TouchableOpacity
                    style={YourOrderScreenStyle.setwidth70}
                    disabled={item?.dss_status === 1}
                    onPress={() => {
                      navigation.navigate(RouteName.SUMMARY_INVOICE, {
                        dist_id: item.dist_id,
                        id: item.id,
                      });
                    }}>
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
            <View style={SummaryStyle.setlistdataitems}>
              <Text style={SummaryStyle.setitemstext}>Status</Text>
              <Text style={SummaryStyle.blacktitle}>
                {item.dss_status === 0 ? 'In Progress' : 'Completed'}
              </Text>
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
                {dssReducer?.getDssByIdLoading && <Text>Loading...</Text>}
                {dssReducer?.getDssByIdError && (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 600, // or use flexGrow: 1 in contentContainerStyle
                    }}>
                    <Icon name="file-search" size={100} color={'#D7D6D6'} />
                    <Text>{dssReducer?.getDssByIdError}</Text>
                  </View>
                )}
                {dssReducer?.getDssById && (
                  <FlatList
                    data={dssReducer?.getDssById}
                    renderItem={({item, index}) =>
                      orderDataitem(item, index, navigation)
                    }
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
