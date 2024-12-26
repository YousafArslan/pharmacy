import React from "react";
import { Text, View, Image, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, } from "react-native";
import {ChatScreenStyle} from '../../../styles';
import { useSelector } from "react-redux";
import images from '../../../images';
import IconP from 'react-native-vector-icons/FontAwesome5';
import IconL from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/Foundation';

const ChartScreenset = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <View style={ChatScreenStyle.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={ChatScreenStyle.minflexview}>
            <View style={ChatScreenStyle.minviewsigninscreen}>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}>Hi, I'm in need of some medication. Can you deliver it to me?</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:16</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Feb,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Baby_care_imag_six} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>Hi there, yes we can definitely deliver medication to you. Can you please provide me with your address and the name of the medication you need?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:18</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View>
                    <View style={ChatScreenStyle.setimageleftview}>
                      <Image source={images.one_twenty_one_eight} style={ChatScreenStyle.doctoretabletimg} resizeMode={'cover'} />
                    </View>
                  </View>
                </View>
              </View> */}
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}>The address is 123 Main Street, and I need some ibuprofen.</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:21</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Feb,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <View style={ChatScreenStyle.flexminviewrecoding}>
                      <View style={ChatScreenStyle.threeflextextview}>
                        <Text style={ChatScreenStyle.settextstyle}>0.33</Text>
                        <Text style={ChatScreenStyle.setwhitebgcolor}></Text>
                        <Text style={[ChatScreenStyle.setwhitebgcolortwo, { backgroundColor: colorrdata }]}></Text>
                      </View>
                      <View style={ChatScreenStyle.setbgwhiteiconstyle}>
                        <IconP color={colorrdata} name="play" />
                      </View>
                    </View>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:21</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Feb,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Baby_care_imag_six} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>Got it, we'll have that delivered to you within the hour. Is there anything else you need?</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:21</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Baby_care_imag_six} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.setimageleftview}>
                      <Image source={images.one_twenty_one_eight} style={ChatScreenStyle.doctoretabletimg} resizeMode={'cover'} />
                    </View>
                </View>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={[ChatScreenStyle.chartviewsetbgcolor, { backgroundColor: colorrdata }]}>
                    <Text style={ChatScreenStyle.textcolormessage}>That's all for now, thank you.</Text>
                    <Text style={ChatScreenStyle.textcolormessagetwoset}>03:21</Text>
                  </View>
                </View>
                <Text style={ChatScreenStyle.datesndtimecolor}>10 Feb,2022</Text>
              </View>
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucentertwo}>
                  <View style={ChatScreenStyle.leftimage}>
                    <Image source={images.Baby_care_imag_six} style={ChatScreenStyle.seimagstyleendcall} resizeMode={'cover'} />
                  </View>
                  <View style={ChatScreenStyle.messageminviewowner}>
                    <Text style={ChatScreenStyle.textcolormessage}>No problem, have a great day!</Text>
                    <View style={ChatScreenStyle.flexcheckset}>
                      <View>
                        <Text style={ChatScreenStyle.textcolormessagetwosettwo}>03:21</Text>
                      </View>
                      <View style={ChatScreenStyle.setrighticonviewstyle}>
                        <IconL color="white" name="check" />
                        <IconL color="white" style={ChatScreenStyle.seticonpotion} name="check" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View>
                    <View style={ChatScreenStyle.setimageleftview}>
                      <Image source={images.one_twenty_one_eight} style={ChatScreenStyle.doctoretabletimg} resizeMode={'cover'} />
                    </View>
                  </View>
                </View>
              </View> */}
              <View style={ChatScreenStyle.marginbottomsetspace}>
                <View style={ChatScreenStyle.flexrowjucenter}>
                  <View style={ChatScreenStyle.seticonrevirview}>
                    <View style={ChatScreenStyle.leftimagelike}>
                      <IconM name="like" color={'#FFC000'} size={55} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <View style={ChatScreenStyle.postionabsoluteview}>
        <View style={ChatScreenStyle.textmessageview}>
          <View style={ChatScreenStyle.flexrowsetsendmesasagew}>
            <View>
              <TextInput
                style={ChatScreenStyle.textinputborderbottom}
                placeholder="Write a reply..."
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={ChatScreenStyle.flexrowimaginations}>
              <TouchableOpacity>
                <IconP name="grin" size={25} />
              </TouchableOpacity>
              <TouchableOpacity style={ChatScreenStyle.setmarginrightlikeicon}>
                <IconO name="send" color={colorrdata} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ChartScreenset;
