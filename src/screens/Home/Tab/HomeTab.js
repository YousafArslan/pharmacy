import React, { useEffect, useRef, useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, Image, FlatList, StatusBar } from "react-native";
import Styles from '../../../styles/Tab/HometabStyle';
import { RouteName } from '../../../routes';
import { MedicineCategoryHomeTab, MegaMedicine, MedicineFalteList } from '../../../utils/Sliderimagedata';
import { useDispatch } from "react-redux";
import { Button } from '../../../components';
import { get_doctore_category_action } from '../../../redux/action/DoctoreCategoryAction';
import { useSelector } from "react-redux";
import images from '../../../images';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import IconF from 'react-native-vector-icons/dist/FontAwesome';
import { get_doctore_detailes_action } from '../../../redux/action/DoctoreDataAction';
import { price_symbol_action } from '../../../redux/action/CommonAction';
import { HomeFirstImageSlider, SearchHeaderScreen } from '../../../screens';
import { ScrollView } from 'react-native-virtualized-view';

const HomeTabset = (props) => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { pricesymboldata } = useSelector(state => state.commonReducer) || {};
  const [liked, setLiked] = useState([]);
  const [timer, setTimer] = useState(24339); // 25 minutes
  const [start, setStart] = useState(true);
  const tick = useRef();

  let PriceSymbol = '$';

  useEffect(() => {
    dispatch(price_symbol_action(PriceSymbol))
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };
  const dispSecondsAsMins = (value) => {
    const sec = parseInt(value, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds;
  };


  const TodayDeals = [
    {
      "id": 1,
      "image": images.one_twenty_one_fourty,
      "ratingset": images.one_hundred_thirty,
      "text": 'Alerid-D Tablet',
      "hospitalname": 'Humira Pharmacy',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "dolardpricetext": pricesymboldata + ' ' + '130',
      "dolardpricetexttwo": pricesymboldata + ' ' + '150',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 30% Off',
    },
    {
      "id": 2,
      "image": images.one_twenty_one_fourty,
      "ratingset": images.one_hundred_thirty,
      "text": 'Enzoflam Tablet',
      "hospitalname": 'Humira Pharmacy',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "dolardpricetext": pricesymboldata + ' ' + '120',
      "dolardpricetexttwo": pricesymboldata + ' ' + '140',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 25% Off',
      "outofstock": 'Out Of Stock'
    },
    {
      "id": 3,
      "image": images.one_twenty_one_fourty,
      "ratingset": images.one_hundred_thirty,
      "text": 'Gabapin NT Tablet',
      "hospitalname": 'Humira Pharmacy',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "dolardpricetext": pricesymboldata + ' ' + '110',
      "dolardpricetexttwo": pricesymboldata + ' ' + '120',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 45% Off',
    },
    {
      "id": 4,
      "image": images.one_twenty_one_fourty,
      "ratingset": images.one_hundred_thirty,
      "text": 'Gabapin NT Tablet',
      "hospitalname": 'Humira Pharmacy',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "dolardpricetext": pricesymboldata + ' ' + '100',
      "dolardpricetexttwo": pricesymboldata + ' ' + '120',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 20% Off',
      "outofstock": 'Out Of Stock'
    },
    {
      "id": 5,
      "image": images.one_twenty_one_fourty,
      "ratingset": images.one_hundred_thirty,
      "text": 'Gabapin NT Tablet',
      "hospitalname": 'Humira Pharmacy',
      "function": dispSecondsAsMins(timer),
      "rating": <Rating
        type='custom'
        ratingColor='#FFC000'
        ratingBackgroundColor='#c8c7c8'
        ratingCount={5}
        tintColor={'white'}
        imageSize={18}
        startingValue={5}
        isDisabled={false}
        style={{ paddingVertical: 10 }}
      />,
      "dolardpricetext": pricesymboldata + ' ' + '130',
      "dolardpricetexttwo": pricesymboldata + ' ' + '170',
      "dealendtext": 'Deal Ends :',
      "time": '02:53:18',
      "buttonaadtext": 'ADD',
      "offdecount": 'Up to 60% Off',
    },
  ]
  const doctordata = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.CART_TAB)
  }
  const MedicineDeals = (item, index) => {
    return (
      <View style={[Styles.setbgcolorviewtimewrap, Styles.bgcolorset]}>
        <View style={Styles.setbgcolorviewtime}>
          {index === 1 || index === 3 ?
            <View>
              <View style={{ opacity: 0.4 }}>
                <TouchableOpacity style={Styles.flexrowsecenterimage}
                  onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
                  <Image style={Styles.whiteboximage} resizeMode="cover" source={item.image} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { title: item.text, img: item.image, hname: item.hospitalname })}>
                <Text style={[Styles.setnormatextstyle, { color: colorrdata }]}>{item.text}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcenterthree, Styles.settextcolorcenterthreetow]}>{item.hospitalname}</Text>
              <View style={Styles.flexrowjuctycenter}>
                {item.rating}
              </View>
              <View style={Styles.flexrowsettext}>
                <Text style={[Styles.settextprice, { color: colorrdata }]}>{item.dolardpricetext}</Text>
                <Text style={Styles.settextpricetwo}>{item.dolardpricetexttwo}</Text>
              </View>

              <View style={Styles.flexrocenterjusty}>
                <View style={Styles.addbutttonwidth}>
                  <Button onPress={() => doctordata(item)} buttonTextStyle={{ color: 'white' }} buttonStyle={{ height: 35, backgroundColor: colorrdata }} title={item.buttonaadtext} />
                </View>
              </View>
              <View style={[Styles.settextinbgcolor, { opacity: 0.6 }, { backgroundColor: colorrdata }]}>
                <Text style={Styles.setdescounrtextstyle}>{item.offdecount}</Text>
              </View>
              <Text style={Styles.outoftextset}>{item.outofstock}</Text>
            </View>
            :
            <View>
              <TouchableOpacity style={Styles.flexrowsecenterimage} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
                <Image style={Styles.whiteboximage} resizeMode="cover" source={item.image} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
                <Text style={[Styles.setnormatextstyle, { color: colorrdata }]}>{item.text}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcenterthree, Styles.settextcolorcenterthreetow]}>{item.hospitalname}</Text>
              <View style={Styles.flexrowjuctycenter}>
                {item.rating}
              </View>
              <View style={Styles.flexrowsettext}>
                <Text style={[Styles.settextprice, { color: colorrdata }]}>{item.dolardpricetext}</Text>
                <Text style={Styles.settextpricetwo}>{item.dolardpricetexttwo}</Text>
              </View>

              <View style={Styles.flexrocenterjusty}>
                <View style={Styles.addbutttonwidth}>
                  <Button onPress={() => doctordata(item)} buttonTextStyle={{ color: 'white' }} buttonStyle={{ height: 35, backgroundColor: colorrdata }} title={item.buttonaadtext} />
                </View>
              </View>
              <View style={[Styles.settextinbgcolor, { backgroundColor: colorrdata }]}>
                <Text style={Styles.setdescounrtextstyle}>{item.offdecount}</Text>
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
  const doctordatatendingmenu = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.CART_TAB)
  }
  const MegaMedicineStore = (item, index) => {
    return (
      <View>
        <View style={Styles.minbgviewset}>
          <TouchableOpacity style={Styles.imagecengter} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
            <Image style={[Styles.whiteboximagetwoset, Styles.whiteboximagetwosettwo]} resizeMode="cover" source={item.image} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { title: item.text, img: item.image, hname: item.hospitalname })}>
            <Text style={[Styles.settextcolorcenter, { color: colorrdata }]}>{item.text}</Text>
          </TouchableOpacity>
          <Text style={Styles.settextcolorcentertwo}>{item.hospitalname}</Text>
          <View style={Styles.flexrowseticon}>
            <View>
              {item.ratings}
            </View>
          </View>
          <View style={Styles.flexrowseticon}>
            <View>
              <Text style={[Styles.settextpricebold, { color: colorrdata }]}>{pricesymboldata} {item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => doctordatatendingmenu(item)} style={[Styles.seticonbgcolorview, { backgroundColor: colorrdata }]}>
              <IconF name={item.plusicon} size={20} color={'white'} />
            </TouchableOpacity>
          </View>
          <View style={[Styles.settextinbgcolor, { backgroundColor: colorrdata }]}>
            <Text style={Styles.setdescounrtextstyle}>{item.discount}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              if (liked.includes(index)) {
                let unlike = liked.filter((elem) => elem !== index);
                setLiked(unlike);
              } else {
                setLiked([...liked, index]);
              }
            }} style={Styles.HeartIconLike}>

            <Icon
              name="heart"
              size={25}
              style={{ color: liked.includes(index) ? 'red' : 'lightgrey' }}
            />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
  const doctordataset = (docterdata) => {
    dispatch(get_doctore_detailes_action(docterdata))
    navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)
  }
  const MedicineBox = (item) => {
    return (
      <View>
        <View style={Styles.populaitemnearby}>
          <View style={Styles.flexrowtextandimage}>
            <TouchableOpacity style={Styles.setimagewidthsevnty} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
              <Image style={Styles.whiteboximagetwoset} resizeMode="cover" source={item.image} />
            </TouchableOpacity>
            <View style={Styles.setwidthalltext}>
              <TouchableOpacity onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
                <Text style={[Styles.settextpricebold, { color: colorrdata }]} >{item.text}</Text>
              </TouchableOpacity>
              <Text style={[Styles.settextcolorcentertwo]}>{item.hospitalname}</Text>
              <View style={Styles.flexstarticon}>
                {item.ratings}
                <Text style={Styles.ratingtextnumber}>(4.3)</Text>
              </View>
              <View style={Styles.flexrowsetrating}>
                <View style={Styles.dicscounttextflex}>
                  <Text style={[Styles.settextpricebold, { color: colorrdata }]}>{pricesymboldata} 4.57</Text>
                </View>

              </View>
            </View>
            <TouchableOpacity style={Styles.setplusicon} onPress={() => navigation.navigate((RouteName.PRODUCT_DETAILS_SCREEN), { img: item.image, title: item.text, hname: item.hospitalname })}>
              <IconF name={item.plusicon} size={30} color={colorrdata} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  const doctordatacategoryes = (doctordatacategoryes) => {
    dispatch(get_doctore_category_action(doctordatacategoryes))
    navigation.navigate(RouteName.PRODUCT_LIST_ITEM)
  }
  const CategoryListBox = (item) => {
    return (
      <TouchableOpacity onPress={() => doctordatacategoryes(item)}>
        <View style={Styles.flexcenterviewTWO}>
          <View style={Styles.widtsetnew}>
            <View>
              <View style={Styles.imagecenterstyle}>
                {item.image}
              </View>
              <View>
                <Text style={Styles.textsetfood}>{item.text}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={[Styles.minstyleviewphotograpgy, Styles.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Styles.minflexview}>
            <View style={Styles.minviewsigninscreen}>
              {/* componets import */}
              <SearchHeaderScreen />
              <HomeFirstImageSlider />
              {/* componets end */}
              <View style={Styles.marginsetminview}>
                <Text style={[Styles.settopcategoriesnine, { color: colorrdata }]}>Trending Categories</Text>
                <FlatList
                  data={MedicineCategoryHomeTab}
                  renderItem={({ item, index }) => CategoryListBox(item, index)}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={Styles.setflex}
                  contentContainerStyle={{ paddingHorizontal: 20, paddingLeft: 15 }}
                />
                <View>
                  <View style={[Styles.settopmargin, Styles.bgcolorset]}>
                    <Text style={[Styles.settopcategories, Styles.bgcolorset, { color: colorrdata }]}>Deals of the day</Text>
                    <FlatList
                      data={TodayDeals}
                      renderItem={({ item, index }) => MedicineDeals(item, index)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={Styles.setflex}
                      contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                    />
                  </View>
                  <View style={Styles.topspacesetminview}>
                    <Text style={[Styles.settopcategoriestwo, { color: colorrdata }]}>Popular Medicine</Text>
                    <FlatList
                      data={MedicineFalteList}
                      renderItem={({ item, index }) => MedicineBox(item, index)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={Styles.setflex}
                      contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                    />
                  </View>
                  <View style={Styles.topspacesetminview}>
                    <Text style={[Styles.settopcategoriestwo, { color: colorrdata }]}>Trending Store</Text>
                    <FlatList
                      data={MegaMedicine}
                      renderItem={({ item, index }) => MegaMedicineStore(item, index)}
                      keyExtractor={item => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      style={Styles.setflex}
                      contentContainerStyle={{ paddingHorizontal: 20, paddingRight: 10 }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default HomeTabset;
