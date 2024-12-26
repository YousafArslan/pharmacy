import React, { useEffect, useState } from "react";
import { View, Text, FlatList, } from 'react-native';
import Styles from '../../styles/Defoltscreenstyle/PopularCuisinesStyle';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchFilter = ({ data, searchdata, setsearchdata }) => {

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (searchdata === "") {
            return (
              <View style={Styles.flexrowsetsearchicon}>
                <Icon name={item.iconname} size={20} color={'#D7D6D6'} />
                <Text style={Styles.settextdatapizz}>{item.text}</Text>
              </View>
            )
          } else {
            <View style={Styles.setwhiteboxnodatafound}>
              <Text style={Styles.pleseentername}>No Data Found</Text>
            </View>
          }
          if (item.text.toLowerCase().includes(searchdata.toLowerCase()) === true) {
            return (
              <View style={Styles.flexrowsetsearchicon}>
                <Icon name={item.iconname} size={20} color={'#D7D6D6'} />
                <Text style={Styles.settextdatapizz}>{item.text}</Text>
              </View>
            )
          }
          else {
            <View style={Styles.setwhiteboxnodatafound}>
              <Text style={Styles.pleseentername}>No Data Found</Text>
            </View>
          }
        }}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      {/* {seterror === true ?
        <View style={Styles.setwhiteboxnodatafound}>
          <Text style={Styles.pleseentername}>No Data Found</Text>
        </View>
        : null} */}
    </View>
  )
}
export default SearchFilter;