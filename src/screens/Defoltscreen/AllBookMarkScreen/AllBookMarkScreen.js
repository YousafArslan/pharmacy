import React, { useState } from "react";
import { Text, View, StatusBar, FlatList, Modal, KeyboardAvoidingView, TouchableOpacity, } from "react-native";
import { AllBookMarkStyle } from '../../../styles';
import { useNavigation } from '@react-navigation/native';
import IconF from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import { useTogglePasswordVisibility } from '../../../utils';
import { useSelector } from "react-redux";
import { ScrollView } from 'react-native-virtualized-view';

const AllBookMarkScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [sleact, setsleact] = useState('')

  const { bookmarkicon, bookmarkseticon } =
    useTogglePasswordVisibility();
  const [statelist] = useState([
    {
      "id": 1,
      "textsimple": 'Andhra Pradesh',
    },
    {
      "id": 2,
      "textsimple": 'Arunachal Pradesh',
    },
    {
      "id": 3,
      "textsimple": 'Assam',
    },
    {
      "id": 1,
      "textsimple": 'Bihar',
    },
    {
      "id": 4,
      "textsimple": 'Chhattisgarh',
    },
    {
      "id": 5,
      "textsimple": 'Goa',
    },
    {
      "id": 6,
      "textsimple": 'Gujarat',
    },
    {
      "id": 7,
      "textsimple": 'Haryana',
    },
    {
      "id": 8,
      "textsimple": 'Himachal Pradesh',
    },
    {
      "id": 9,
      "textsimple": 'Karnataka',
    },
    {
      "id": 10,
      "textsimple": 'Kerala',
    },
    {
      "id": 11,
      "textsimple": 'Madhya Pradesh',
    },
    {
      "id": 12,
      "textsimple": 'Maharashtra',
    },
    {
      "id": 13,
      "textsimple": 'Manipur',
    },
    {
      "id": 14,
      "textsimple": 'Meghalaya',
    },
    {
      "id": 15,
      "textsimple": 'Mizoram',
    },
    {
      "id": 16,
      "textsimple": 'Nagaland',
    },
    {
      "id": 17,
      "textsimple": 'Odisha',
    },
    {
      "id": 18,
      "textsimple": 'Punjab',
    },
    {
      "id": 19,
      "textsimple": 'Rajasthan',
    },
  ])

  const Statelistdata = (item, index) => {
    return (
      <TouchableOpacity onPress={() => { setsleact(item.textsimple); setModalVisible(!modalVisible); }}>
        <View style={AllBookMarkStyle.descountbox}>
          <Text style={[AllBookMarkStyle.simplestatetext, { borderBottomColor: colorrdata }]}>{item.textsimple}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={AllBookMarkStyle.minstyleviewphotograpgy}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <KeyboardAvoidingView enabled>
          <View style={AllBookMarkStyle.minflexview}>
            <View style={AllBookMarkStyle.minviewsigninscreen}>
              <View>
                <TouchableOpacity onPress={bookmarkseticon} style={AllBookMarkStyle.flexixconview}>
                  <TouchableOpacity onPress={bookmarkseticon}>
                    <IconF name={bookmarkicon} size={22} color={colorrdata} />
                  </TouchableOpacity>
                  <Text style={AllBookMarkStyle.nothingheretext}>Nothing here yet...</Text>
                </TouchableOpacity>
                <Text style={AllBookMarkStyle.nothingheretexttwo}>Add Your Favourite Places</Text>
                <TouchableOpacity style={AllBookMarkStyle.flexiconset} onPress={() => setModalVisible(true)}>
                  <Icon name="pluscircle" size={22} color={'black'} />
                </TouchableOpacity>
                {sleact === '' ?
                  <Text style={[AllBookMarkStyle.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>Add a Places</Text>
                  :
                  <Text style={[AllBookMarkStyle.addplacestextset, { borderBottomColor: colorrdata, color: colorrdata }]}>{sleact}</Text>
                }
              </View>
              <View style={AllBookMarkStyle.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                >
                  <View style={AllBookMarkStyle.centeredViewtwo}>
                    <View style={AllBookMarkStyle.modalView}>
                      <FlatList
                        data={statelist}
                        renderItem={({ item, index }) => Statelistdata(item, index)}
                        keyExtractor={item => item.id}
                        style={AllBookMarkStyle.setflex}
                      />
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AllBookMarkScreen;
