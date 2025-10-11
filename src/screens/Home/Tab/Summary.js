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
  Modal,
} from 'react-native';
import {RouteName} from '../../../routes';
import {ScrollView} from 'react-native-virtualized-view';
import SummaryStyle from '../../../styles/Defoltscreenstyle/SummaryStyle';
import {Style, YourOrderScreenStyle} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {fetchDssById} from '../../../redux/dss/dss.slice';
import {useAuth, useDss} from '../../../redux/hooks/useRedux';
import images from '../../../images';
import {useToast} from 'react-native-toast-notifications';
import axios from 'axios';
import apiBaseUrl from '../../../utils/api';

const Summary = forwardRef(({navigation}, ref) => {
  const dispatch = useDispatch();
  const {currentUser, isLoggedIn} = useAuth();
  const {details} = useDss();
  const [refreshing, setRefreshing] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const toast = useToast();

  const distId = currentUser?.user?.dist_id;
  const username = currentUser?.user?.username;

  /** ✅ Fetch DSS Data */
  const fetchSummaryData = useCallback(async () => {
    // Only fetch if user is authenticated and distId exists
    if (isLoggedIn && currentUser && distId && username) {
      try {
        await dispatch(fetchDssById({id: distId, username})).unwrap();
      } catch (error) {
        // Error is already handled by Redux state
        console.error('Failed to fetch DSS data:', error);
      }
    }
  }, [distId, username, dispatch, isLoggedIn, currentUser]);

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

  /** ✅ Pull-to-refresh */
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchSummaryData();
    setTimeout(() => setRefreshing(false), 1000);
  }, [fetchSummaryData]);

  /** ✅ Handle long press to show confirmation modal */
  const handleLongPress = (item) => {
    if (item?.dss_status === 1) {
      toast.show('This summary is already completed', {
        type: 'info',
        placement: 'center',
        duration: 2000,
      });
      return;
    }

    setSelectedItem(item);
    setShowConfirmModal(true);
  };

  /** ✅ Handle confirmation and update DSS status */
  const handleConfirmUpdate = async () => {
    if (!selectedItem || updating) return;

    try {
      setUpdating(true);
      setShowConfirmModal(false);

      const response = await axios.put(
        `${apiBaseUrl}/dss/${selectedItem.dist_id}/${selectedItem.app_user_id}`,
        {
          user_name: selectedItem.app_user_id,
          dss_status: 1,
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.show('Summary status updated successfully', {
          type: 'success',
          placement: 'center',
          duration: 2000,
        });

        // Refresh the list after successful update
        fetchSummaryData();
      }
    } catch (error) {
      console.error('Error updating DSS status:', error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        'Failed to update status. Please try again.';

      toast.show(errorMessage, {
        type: 'danger',
        placement: 'center',
        duration: 3000,
      });
    } finally {
      setUpdating(false);
      setSelectedItem(null);
    }
  };

  /** ✅ Handle cancel confirmation */
  const handleCancelUpdate = () => {
    setShowConfirmModal(false);
    setSelectedItem(null);
  };

  /** ✅ Render list item */
  const renderOrderItem = ({item}) => {
    const isCompleted = item?.dss_status === 1;

    return (
      <TouchableOpacity
        style={[
          SummaryStyle.yoreorderstylebox,
          isCompleted && {opacity: 0.5},
        ]}
        onPress={() => {
          if (!isCompleted) {
            navigation.navigate(RouteName.SUMMARY_INVOICE, {
              dist_id: item.dist_id,
              id: item.id,
            });
          }
        }}
        onLongPress={() => handleLongPress(item)}>
        <View style={SummaryStyle.borderbottomview}>
          <View style={SummaryStyle.flexminviewset}>
            <View style={SummaryStyle.flexrowsettext}>
              <View style={SummaryStyle.priceflextext}>
                <Image
                  style={[
                    Style.yourorderdata,
                    isCompleted && {opacity: 0.5},
                  ]}
                  resizeMode="cover"
                  source={images.Docter_tablet_imag}
                />
                <View
                  style={YourOrderScreenStyle.setwidth70}
                  disabled={isCompleted}>
                  <View style={SummaryStyle.setwidth70}>
                    <Text
                      style={[
                        SummaryStyle.vadapavtextstyeleset,
                        isCompleted && {color: '#999'},
                      ]}>
                      {item.delman_name}
                    </Text>
                    <Text
                      style={[
                        SummaryStyle.addreshrtext,
                        isCompleted && {color: '#aaa'},
                      ]}>
                      {item.dist_id}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={SummaryStyle.borderbottomviewtwo}>
          <View style={SummaryStyle.setlistdataitems}>
            <Text
              style={[
                SummaryStyle.setitemstext,
                isCompleted && {color: '#aaa'},
              ]}>
              Summary ID
            </Text>
            <Text
              style={[
                SummaryStyle.blacktitle,
                isCompleted && {color: '#999'},
              ]}>
              {item.dss_id}
            </Text>
          </View>
          <View style={SummaryStyle.setlistdataitems}>
            <Text
              style={[
                SummaryStyle.setitemstext,
                isCompleted && {color: '#aaa'},
              ]}>
              Delivery Man
            </Text>
            <Text
              style={[
                SummaryStyle.blacktitle,
                isCompleted && {color: '#999'},
              ]}>
              {item.app_user_id}
            </Text>
          </View>
          <View style={SummaryStyle.setlistdataitems}>
            <Text
              style={[
                SummaryStyle.setitemstext,
                isCompleted && {color: '#aaa'},
              ]}>
              Amount
            </Text>
            <Text
              style={[
                SummaryStyle.blacktitle,
                isCompleted && {color: '#999'},
              ]}>
              {item.amount}
            </Text>
          </View>
          <View style={SummaryStyle.setlistdataitems}>
            <Text
              style={[
                SummaryStyle.setitemstext,
                isCompleted && {color: '#aaa'},
              ]}>
              Status
            </Text>
            <Text
              style={[
                SummaryStyle.blacktitle,
                isCompleted && {color: '#999'},
              ]}>
              {item.dss_status === 0 ? 'In Progress' : 'Completed'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
                {details.loading && (
                  <View style={{alignItems: 'center', padding: 20}}>
                    <ActivityIndicator size="large" color="#007AFF" />
                  </View>
                )}

                {/* ✅ Error state */}
                {details.error && !details.loading && (
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 600,
                    }}>
                    <Icon name="file-search" size={100} color={'#D7D6D6'} />
                    <Text>{details.error}</Text>
                  </View>
                )}

                {/* ✅ Data state */}
                {details.data?.length > 0 && (
                  <FlatList
                    data={details.data}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item.dss_id.toString()}
                    showsVerticalScrollIndicator={false}
                  />
                )}

                {/* ✅ Empty state */}
                {!details.loading &&
                  !details.error &&
                  (!details.data || details.data?.length === 0) && (
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

      {/* ✅ Confirmation Modal */}
      <Modal
        visible={showConfirmModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelUpdate}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 24,
              width: '85%',
              maxWidth: 400,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '600',
                color: '#333',
                marginBottom: 12,
                textAlign: 'center',
              }}>
              Confirm Completion
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#666',
                marginBottom: 24,
                textAlign: 'center',
                lineHeight: 22,
              }}>
              Has this summary been completed?
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={handleCancelUpdate}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  borderRadius: 8,
                  backgroundColor: '#F5F5F5',
                  marginRight: 8,
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: '600', color: '#666'}}>
                  No
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleConfirmUpdate}
                disabled={updating}
                style={{
                  flex: 1,
                  paddingVertical: 12,
                  paddingHorizontal: 20,
                  borderRadius: 8,
                  backgroundColor: updating ? '#ccc' : '#007AFF',
                  marginLeft: 8,
                  alignItems: 'center',
                }}>
                {updating ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>
                    Yes
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
});

export default Summary;
