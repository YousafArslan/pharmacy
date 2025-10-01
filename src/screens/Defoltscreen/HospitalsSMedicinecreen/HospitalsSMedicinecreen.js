import React, {useState, useEffect, useCallback, useRef} from 'react';
import {
  Text,
  View,
  StatusBar,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import debounce from 'lodash.debounce';
import axios from 'axios';
import {Hospitalmediction, PopularCuisinesStyle} from '../../../styles';
import apiBaseUrl from '../../../utils/api';

const MedicineListItem = React.memo(
  ({item, colorrdata}) => (
    <View
      style={[
        PopularCuisinesStyle.setflexviewdata,
        PopularCuisinesStyle.searchtextlist,
      ]}>
      {/* If you have an image for medicine, render it here */}
      {/* <View>{item.image}</View> */}
      <View style={PopularCuisinesStyle.textflexview}>
        <View style={PopularCuisinesStyle.setflextext}>
          <Text
            style={[Hospitalmediction.textboldstyle, {color: colorrdata}]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.item_name}
          </Text>
          <Text style={PopularCuisinesStyle}>
            <Text style={{fontWeight: 'bold'}}>Company:</Text>{' '}
            {item.company_name}
          </Text>
          <Text style={PopularCuisinesStyle}>
            <Text style={{fontWeight: 'bold'}}>Group:</Text> {item.group_name}
          </Text>
        </View>
      </View>
    </View>
  ),
  (prevProps, nextProps) =>
    prevProps.item.item_name === nextProps.item.item_name,
);

const HospitalsSMedicinecreen = () => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const flatListRef = useRef(null);

  // Debounced search
  const debouncedSearch = useCallback(
    debounce(text => setSearchQuery(text), 400),
    [],
  );

  const handleSearchChange = text => {
    setSearchInput(text);
    debouncedSearch(text);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  // Fetch data
  const fetchData = async reset => {
    if (fetching) return;
    setFetching(true);
    setLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/items`, {
        params: {
          page: reset ? 1 : page,
          limit: 10,
        },
      });
      const newItems = response.data || [];
      if (newItems.length < 10) setHasMore(false);
      setData(prev => (reset ? newItems : [...prev, ...newItems]));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchData(page === 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Pull to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    setPage(1);
    setHasMore(true);
    await fetchData(true);
    setRefreshing(false);
  };

  // Pagination
  const handleEndReached = () => {
    if (hasMore && !fetching) setPage(prev => prev + 1);
  };

  // Filtered data
  const filteredData = data.filter(item =>
    item.item_name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Item layout optimization
  const getItemLayout = (_, index) => ({
    length: 60,
    offset: 60 * index,
    index,
  });

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <View style={Hospitalmediction.minstyleviewphotograpgy}>
        <View style={Hospitalmediction.minflexview}>
          <View style={Hospitalmediction.minviewsigninscreen}>
            <View
              style={[
                Hospitalmediction.setbgcolorred,
                {backgroundColor: colorrdata},
              ]}
            />
            <View style={Hospitalmediction.flexinputstyle}>
              <View style={Hospitalmediction.flextextinput}>
                <TouchableOpacity>
                  <Icon name="search1" size={20} color={'#4F4F4F'} />
                </TouchableOpacity>
                <TextInput
                  value={searchInput}
                  onChangeText={handleSearchChange}
                  placeholder="Search Medicine"
                  placeholderTextColor={'lightgrey'}
                  style={Hospitalmediction.setinputtext}
                />
              </View>
              {/* <TouchableOpacity style={Hospitalmediction.seticonborder}>
                <IconF name="filter" size={20} color={'#079D49'} />
              </TouchableOpacity> */}
            </View>
            <View style={Hospitalmediction.setbgcolorviewmin}>
              {loading && page === 1 ? (
                <ActivityIndicator size="large" color={colorrdata} />
              ) : (
                <FlatList
                  ref={flatListRef}
                  data={filteredData}
                  renderItem={({item}) => (
                    <MedicineListItem item={item} colorrdata={colorrdata} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={handleEndReached}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={
                    fetching && page > 1 ? (
                      <ActivityIndicator size="large" color={colorrdata} />
                    ) : null
                  }
                  keyboardShouldPersistTaps="handled"
                  getItemLayout={getItemLayout}
                  extraData={searchQuery}
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HospitalsSMedicinecreen;
