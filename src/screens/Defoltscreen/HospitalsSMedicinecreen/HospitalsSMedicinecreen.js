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
import {Hospitalmediction} from '../../../styles'; // Ensure this has relevant styling

const HospitalsSMedicinecreen = () => {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchData, setSearchData] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'http://quirkysofttech.com/Account/QD_GET?pType=QD_ITEM_DATA&pParam=D307', // Different endpoint
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
            <Text style={{fontWeight: 'bold'}}>Group:</Text>
            {item.group_name}
          </Text>
        </View>
      </View>
    </View>
  ));

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
                  data={data.filter(item =>
                    item.item_name
                      .toLowerCase()
                      .includes(searchData.toLowerCase()),
                  )}
                  renderItem={({item}) => <RenderItems item={item} />}
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

export default HospitalsSMedicinecreen;
