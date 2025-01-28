import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import {
  HomeTab,
  CartTab,
  AccountTab,
  YourOrderScreen,
  HospitalsSMedicinecreen,
  PopularMedicine,
} from '../screens';
import IconP from 'react-native-vector-icons/AntDesign';
import IconO from 'react-native-vector-icons/MaterialIcons';
import IconE from 'react-native-vector-icons/EvilIcons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconJ from 'react-native-vector-icons/Fontisto';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {DrawerStatusContext} from '@react-navigation/drawer';
// import CustomSidebarMenu from '../components/commoncomponets/CustomSidebarMenu';
import Style from '../styles/CommonStyle/Style';
// import HeaderScreenAddresh from '../components/commoncomponets/HeaderScreenAddresh';
import {
  ColorPicker,
  HeaderScreenAddresh,
  CustomSidebarMenu,
} from '../components';
import {useSelector} from 'react-redux';
import {RouteName} from '../routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = AnimatedTabBarNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScsreenTabAll"
      drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen
        name="HomeScsreenTabAll"
        options={{headerShown: false}}
        component={HomeScsreenTabAll}
      />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator screenOptions="screen">
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Homese"
        component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};

  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: 'Sale Summary',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: '700',
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconP
                style={Style.setbariconmarginright}
                name={'menuunfold'}
                color={colorrdata}
                size={30}
              />
            </TouchableOpacity>
          ),
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}
function MyOrderTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="Invoices Lists">
      <Stack.Screen
        name="Invoices Lists"
        component={YourOrderScreen}
        options={{
          title: 'Invoices Lists',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: '700',
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconP
                style={Style.setbariconmarginright}
                name={'menuunfold'}
                color={colorrdata}
                size={30}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CustomerScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="Customers">
      <Stack.Screen
        name="Customers"
        component={PopularMedicine}
        options={{
          title: 'Customers',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: '700',
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconP
                style={Style.setbariconmarginright}
                name={'menuunfold'}
                color={colorrdata}
                size={30}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function CartTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="CartTab">
      <Stack.Screen
        name="CartTab"
        component={CartTab}
        options={{
          title: null,
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: 'white',
            fontWeight: '700',
          },
          headerStyle: {
            backgroundColor: colorrdata,
          },
          headerLeft: () => (
            <View style={Style.flexrowsetaddresh}>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <IconE
                  style={Style.setbariconmarginright}
                  name="navicon"
                  color={'white'}
                  size={35}
                />
              </TouchableOpacity>
              <HeaderScreenAddresh />
            </View>
          ),
          headerRight: () => <ColorPicker />,
        }}
      />
    </Stack.Navigator>
  );
}

function MedicineTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="CartTab">
      <Stack.Screen
        name="MedicineTab"
        component={HospitalsSMedicinecreen}
        options={{
          title: 'Items',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: '700',
          },

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconP
                style={Style.setbariconmarginright}
                name={'menuunfold'}
                color={colorrdata}
                size={30}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function AccountTabScreenStack({navigation}) {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Stack.Navigator initialRouteName="AccountTab">
      <Stack.Screen
        name="AccountTab"
        component={AccountTab}
        options={{
          title: 'Account',
          headerShown: true,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colorrdata,
            fontWeight: '700',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <IconE
                style={Style.setbariconmarginright}
                name="navicon"
                color={colorrdata}
                size={35}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const TabBarIcon = props => {
  return (
    <Icon
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};
const TabBarIcontwo = props => {
  return (
    <IconP
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};
const TabBarIconoffer = props => {
  return (
    <IconO
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};
const TabBarIconorder = props => {
  return (
    <IconM
      name={props.name}
      size={props.size ? props.size : 24}
      color={props.tintColor}
    />
  );
};

const OrderStack = createNativeStackNavigator();

const MyOrderTabScreenStack1 = () => (
  <OrderStack.Navigator>
    <OrderStack.Screen name={RouteName.SUMMARY_INVOICE} component={YourOrderScreen} />
  </OrderStack.Navigator>
);

export function HomeScsreenTabAll() {
  const {colorrdata} = useSelector(state => state.commonReducer) || {};
  return (
    <Tab.Navigator
      initialRouteName="Homes"
      tabBarOptions={{
        activeTintColor: colorrdata,
        inactiveTintColor: '#302F3C',
        activeBackgroundColor: 'white',
      }}>
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.YOUR_ORDER_SCREEN}
        component={MyOrderTabScreenStack1}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIconorder
              focused={focused}
              tintColor={color}
              name="text-box-check-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.POPULAR_SCREEN}
        component={CustomerScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconJ
              style={Style.setbariconmarginright}
              name="persons"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.HOSPITAL_MEDICINE_SCREEN}
        component={MedicineTabScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <IconJ
              name="drug-pack"
              style={Style.setbariconmarginright}
              color={color}
              size={23}
            />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.ACCOUNT_TAB_SET}
        component={AccountTabScreenStack}
        options={{
          tabBarIcon: ({focused, color}) => (
            <TabBarIcon focused={focused} tintColor={color} name="user" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}