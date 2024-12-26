import React, { useRef, useState, useEffect } from "react";
import {View,TouchableOpacity,Image,ScrollView,Dimensions,Text} from "react-native";
import { colors } from '../../utils';
import images from '../../images';
import Styles from '../../styles/Defoltscreenstyle/Orderitemstyle';

const DATA = [
  {
    id: 1,
    title: "20% off upto ₹125",
    subtitle: "USE KOTAK125 | ABOVE RU ₹500",
    image: <Image style={Styles.imagsetstyleslider} resizeMode="cover" source={images.Thirty_Thirty} />
  },
  {
    id: 2,
    title: "50% off upto ₹225",
    subtitle: "USE SWIGGYIT | ABOVE ₹159",
    image: <Image style={Styles.imagsetstyleslider} resizeMode="center" source={images.Thirty_Thirty} />
  },
  {
    id: 3,
    title: "45% off upto ₹275",
    subtitle: "USE RUPAYBASH | ABOVE ₹299",
    image: <Image style={Styles.imagsetstyleslider} resizeMode="cover" source={images.Thirty_Thirty} />
  },
];
const defaults = {
  height: 'auto',
  width: Dimensions.get("window").width,
  delay: 5000,
};

// Default Image Item
const Item = ({ title, image, height, width, onPress, subtitle }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[Styles.imageContainer, { height: height, width: width }]}
  >
    <View style={Styles.setviewsliderflex}>
      <View>
        {image}
      </View>
      <View style={Styles.titleContainer}>
        {title && <Text style={Styles.title}>{title} </Text>}
        {subtitle && <Text style={Styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  </TouchableOpacity>
);

// Default On Press Action
const handlePress = (item) => {
  console.log("Pressed", item.id);
};

// Carousal Component
export default function Carousal({
  data = DATA,
  height = defaults.height,
  width = defaults.width,
  delay = defaults.delay,
  onPress = handlePress,
  ItemElement = Item,
}) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const scrollView = useRef();

  // Script which will only executed when component initilizes
  useEffect(() => {
    const fn = setInterval(() => {
      setselectedIndex((oldCount) =>
        oldCount === data.length - 1 ? 0 : oldCount + 1
      );
    }, delay);
    return () => {
      clearInterval(fn);
    };
  }, []);

  // Script will executed every time selectedIndex updates
  useEffect(() => {
    scrollView.current.scrollTo({
      animated: true,
      x: width * selectedIndex,
      y: 0,
    });
  }, [selectedIndex]);

  const setIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    setselectedIndex(Math.floor(contentOffset.x / viewSize.width));
  };

  return (
    <View>
      <View style={Styles.setdotbgcolorview}>
        <ScrollView
          ref={scrollView}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={setIndex}
          onContentSizeChange={() => scrollView.current.scrollToEnd()}
        >
          <View style={Styles.carousalContainer}>
            {data.map((item) => (
              <ItemElement
                key={item.id}
                height={height}
                width={width}
                {...item}
                onPress={() => onPress(item)}
              />
            ))}
          </View>
        </ScrollView>
        <View style={Styles.minviewswtdotstyle}>
          {DATA.map((val, key) => (
            <View>
              <Text
                key={key}
                style={key === selectedIndex ? { color: colors.theme_backgound, marginLeft: 5 } : { color: '#888', marginLeft: 5, }}>
                ⬤
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
