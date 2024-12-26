import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DoctoreHelpScreen} from '../../../screens';
import {CustomSidebarMenu} from '../../../components';
import IconE from 'react-native-vector-icons/EvilIcons';
import Styles from '../../../styles/CommonStyle/Style';
import Style from '../../../styles/CommonStyle/Style';
import { useSelector } from "react-redux";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={Styles.dravermarginright}>
      <View style={Styles.hometoggleflexsetview}>
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <IconE style={Style.setbariconmarginright} name="navicon" color={colorrdata} size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
function firstScreenStack({ navigation }) {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="DoctoreHelpScreen">
      <Stack.Screen
        name="DoctoreHelpScreen"
        component={DoctoreHelpScreen}
        options={{
          title: 'Help', headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color:colorrdata,
          },
          headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomSidebarMenu {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}>
      <Drawer.Screen
        name="FirstPage"
        options={{ drawerLabel: 'First page Option', headerShown: false, }}
        component={firstScreenStack} />
    </Drawer.Navigator>
  );
}
export default App;
