import React, { useState } from "react";
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { Colorpicker } from '../../styles';
import { color_picker_set_action } from "../../redux/action/CommonAction";
import { useDispatch, useSelector } from "react-redux";
import { Button } from '../../components';
import images from "../../images";

const ColorPickerset = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { colorrdata } = useSelector(state => state.commonReducer) || { colorrdata };
  const [currentColor, setCurrentColor] = useState(colorrdata);
  const dispatch = useDispatch();
  const onColorChange = (selectedColor) => {
    setCurrentColor(selectedColor);
    dispatch(color_picker_set_action(selectedColor))
  };

  return (
    <View>
      <View style={Colorpicker.centeredViewtwo}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={Colorpicker.centeredView}>
            <View style={Colorpicker.modalView}>
              <View style={Colorpicker.setheight}>
                <View
                  style={[
                    { backgroundColor: currentColor, borderRadius: 7 },
                  ]}
                >
                  <Text style={Colorpicker.setcolorwhite}>{currentColor}</Text>
                  <ColorPicker
                    color={currentColor}
                    onColorChange={onColorChange}
                    onColorSelected={'red'}
                    thumbSize={50}
                    noSnap={true}
                    defaultProps={true}
                    row={false}
                    gapSize={0}
                    discreteLength={0}
                    sliderHidden={true}
                    discrete={true}
                  />
                </View>
              </View>
              <View style={Colorpicker.setbuttonwidth}>
                <Button title="ok"
                  buttonStyle={{ backgroundColor: colorrdata, borderColor: colorrdata }}
                  onPress={() => setModalVisible(!modalVisible)}
                  buttonTextStyle={Colorpicker.pickerbtn}
                />
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image style={Colorpicker.colorpickerpickerimagwidth} resizeMode='cover' source={images.Successfully_color_picker_image} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default ColorPickerset;