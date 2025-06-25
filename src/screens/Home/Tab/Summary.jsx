import React, {useEffect, useState} from 'react';
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
import { YourOrderScreenStyle} from '../../../styles';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { GetDssByIDAction } from '../../../redux/dss/dss.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Summary = props => {
  const {navigation} = props;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const authReducer = useSelector(state=> state)
  console.log("authReducer",authReducer)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let userJSON = await AsyncStorage.getItem('user');
        let user = JSON.parse(userJSON);
        dispatch(GetDssByIDAction({data:user}))
        const response = await axios.get(
          'https://im-quirky.com/api/dss/D307',
        );
        if(response.status === 200 && response.data?.length===0){
          setError("No summaries found for today");
        }else{
          setData(response.data); // Update state with the response
        }
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  //Adding commit to merge

  const orderDataitem = (item, index, navigation) => {
    return (
      <View>
        <View style={SummaryStyle.yoreorderstylebox}>
          <View style={SummaryStyle.borderbottomview}>
            <View style={SummaryStyle.flexminviewset}>
              <View style={SummaryStyle.flexrowsettext}>
                <View>
                  {/* <Image
                    style={Style.yourorderdata}
                    resizeMode="cover"
                    source={images.Docter_tablet_imag}
                  /> */}
                </View>
                <View style={SummaryStyle.priceflextext}>
                  <TouchableOpacity
                    style={YourOrderScreenStyle.setwidth70}
                    disabled={item?.dss_status === 1}
                    onPress={() => {
                      navigation.navigate(RouteName.SUMMARY_INVOICE,{ id: item.dist_id })
                    }
                      
                    }>
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
              <Text style={SummaryStyle.blacktitle}>{item.dss_status === 0 ? "In Progress" : "Completed"}</Text>
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
             
                {loading && <Text>Loading...</Text>}
                {error && <View style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 600 // or use flexGrow: 1 in contentContainerStyle
  }}>
                <Icon name="file-search" size={100} color={'#D7D6D6'} /> 
                <Text>{error}</Text>
                </View>}
                {data && (
                  <FlatList
                    data={data}
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
