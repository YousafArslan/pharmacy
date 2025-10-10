import React, {
  useCallback,
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {
  Text,
  View,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import SummaryStyle from '../../../styles/Defoltscreenstyle/SummaryStyle';
import {Style, YourOrderScreenStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {GetDssByIDAction} from '../../../redux/dss/dss.slice';
import NetInfo from '@react-native-community/netinfo';
import {
  setConnectionStatus,
  setLoading,
  setError,
} from '../../../redux/network/network.slice';
import images from '../../../images';
import {useFocusEffect} from '@react-navigation/native';

const Summary = forwardRef(({navigation}, ref) => {
  const dispatch = useDispatch();
  const authReducer = useSelector(state => state.auth);
  const dssReducer = useSelector(state => state.dss);
  const [refreshing, setRefreshing] = useState(false);

  const distId = authReducer?.currentUser?.user?.dist_id;
  const username = authReducer?.currentUser?.user?.username;

  /** ✅ Fetch DSS Data */
  const fetchSummaryData = useCallback(() => {
    // Only fetch if user is authenticated and distId exists
    if (authReducer?.isLoggedIn && authReducer?.currentUser && distId && username) {
      dispatch(GetDssByIDAction({data: { id: distId, username }}));
    }
  }, [distId, username, dispatch, authReducer?.isLoggedIn, authReducer?.currentUser]);

  // Expose fetchSummaryData function to parent component via ref
  useImperativeHandle(
    ref,
    () => ({
      fetchSummaryData,
    }),
    [fetchSummaryData],
  );

  /** ✅ Initial fetch when screen mounts */
  useEffect(() => {
    fetchSummaryData();
  }, [fetchSummaryData]);

  // Note: useFocusEffect removed to prevent duplicate calls
  // HomeTab.js already handles focus-based data fetching via ref

  /** ✅ Pull-to-refresh */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSummaryData();
    setTimeout(() => setRefreshing(false), 1000); // mimic API delay
  }, [fetchSummaryData]);

  /** ✅ Track network changes */
  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setConnectionStatus(state.isInternetReachable));
      dispatch(setLoading(false));
    });
    return () => unsubscribe();
  }, [dispatch]);

  /** ✅ Render list item */
  const renderOrderItem = ({item}) => (
    <View style={SummaryStyle.yoreorderstylebox}>
      <View style={SummaryStyle.borderbottomview}>
        <View style={SummaryStyle.flexminviewset}>
          <View style={SummaryStyle.flexrowsettext}>
            <View style={SummaryStyle.priceflextext}>
              <Image
                style={Style.yourorderdata}
                resizeMode="cover"
                source={images.Docter_tablet_imag}
              />
              <TouchableOpacity
                style={YourOrderScreenStyle.setwidth70}
                disabled={item?.dss_status === 1}
                onPress={() =>
                  navigation.navigate(RouteName.SUMMARY_INVOICE, {
                    dist_id: item.dist_id,
                    id: item.id,
                  })
                }>
                <View style={SummaryStyle.setwidth70}>
                  <Text style={SummaryStyle.vadapavtextstyeleset}>
                    {item.delman_name}
                  </Text>
                  <Text style={SummaryStyle.addreshrtext}>{item.dist_id}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={SummaryStyle.borderbottomviewtwo}>
        <View style={SummaryStyle.setlistdataitems}>
          <Text style={SummaryStyle.setitemstext}>Summary ID</Text>
          <Text style={SummaryStyle.blacktitle}>{item.dss_id}</Text>
        </View>
        <View style={SummaryStyle.setlistdataitems}>
          <Text style={SummaryStyle.setitemstext}>Delivery Man</Text>
          <Text style={SummaryStyle.blacktitle}>{item.app_user_id}</Text>
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
  );

  return (
    <View
      style={[SummaryStyle.minstyleviewphotograpgy, SummaryStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <KeyboardAvoidingView enabled>
          <View style={SummaryStyle.minflexview}>
            <View style={SummaryStyle.minviewsigninscreen}>
              <View style={SummaryStyle.paddingtopset}>
                {/* ✅ Loading state */}
                {dssReducer?.getDssByIdLoading && (
                  <View style={{alignItems: 'center', padding: 20}}>
                    <ActivityIndicator size="large" color="#007AFF" />
                  </View>
                )}

                {/* ✅ Error state */}
                {dssReducer?.getDssByIdError &&
                  !dssReducer?.getDssByIdLoading && (
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 600,
                      }}>
                      <Icon name="file-search" size={100} color={'#D7D6D6'} />
                      <Text>{dssReducer?.getDssByIdError}</Text>
                    </View>
                  )}

                {/* ✅ Data state */}
                {dssReducer?.getDssById?.length > 0 && (
                  <FlatList
                    data={dssReducer?.getDssById}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item.dss_id.toString()}
                    showsVerticalScrollIndicator={false}
                  />
                )}

                {/* ✅ Empty state */}
                {!dssReducer?.getDssByIdLoading &&
                  !dssReducer?.getDssByIdError &&
                  (!dssReducer?.getDssById ||
                    dssReducer?.getDssById?.length === 0) && (
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 40,
                      }}>
                      <Icon name="clipboard-list" size={80} color={'#D7D6D6'} />
                      <Text>No summary data found</Text>
                    </View>
                  )}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
});

export default Summary;
