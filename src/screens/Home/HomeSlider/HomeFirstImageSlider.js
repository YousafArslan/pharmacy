import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Styles from '../../../styles/HomeScreenStyle';
import { carouselItems } from '../../../utils/Sliderimagedata';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { RouteName } from '../../../routes';
import { colors } from '../../../utils';
import { useSelector } from "react-redux";

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const SLIDER_WIDTH = viewportWidth;
export const ITEM_WIDTH = slideWidth + itemHorizontalMargin * 8;

const entryBorderRadius = 8;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

const App = ({ _slider1Ref }) => {

  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={Styles.minviewfunction} onPress={() => navigation.navigate(RouteName.PRODUCT_LIST_ITEM)}>
        {index === 0 || index === 2 ?
          <LinearGradient
            start={{ x: 0.0, y: 3.25 }} end={{ x: 0.5, y: 0.0 }}
            colors={[colors.theme_backgound, colors.theme_backgound]} style={Styles.linearGradient}>
            <View style={Styles.flexrowimagandtext}>
              <Text style={Styles.textContainer}>{item.title}</Text>
              <Text style={Styles.textContainertwo}>{item.paregraphtitle}</Text>
              <Text style={Styles.textbottomparegraph}>{item.bottomtext}</Text>
              <Text style={Styles.textbottomparegraphTWO}>{item.imagbottomtext} </Text>
              <View style={Styles.imagecenyer}>{item.imge}</View>
            </View>
          </LinearGradient>
          :
          <LinearGradient
            start={{ x: 0.0, y: 3.25 }} end={{ x: 0.5, y: 0.0 }}
            colors={['#6AF0E0', '#51B698']} style={Styles.linearGradient}>
            <View style={Styles.flexrowimagandtext}>
              <Text style={Styles.textContainer}>{item.title}</Text>
              <Text style={Styles.textContainertwo}>{item.paregraphtitle}</Text>
              <Text style={Styles.textbottomparegraph}>{item.bottomtext}</Text>
              <Text style={Styles.textbottomparegraphTWO}>{item.imagbottomtext} </Text>
              <View style={Styles.imagecenyer}>{item.imge}</View>
            </View>
          </LinearGradient>
        }
      </TouchableOpacity>
    );
  };

  return (
    <View style={[Styles.exampleContainer, Styles.bgcolorset]}>
      <Carousel
        ref={c => _slider1Ref = c}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={Styles.slider}
        contentContainerCustomStyle={Styles.sliderContentContainer}
        loop={false}
        loopClonesPerSide={3}
        enableSnap={true}
        // enableMomentum={false}
        autoplay={false}
        autoplayDelay={500}
        autoplayInterval={3000}
        onSnapToItem={index => setIndex(index)}
      />
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={index}
        carouselRef={c => _slider1Ref = c}
        containerStyle={Styles.paginationContainer}
        dotColor={colorrdata}
        dotStyle={Styles.paginationDot}
        inactiveDotStyle={Styles.setdotactive}
        inactiveDotColor={colorrdata}
        inactiveDotOpacity={1}
        enableSnap={true}
        dotOpacity={0.5}
      />
    </View>
  );
};

export default App;