import React from "react";
import { Text, View, StatusBar, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { Hospitalmediction } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign'
import { RouteName } from '../../../routes';
import { Tabletname, HospitalListingdata, } from '../../../utils/Sliderimagedata';
import { useSelector } from "react-redux";
import { ColorTheme } from "../../../utils";
import { ScrollView } from 'react-native-virtualized-view';

const HospitalsSMedicinecreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const Tabletnamedata = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image })}>
        <View style={Hospitalmediction.setbgborderview}>
          <Text style={Hospitalmediction.textHospitalmedictionet}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  const HospitalListingdataitem = (item, index) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
        <View style={Hospitalmediction.setflexviewdata}>
          <View>
            {item.image}
          </View>
          <View style={Hospitalmediction.textflexview}>
            <View style={Hospitalmediction.setflextext}>
              <Text style={[Hospitalmediction.textboldstyle, { color: colorrdata }]}>{item.hospitalname}</Text>
              <Text style={Hospitalmediction.textboldstyletwo}>{item.text}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={Hospitalmediction.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Hospitalmediction.minflexview}>
            <View style={Hospitalmediction.minviewsigninscreen}>
              <View style={[Hospitalmediction.setbgcolorred, { backgroundColor: colorrdata }]}></View>
              <View style={Hospitalmediction.flexinputstyle}>
                <View style={Hospitalmediction.flextextinput}>
                  <TouchableOpacity>
                    <Icon name="search1" size={20} color={ColorTheme.theme_backgound} />
                  </TouchableOpacity>
                  <View>
                    <TextInput
                      placeholder="Search Medicine"
                      placeholderTextColor={'#4F4F4F'}
                      style={Hospitalmediction.setinputtext}
                    />
                  </View>
                </View>
                <TouchableOpacity style={Hospitalmediction.seticonborder}>
                  <IconF name="filter" size={20} color={'#079D49'} />
                </TouchableOpacity>
              </View>
              <View style={[Hospitalmediction.setspacecomeview,{paddingRight: 20}]}>
                <FlatList
                  data={Tabletname}
                  renderItem={({ item, index }) => Tabletnamedata(item, index)}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={Hospitalmediction.setflex}
                  
                />
              </View>
              <View style={Hospitalmediction.bgcolorwhiteset}>
                <FlatList
                  data={HospitalListingdata}
                  renderItem={({ item, index }) => HospitalListingdataitem(item, index)}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default HospitalsSMedicinecreen;
