import React, {useState, useEffect, useCallback, memo} from 'react';
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
import {PopularCuisinesStyle} from '../../../styles';

const PopularMedicine = () => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'http://quirkysofttech.com/Account/QD_GET?pType=QD_CUST_DATA&pParam=D307',
      );
      setData(response.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const RenderCustomers = memo(({item}) => (
    <View
      style={[
        PopularCuisinesStyle.setflexviewdata,
        PopularCuisinesStyle.searchtextlist,
      ]}>
      <View>{item.image}</View>
      <View style={PopularCuisinesStyle.textflexview}>
        <View style={PopularCuisinesStyle.setflextext}>
          <Text style={[PopularCuisinesStyle, {color: colorrdata}]}>
            {item.cust_name}
          </Text>
          <Text style={PopularCuisinesStyle}>
            <Text style={{fontWeight: 'bold'}}>Region:</Text> {item.region_name}
          </Text>
          <Text style={PopularCuisinesStyle}>
            <Text style={{fontWeight: 'bold'}}>Customer Type:</Text>{' '}
            {item.type_name}
          </Text>
        </View>
      </View>
    </View>
  ));

  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <View style={PopularCuisinesStyle.minstyleviewphotograpgy}>
        <View style={PopularCuisinesStyle.minflexview}>
          <View style={PopularCuisinesStyle.minviewsigninscreen}>
            <View
              style={[
                PopularCuisinesStyle.setbgcolorred,
                {backgroundColor: colorrdata},
              ]}
            />
            <View style={PopularCuisinesStyle.flexinputstyle}>
              <View style={PopularCuisinesStyle.flextextinput}>
                <TouchableOpacity>
                  <Icon name="search1" size={20} color={'#4F4F4F'} />
                </TouchableOpacity>
                <TextInput
                  value={searchInput}
                  onChangeText={handleSearchChange}
                  placeholder="Search Pharmacy nearby"
                  placeholderTextColor={'lightgrey'}
                  style={PopularCuisinesStyle.setinputtext}
                />
              </View>
              <TouchableOpacity style={PopularCuisinesStyle.seticonborder}>
                <IconF name="filter" size={20} color={'#079D49'} />
              </TouchableOpacity>
            </View>
            <View style={PopularCuisinesStyle.setbgcolorviewmin}>
              {loading ? (
                <ActivityIndicator size="large" color={colorrdata} />
              ) : (
                <FlatList
                  data={data.filter(item =>
                    item.cust_name
                      .toLowerCase()
                      .includes(searchData.toLowerCase()),
                  )}
                  renderItem={({item}) => <RenderCustomers item={item} />}
                  keyExtractor={(item, index) => index.toString()}
                  keyboardShouldPersistTaps="handled"
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PopularMedicine;
