import React from "react";
import { Text, View, Image, ScrollView, StatusBar,KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import {NotificationStyle} from '../../../styles';
import images from '../../../images';

const NotificationScreen = () => {
  return (
    <View style={[NotificationStyle.minstyleviewphotograpgy, NotificationStyle.bgcolorset]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={NotificationStyle.minflexview}>
            <View style={NotificationStyle.minviewsigninscreen}>
             <TouchableOpacity style={NotificationStyle.flexdiractionrow}>
               {/* <View>
               <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.Docter_tablet_imag} />
               </View> */}
               <View style={NotificationStyle.setparegraphwidth}>
                 <Text style={NotificationStyle.textparegraph}>This is the first notification issued by the Medical Health Services Recruitment Board. Altogether, there are 12,755 vacancies in the Health department.</Text>
               <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
               </View>
             </TouchableOpacity>
             <TouchableOpacity style={NotificationStyle.flexdiractionrowtwo}>
               {/* <View>
               <Image style={NotificationStyle.imagesetus} resizeMode='cover' source={images.Docter_tablet_imag} />
               </View> */}
               <View style={NotificationStyle.setparegraphwidthtwo}>
                 <Text style={NotificationStyle.textparegraph}>AP Doctors Recruitment 2022: Apply for Doctor, Medical Officer, Management Officer Posts and Check details here.</Text>
               <Text style={NotificationStyle.twonavemberscreen}>02 Nov</Text>
               </View>
             </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default NotificationScreen;
