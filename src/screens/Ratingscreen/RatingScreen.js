import React from "react";
import { Text, View, Image, ScrollView, TextInput } from "react-native";
import {Ratingstyle} from '../../styles';
import { Button } from '../../components';
import { Rating } from 'react-native-ratings';
import images from '../../images';
import {RouteName} from '../../routes';
import { useNavigation } from '@react-navigation/native';

const RatingScreen = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = React.useState("");

  return (
    <View style={Ratingstyle.minstyleviewphotograpgytwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <View style={Ratingstyle.keybordtopviewstyle}>
          <View style={Ratingstyle.minflexview}>
            <View style={Ratingstyle.minviewsigninscreen}>
              <View style={Ratingstyle.succefullimgviewsethre}>
                <Image style={Ratingstyle.succefullyimg} resizeMode="contain" source={images.Two_Hundred} />
              </View>
              <Text style={Ratingstyle.accounttexttwo}>Please Rate The Pharmacy!</Text>
              <View style={Ratingstyle.flexrowsetstarsignup}>
                <Rating
                  type='custom'
                  ratingColor='#FFC000'
                  ratingBackgroundColor='#c8c7c8'
                  ratingCount={5}
                  tintColor={'white'}
                  imageSize={35}
                  startingValue={3.5}
                  isDisabled={false}
                  style={{ paddingVertical: 10 }}
                />
              </View>
              <Text style={Ratingstyle.accounttextsuccessfullytwo}>Your Comments and Suggestions help us imprave the service quality better!</Text>
              <View style={Ratingstyle.inputUnderLinereviews}>
                <TextInput
                  style={Ratingstyle.positionsetstyleinput}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Enter Your Comment"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={Ratingstyle.accountbutton}>
                <Button buttonStyle={Ratingstyle.buttonbgcolorset} buttonTextStyle={Ratingstyle.buttontextstyle} title="Submit" onPress={() => navigation.navigate(RouteName.HOME_SCREEN)}></Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default RatingScreen;
