import React from 'react';
import { Text, View, Image, ScrollView, KeyboardAvoidingView, StatusBar, } from "react-native";
import { Addorderitemset } from '../../../styles';
import images from '../../../images';
import { useSelector } from "react-redux";

const AddOrderitemScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <View style={[Addorderitemset.minstyleviewphotograpgy, Addorderitemset.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="hsl(0, 0%, 94.9%)" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={Addorderitemset.minflexview}>
            <View style={Addorderitemset.minviewsigninscreen}>
              <View style={Addorderitemset.trackorderviewwhite}>
                <View style={Addorderitemset.setminviewflex}>
                  <View style={Addorderitemset.setimagewisdth}>
                    <Image style={Addorderitemset.imagesetus} resizeMode='cover' source={images.Docter_tablet_imag} />
                  </View>
                  <View style={Addorderitemset.setviewwoidth70}>
                    <Text style={[Addorderitemset.settextcolor, { color: colorrdata }]}>Garlic Pearl - Natural Way to Healthy Heart & Digestion</Text>
                    <Text style={[Addorderitemset.settextcolortwo]}>Arriving : 19 Aug - 2020</Text>
                  </View>
                </View>
              </View>
              <View style={Addorderitemset.trackorderscreenset}>
                <View style={Addorderitemset.dotviewmin}>
                  <Text style={[Addorderitemset.dotstyle, { backgroundColor: colorrdata }]}></Text>
                  <Text style={[Addorderitemset.setline, { borderColor: colorrdata }]}></Text>
                  <Text style={[Addorderitemset.dotstyle, { backgroundColor: colorrdata }]}></Text>
                  <Text style={Addorderitemset.setlinetwo}></Text>
                  <Text style={Addorderitemset.dotstyletwo}></Text>
                  <Text style={Addorderitemset.setlinetwo}></Text>
                  <Text style={Addorderitemset.dotstyletwo}></Text>
                </View>
                <View>
                  <Text style={[Addorderitemset.settextcolor, { color: colorrdata }]}>Order Confirmed</Text>
                  <Text style={[Addorderitemset.settextcolorthree]}>Wed,19 Aug 2022</Text>
                  <View style={Addorderitemset.topspaceminview}>
                    <Text style={[Addorderitemset.settextcolor, { color: colorrdata }]}>Shipped</Text>
                    <Text style={[Addorderitemset.settextcolorthree]}>Fri,19th Aug 2022</Text>
                  </View>
                  <View style={Addorderitemset.topspaceminviewtwo}>
                    <Text style={[Addorderitemset.settextcolor, { color: colorrdata }]}>Order Dispatch</Text>
                    <Text style={[Addorderitemset.settextcolorthree]}>Sat,22 Aug 2022</Text>
                  </View>
                  <View style={Addorderitemset.topspaceminviewthree}>
                    <Text style={[Addorderitemset.settextcolor, { color: colorrdata }]}>Delivery Expeted By Mon 24th Aug</Text>
                    <Text style={[Addorderitemset.settextcolorthree]}>Mon,22 Aug 2022</Text>
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
export default AddOrderitemScreen;
