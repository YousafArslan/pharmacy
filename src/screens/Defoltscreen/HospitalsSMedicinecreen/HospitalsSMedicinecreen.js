import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
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
import {Hospitalmediction} from '../../../styles'; // Ensure this has relevant styling
import apiBaseUrl from '../../../utils/api';

const HospitalsSMedicinecreen = () => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [data, setData] = useState([]); // Store the items fetched from the API
  const [loading, setLoading] = useState(false); // Loading state to control the spinner
  const [searchInput, setSearchInput] = useState(''); // For search input
  const [searchData, setSearchData] = useState(''); // Debounced search query
  const [page, setPage] = useState(1); // Track current page number
  const [hasMore, setHasMore] = useState(true); // To handle if more items are available
  const [fetching, setFetching] = useState(false); // To prevent multiple fetches
  const flatListRef = useRef(null); // Reference to the FlatList for scroll position

  // Fetch data with pagination
  const fetchData = async () => {
    if (fetching) return; // Prevent fetching if already fetching
    setFetching(true);
    setLoading(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/items`, {
        params: {
          page: page,
          limit: 10, // Adjust the limit based on your requirement
        },
      });
      const newItems = response.data || [];
      if (newItems.length < 10) {
        setHasMore(false); // No more items to load
      }
      setData(prevData => [...prevData, ...newItems]); // Append new items to the list
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setFetching(false);
    }
  };

  // Trigger data fetch on component mount or when the page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  // Debounced search handling
  const debouncedSetSearchData = useCallback(
    debounce(text => {
      setSearchData(text);
    }, 500),
    [],
  );

  const handleSearchChange = text => {
    setSearchInput(text);
    debouncedSetSearchData(text);
  };

  useEffect(() => {
    return () => {
      debouncedSetSearchData.cancel();
    };
  }, [debouncedSetSearchData]);

  // Render individual items
  const RenderItems = memo(({item}) => (
    <View
      style={[
        Hospitalmediction.setflexviewdata,
        Hospitalmediction.searchtextlist,
      ]}>
      <View style={Hospitalmediction.textflexview}>
        <View style={Hospitalmediction.setflextext}>
          <Text style={[Hospitalmediction.textboldstyle, {color: colorrdata}]}>
            {item.item_name}
          </Text>
          <Text style={Hospitalmediction.textboldstyletwo}>
            <Text style={{fontWeight: 'bold'}}>Company:</Text>{' '}
            {item.company_name}
          </Text>
          <Text style={Hospitalmediction.textboldstyletwo}>
            <Text style={{fontWeight: 'bold'}}>Group:</Text> {item.group_name}
          </Text>
        </View>
      </View>
    </View>
  ));

  // Handle when user reaches the end of the list for pagination
  const handleEndReached = () => {
    if (hasMore && !fetching) {
      setPage(prevPage => prevPage + 1); // Load next page
    }
  };

  // Get item layout for better performance
  const getItemLayout = (data, index) => ({
    length: 60, // Set the height of each item (adjust this based on your item's height)
    offset: 60 * index, // The distance between each item
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
              <TouchableOpacity style={Hospitalmediction.seticonborder}>
                <IconF name="filter" size={20} color={'#079D49'} />
              </TouchableOpacity>
            </View>
            <View style={Hospitalmediction.setbgcolorviewmin}>
              {loading ? (
                <ActivityIndicator size="large" color={colorrdata} />
              ) : (
                <FlatList
                  ref={flatListRef} // Reference for scroll position
                  data={data.filter(item =>
                    item.item_name
                      .toLowerCase()
                      .includes(searchData.toLowerCase()),
                  )}
                  renderItem={({item}) => <RenderItems item={item} />}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReached={handleEndReached} // Trigger when reaching the end of the list
                  onEndReachedThreshold={0.1} // Trigger event 10% before the end
                  ListFooterComponent={
                    fetching ? (
                      <ActivityIndicator size="large" color={colorrdata} />
                    ) : null
                  }
                  keyboardShouldPersistTaps="handled"
                  getItemLayout={getItemLayout} // Add getItemLayout for performance
                  extraData={searchData} // Add searchData to extraData to control re-renders
                  initialScrollIndex={data.length - 1} // Scroll to the last loaded item
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
