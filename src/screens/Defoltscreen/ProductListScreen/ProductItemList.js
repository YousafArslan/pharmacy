import React, { useState } from "react";
import { Text, View, Image, StatusBar, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {ProductitemList} from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { Docterproductdata } from '../../../utils';
import { colors} from '../../../utils';
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { ScrollView } from 'react-native-virtualized-view';

const ProductItemList = () => {
  
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [liked, setLiked] = useState([]);

  const Docterproductdataitem = (item, index) => {
    return (
      <TouchableOpacity style={ProductitemList.bgwhiteboxminviewWrap}>
        <View style={ProductitemList.bgwhiteboxminview}>
          <View style={{
            width: '100%', flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <TouchableOpacity style={ProductitemList.setimageviewstyle} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
              <Image style={ProductitemList.pharamacyimagestyle} resizeMode="contain" source={item.image} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
            <Text style={[ProductitemList.textProductitemListimple, { color: colorrdata }]}>{item.text}</Text>
          </TouchableOpacity>
          <Text style={ProductitemList.settextcolorcenterlist}>{item.hospitalname}</Text>
          <View style={ProductitemList.setflexstadr}>
            {item.ratingsset}
            <Text style={[ProductitemList.setratingtextstyle, { color: colorrdata }]}>{item.ratingtext}</Text>
          </View>
          <View style={ProductitemList.justicenterflexrow}>
            <Text style={ProductitemList.textProductitemListimpletwo}>{pricesymboldata} {item.dolartestproice}</Text>
            <TouchableOpacity style={[ProductitemList.setplusbgcolorset, { backgroundColor: colorrdata }]} onPress={() => navigation.navigate(RouteName.CART_TAB)}>
              <Text>{item.iconplusset}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {              
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
              }
            }}  style={ProductitemList.HeartIconLike}>

            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? 'red' : 'lightgrey' }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={[ProductitemList.minstyleviewphotograpgy, ProductitemList.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.theme_backgound} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ProductitemList.minflexview}>
            <View style={ProductitemList.minviewsigninscreen}>
              <View style={ProductitemList.bgcolorwhiteset}>
                <FlatList
                  data={Docterproductdata}
                  numColumns={2}
                  renderItem={({ item, index }) => Docterproductdataitem(item, index)}
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
export default ProductItemList;
