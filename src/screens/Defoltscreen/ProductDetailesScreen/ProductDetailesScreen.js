import React, { useState, useEffect } from "react";
import { Text, View, Image,StatusBar, Modal, FlatList, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {ProductDetailes,Style} from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Entypo';
import IconH from 'react-native-vector-icons/FontAwesome';
import IconC from 'react-native-vector-icons/Ionicons';
import IconL from 'react-native-vector-icons/Feather';
import images from '../../../images';
import { RouteName } from '../../../routes';
import { SH, useTogglePasswordVisibility } from '../../../utils';
import { useSelector, useDispatch } from "react-redux";
import { price_symbol_action } from '../../../redux/action/CommonAction';
import { ScrollView } from 'react-native-virtualized-view';

const ProductDetailesScreen = ({ route }) => {
  const { img , title, hname} = route.params;

  console.log('img', img);
  const [count, setCount] = useState(1);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { doctoreDetaile } = useSelector(state => state.doctorDataReducer) || { doctoreDetaile };
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const dispatch = useDispatch();
  let PriceSymbol = '$';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol));
  }, []);

  const { hearticon, hearticonworthsetthree } =
    useTogglePasswordVisibility();
  const navigation = useNavigation();
  const backarrow = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibletwo, setModalVisibletwo] = useState(false);
  const [sleact, setsleact] = useState('');
  const [hearticonset, sethearticonset] = useState(0)

  const [statelist] = useState([
    {
      "id": 1,
      "textsimple": 'AntiD 300mcg/ml Injection',
    },
    {
      "id": 2,
      "textsimple": 'Acenac-P  Tablet',
    },
    {
      "id": 3,
      "textsimple": 'Ambrodil Syrup',
    },
    {
      "id": 1,
      "textsimple": 'Aldactone 50 Tablet',
    },
    {
      "id": 4,
      "textsimple": 'Ano Metrogyl Cream',
    },
    {
      "id": 5,
      "textsimple": 'Acemiz-S Tablet',
    },
    {
      "id": 6,
      "textsimple": 'Acton-OR Tablet SR',
    },
    {
      "id": 7,
      "textsimple": 'Azeflo Nasal Spray',
    },
    {
      "id": 8,
      "textsimple": 'Ace Proxyvon Tablet',
    },
    {
      "id": 9,
      "textsimple": 'AB Phylline N Tablet',
    },
    {
      "id": 10,
      "textsimple": 'Addnok 0.2mg Tablet',
    },
    {
      "id": 11,
      "textsimple": 'AB-Flo Capsule',
    },
    {
      "id": 12,
      "textsimple": 'Amlopres-AT Tablet',
    },
    {
      "id": 13,
      "textsimple": 'Acenac-MR Tablet',
    },
    {
      "id": 14,
      "textsimple": 'Althrocin 250 Tablet',
    },
    {
      "id": 15,
      "textsimple": 'Ascoril Plus Expectorant',
    },
    {
      "id": 16,
      "textsimple": 'Addnok 0.2mg Tablet',
    },
    {
      "id": 17,
      "textsimple": 'Atorlip-F Tablet',
    },
    {
      "id": 18,
      "textsimple": 'Alupent 10mg Tablet',
    },
    {
      "id": 19,
      "textsimple": 'Ampilox Capsule',
    },
  ])

  const [Fooditemname] = useState([
    {
      "id": 1,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
      "text": 'Ingredients'
    },
    {
      "id": 2,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
    {
      "id": 3,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
    {
      "id": 4,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
    {
      "id": 5,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
    {
      "id": 6,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
    {
      "id": 7,
      "image": <Image style={ProductDetailes.boximage} resizeMode="cover" source={images.Sixty_Fourty} />,
    },
  ])

  const Fooditemdataitem = (item, index) => {
    return (
      <TouchableOpacity>
        <View>
          <View>
            <View>
              {item.image}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  const Statelistdata = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { setsleact(item.textsimple); setModalVisibletwo(!modalVisibletwo); }}>
        <View style={ProductDetailes.descountbox}>
          <Text style={[ProductDetailes.simplestatetext, { borderBottomColor: colorrdata }]}>{item.textsimple}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={ProductDetailes.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor={colorrdata} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={[ProductDetailes.minflexview, ProductDetailes.bgcolorset]} >
            <View style={[ProductDetailes.minviewsigninscreen, ProductDetailes.bgcolorset]}>
              <TouchableOpacity style={ProductDetailes.flrxfireiocnview} onPress={() => navigation.navigate(RouteName.RATING_SCREEN_SET)}>
                <View style={ProductDetailes.setdotflex}>
                  <Text style={ProductDetailes.setbgcolor}></Text>
                  <Text style={ProductDetailes.setbgcolortwo}></Text>
                </View>
                <TouchableOpacity style={ProductDetailes.setdotflex}>
                  <Text style={ProductDetailes.caltextstyle}>4.5</Text>
                  <Text><Icon name="star" color={'white'} size={19} /></Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <View style={[ProductDetailes.setimagestylewidth, { backgroundColor: colorrdata }]}>
                <Image style={ProductDetailes.imagsetstyle} source={img} />
              </View>
              <TouchableOpacity onPress={() => backarrow()} style={Style.settextstyle}>
                <View style={[Style.setbgcolorviewtwoview, { backgroundColor: colorrdata }]}>
                  <Text style={Style.textstyle}>
                    <IconL name="chevrons-left" size={27} color="white" />
                  </Text>
                </View>
              </TouchableOpacity>
              <View style={[ProductDetailes.bgwhiteboxminview, ProductDetailes.bgcolorset]} >            
                <View style={ProductDetailes.bgwhiteboxsmall}>
                  <Text style={ProductDetailes.settextweight}>{title}</Text>
                </View>
                {hearticonset === 0 ?
                  <TouchableOpacity onPress={() => sethearticonset(1)} style={[ProductDetailes.HeartIconLike, Style.setbgcolorborder]}>
                    <IconH name="heart" size={25} color={colorrdata} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onPress={() => sethearticonset(0)} style={[ProductDetailes.HeartIconLike, Style.setbgcolorborder]}>
                    <IconH name="heart-o" size={25} color={colorrdata} />
                  </TouchableOpacity>
                }

                <View style={[ProductDetailes.setallpading, ProductDetailes.bgcolorset]}>
                  <View style={[ProductDetailes.descripitionviewone, ProductDetailes.bgcolorset]}>
                    <Text style={[ProductDetailes.descriptiontextset, { color: colorrdata }]}>Description</Text>
                    <Text style={ProductDetailes.paregraphtextset}>Carbamide Forte Multivitamin with Probiotics & Ashwagandha Tablet.</Text>
                    <View style={ProductDetailes.thretexztflexview}>
                      <View style={ProductDetailes.flexclockandtext}>
                        <Text style={[ProductDetailes.paregraphtextsettwo, { color: colorrdata }]}>{hname}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={[ProductDetailes.descripitionviewtwo, ProductDetailes.bgcolorset]}>
                    <View style={ProductDetailes.borderbottomview}>
                      <Text style={[ProductDetailes.nuteialtext, { color: colorrdata }]}>Nutritional Value</Text>
                      <View style={ProductDetailes.flextextset}>
                        <Text style={ProductDetailes.proteintextset}>Protein</Text>
                        <Text style={ProductDetailes.setdigitaltextview}>2.5g</Text>
                      </View>
                      <View style={ProductDetailes.flextextset}>
                        <Text style={ProductDetailes.proteintextset}>Carbohydrates</Text>
                        <Text style={ProductDetailes.setdigitaltextview}>14.7g</Text>
                      </View>
                      <View style={ProductDetailes.flextextset}>
                        <Text style={ProductDetailes.proteintextset}>Sodium</Text>
                        <Text style={ProductDetailes.setdigitaltextview}>19%*</Text>
                      </View>
                      <View style={ProductDetailes.flextextset}>
                        <Text style={ProductDetailes.proteintextset}>Potassium</Text>
                        <Text style={ProductDetailes.setdigitaltextview}>5%*</Text>
                      </View>
                      <Text style={ProductDetailes.proteintextset}>Rich in Vitamin A, C and B3</Text>
                    </View>
                    <View style={ProductDetailes.thretexztflexviewtwo}>
                      <View style={ProductDetailes.flexclockandtextwo}>
                        <IconF name="local-fire-department" color={'#FE7B5F'} size={14} />
                        <Text style={ProductDetailes.textcolorgray}>145 Cal</Text>
                      </View>
                      <View>
                        <Text style={ProductDetailes.textcolorgraytwo}>*Daily value</Text>
                      </View>
                    </View>
                  </View>
                  <View>
                  </View>
                </View>
                <View style={[ProductDetailes.setwidthbox, ProductDetailes.bgcolorset]}>
                  <View style={ProductDetailes.setboxshadowimage}>
                    <Text style={ProductDetailes.smalltextsetingredients}>Ingredients</Text>
                    <FlatList
                      data={Fooditemname}
                      renderItem={({ item, index }) => Fooditemdataitem(item, index)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                </View>
                <View style={[ProductDetailes.setminviewwidth, ProductDetailes.bgcolorset]}>
                  <Text style={ProductDetailes.additionstextstyletwo}>Additions</Text>
                  <TouchableOpacity style={[ProductDetailes.setdropdownstyle, { borderColor: colorrdata }]} onPress={() => setModalVisibletwo(true)}>
                    {sleact === '' ?
                      <Text style={ProductDetailes.additionstextstyle}>AntiD 300mcg/ml Injection</Text>
                      :
                      <Text style={ProductDetailes.additionstextstyle}>{sleact}</Text>
                    }
                    <IconH name="angle-down" color={colorrdata} size={30} />
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisibletwo}
                  >
                    <View style={ProductDetailes.centeredView}>
                      <TouchableOpacity style={Style.icomvloseselectwrap} onPress={() => setModalVisibletwo(!modalVisibletwo)}>
                        <IconF
                          size={30}
                          name="close"
                          style={Style.icomvloseselect}                   
                        />
                      </TouchableOpacity>
                      <View style={ProductDetailes.modalView}>
                        <TouchableOpacity style={[ProductDetailes.setselectmedicineview, { backgroundColor: colorrdata }]}>
                          <Text style={ProductDetailes.settextstylecolor}>Select medicines</Text>
                        </TouchableOpacity>
                        <FlatList
                          data={statelist}
                          renderItem={({ item, index }) => Statelistdata(item, index)}
                          keyExtractor={item => item.id}
                          style={ProductDetailes.setflex}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={[ProductDetailes.setbgcolorviewtwo, { backgroundColor: colorrdata }]}>
        <TouchableOpacity style={ProductDetailes.setwidthprice}>
          <Text style={ProductDetailes.pricetextsetviewtwo}>{pricesymboldata} {125 * count}</Text>
        </TouchableOpacity>
        <View style={ProductDetailes.plusandminusflexview}>
          <TouchableOpacity onPress={() => { if (count > 1) { setCount(count - 1) } }}>
            <Icon name="minus" size={20} color='white' />
          </TouchableOpacity>
          <Text style={ProductDetailes.pricetextsetview}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Icon name="plus" size={20} color='white' />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={ProductDetailes.setbgcolorwhite} onPress={() => navigation.navigate(RouteName.CART_TAB)}>
            <IconC name="cart" color={'black'} size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailesScreen;
