import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {SettingsScreen} from '../../../screens';
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
    <Stack.Navigator initialRouteName="SettingsScreen">
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', headerShown: true,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: "700",
            fontSize: 20,
          },
          headerTintColor: colorrdata,
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
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
