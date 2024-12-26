import React from 'react';
import { Text, View, Image, KeyboardAvoidingView, FlatList, StatusBar, TouchableOpacity, } from "react-native";
import {OffersTabStyle} from '../../../styles';
import images from '../../../images';
import Icon from 'react-native-vector-icons/AntDesign';
import {RouteName} from '../../../routes';
import { useNavigation } from '@react-navigation/native';
import {FastPharmacyOfferTab} from '../../../utils/Sliderimagedata';
import { useSelector } from "react-redux";
import {SearchHeaderScreen} from '../../../screens';
import { ScrollView } from 'react-native-virtualized-view';

const OffersTab = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const Largediscount = () => {
    navigation.navigate(RouteName.PRODUCT_LIST_ITEM);
  }
  const FastPharmacyOfferTabdata = (item, index) => {
    return (
      <TouchableOpacity onPress={() => Largediscount()} style={{ ...OffersTabStyle.setsinglebox, backgroundColor: item.backgroundColor }}>
        <View>
          <View >
            <View>
              <View style={OffersTabStyle.flextocenterimage}>{item.image}</View>
              <Text style={OffersTabStyle.usertextstyle}>{item.title}</Text>
              <Text style={OffersTabStyle.testalignwhite}>{item.settext}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={OffersTabStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={OffersTabStyle.minflexview}>
            <View style={OffersTabStyle.minviewsigninscreen}>
             <SearchHeaderScreen />
              <View style={OffersTabStyle.setwidthfullset}>
                <Text style={OffersTabStyle.settextviewtitle}>Happy Deals</Text>
                <Text style={OffersTabStyle.textstylerelish}>Release a big being with our biggest offers</Text>
                <View style={[OffersTabStyle.setwhiteboxviewtwo,{backgroundColor:colorrdata}]}>
                <Text style={OffersTabStyle.twxtstylewhite}>Rescued Pharmacy</Text>
                  <View style={OffersTabStyle.setwhiteboxview}>
                  <View style={OffersTabStyle.setwidthfifty}>
                    <Text style={OffersTabStyle.savingtextstyle}>Saving Pharmacy and hunger.</Text>
                    <Text style={OffersTabStyle.paregraphtextstyule}>The city council authorized a study that confirmed the lack of hospital facilities locally.</Text>
                  </View>
                  <View>
                    <Image style={OffersTabStyle.settrestyele} resizeMode='cover' source={images.one_hundred_thirty} />
                  </View>
                  </View>
                </View>
                <View style={OffersTabStyle.flexrtowsetbox}>
                  <View style={OffersTabStyle.largwhiteboxone}>
                    <Text style={OffersTabStyle.largetextOffersTabStyleet}>LARGE DISCOUNT</Text>
                    <Text style={OffersTabStyle.settextupto}>Upto <Text style={OffersTabStyle.digittextstyleline}>₹12o Off</Text></Text>
                    <Text style={OffersTabStyle.noupperlimittext}>No Upper limit!</Text>
                    <TouchableOpacity onPress={() => Largediscount()} style={OffersTabStyle.setbgcolorican}>
                      <Icon name="right" size={13} color={'#4F4F4F'} />
                    </TouchableOpacity>
                    <View style={OffersTabStyle.flexendimage} >
                      <Image style={OffersTabStyle.setboxinimage} resizeMode='cover' source={images.Docter_tablet_imag} />
                    </View>
                  </View>
                  <View style={OffersTabStyle.largwhiteboxtwo}>
                    <Text style={OffersTabStyle.largetextOffersTabStyleet}>Try New</Text>
                    <Text style={OffersTabStyle.settextupto}>Saving Pharmacy and hunger.</Text>
                    <TouchableOpacity onPress={() => Largediscount()} style={OffersTabStyle.setbgcoloricantwo}>
                      <Icon name="right" size={13} color={'#4F4F4F'} />
                    </TouchableOpacity>
                    <View style={OffersTabStyle.flexendimage} >
                      <Image style={OffersTabStyle.setboxinimage} resizeMode='cover' source={images.Docter_tablet_imag} />
                    </View>
                  </View>
                </View>
                <View style={OffersTabStyle.setviewspacetext}>
                  <Text style={OffersTabStyle.settextviewtitle}>Exclusively on Fast Pharmacy</Text>
                  <Text style={OffersTabStyle.textstylerelish}>Deal-icious offers from top brands!</Text>
                </View>
              </View>
              <View>
                <FlatList
                  data={FastPharmacyOfferTab}
                  renderItem={({ item, index }) => FastPharmacyOfferTabdata(item, index)}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={OffersTabStyle.flatelistGrid}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default OffersTab;
