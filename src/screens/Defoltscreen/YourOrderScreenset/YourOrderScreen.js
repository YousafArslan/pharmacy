import React from "react";
import { Text, View, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {YourOrderScreenStyle} from '../../../styles';
import { yourorderdata } from '../../../utils/Sliderimagedata';
import IconR from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from "react-redux";
import {RouteName} from '../../../routes';
import { ScrollView } from 'react-native-virtualized-view';

const YourOrderScreen = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const {navigation} = props;

  const yourorderdataitem = (item, index) => {
    return (
      <View>
        <View style={YourOrderScreenStyle.yoreorderstylebox}>
          <View style={YourOrderScreenStyle.borderbottomview}>
            <View style={YourOrderScreenStyle.flexminviewset}>
              <View style={YourOrderScreenStyle.flexrowsettext}>
                <View>
                  {item.image}
                </View>
                <View style={YourOrderScreenStyle.priceflextext}>
                  <View style={YourOrderScreenStyle.setwidth70}>
                    <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>{item.vadapavtext}</Text>
                    <Text style={YourOrderScreenStyle.addreshrtext}>{item.sitytext}</Text>
                  </View>
                  <View>
                    <Text style={YourOrderScreenStyle.vadapavtextstyeleset}>{item.price}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={YourOrderScreenStyle.borderbottomviewtwo}>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>{item.items}</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>{item.onevx}</Text>
            </View>
            <View style={YourOrderScreenStyle.setlistdataitems}>
              <Text style={YourOrderScreenStyle.setitemstext}>{item.orderontext}</Text>
              <Text style={YourOrderScreenStyle.blacktitle}>{item.timetextset}</Text>
            </View>
          </View>
          <View style={YourOrderScreenStyle.flexrowsettextrejected}>
            {index === 0 || index === 2 || index === 3 || index === 5 || index === 7?
              <TouchableOpacity style={YourOrderScreenStyle.flexreowdilevry}>
                <Text><IconR name={item.righticon} color={colorrdata} size={25} /></Text>
                <Text style={[YourOrderScreenStyle.rejectedtextstyle, { color: colorrdata }]}>{item.rejectedtext}</Text>
              </TouchableOpacity>
             :null}
              {index === 1 || index === 4 || index === 6 ?
              <TouchableOpacity style={YourOrderScreenStyle.flexreowdilevry}>
                <Text><IconM name={item.righticon} color={'red'} size={25} /></Text>
                <Text style={[YourOrderScreenStyle.rejectedtextstyle, { color: 'red' }]}>{item.rejectedtext}</Text>
              </TouchableOpacity>
             :null}
            <TouchableOpacity style={YourOrderScreenStyle.setflexitemview} onPress={() => navigation.navigate(RouteName.CART_TAB)}>
              <Text>{item.refreshicon}</Text>
              <Text style={YourOrderScreenStyle.rejectedtextstyle}>{item.repeatordertext}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={[YourOrderScreenStyle.minstyleviewphotograpgy, YourOrderScreenStyle.bgcolorset]}>
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
                <FlatList
                  data={yourorderdata}
                  renderItem={({ item, index }) => yourorderdataitem(item, index)}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default YourOrderScreen;
