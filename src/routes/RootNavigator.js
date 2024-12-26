import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, Fonts } from '../utils';
import {
  LoginandRegistrationScreen,
  WelcomePhrmacy,
  LocationHomeOfficeScreen,
  ConformLocation,
  PopularMedicine,
  HospitalsSMedicinecreen,
  ProductItemList,
  ProductDetailesScreen,
  PaymentScreen,
  AllBookMarkScreen,
  CreditCardScreen,
  PaytmSuccessFully,
  RatingScreen,
  EditLocationScreen,
  EditProfileScreen,
  SplashScreen,
  GetstartedSliderscreen,
  DrawerChatScreen,
  DrawerNavigationNotification,
  DrawerSettingsScreen,
  DrawerTrackOrder,
  DrawerNavigationYourOrderScreen,
  OtpVeryfyScreen,
  AddOrderitemScreen,
  CheckOutScreen,
  ForgotPassword,
  OffersTab,
  CartTab,
} from '../screens';
import DrawerHelpScreen from '../screens/Defoltscreen/HelpScreenSet/DrawerHelpScreen';
import { RouteName, TabNavigator } from '../routes';
import { useSelector } from "react-redux";
const Stack = createStackNavigator();
const RootNavigator = (props) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteName.SPLASH_SCREEN}
          component={SplashScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={RouteName.GET_STARTED_SCREEN}
          component={GetstartedSliderscreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={RouteName.LOGIN_AND_REGISTRATION}
          options={{headerShown: false}}
          component={LoginandRegistrationScreen}
        />

        <Stack.Screen
          name={RouteName.WELCOME_SUMANYA}
          options={{headerShown: false}}
          component={WelcomePhrmacy}
        />

        <Stack.Screen
          name={RouteName.LOCATION_HOME_OFFICE_SCREEN}
          options={{headerShown: false}}
          component={LocationHomeOfficeScreen}
        />

        <Stack.Screen
          name={RouteName.CONFORMLOCATION_SET}
          options={{headerShown: false}}
          component={ConformLocation}
        />

        <Stack.Screen
          name={RouteName.HOME_SCREEN}
          options={{headerShown: false}}
          component={TabNavigator}
        />

        <Stack.Screen
          name={RouteName.CART_TAB}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Search',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={CartTab}
        />

        <Stack.Screen
          name={RouteName.NOTIFICATION_SCREEN}
          options={{headerShown: false}}
          component={DrawerNavigationNotification}
        />

        <Stack.Screen
          name={RouteName.PRODUCT_LIST_ITEM}
          options={{
            headerShown: true,
            headerShadowVisible: false,
            title: 'Baby Care',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={ProductItemList}
        />

        <Stack.Screen
          name={RouteName.PRODUCT_DETAILS_SCREEN}
          options={{headerShown: false}}
          component={ProductDetailesScreen}
        />

        <Stack.Screen
          name={RouteName.DRAWER_HELP_SCREEN}
          options={{headerShown: false}}
          component={DrawerHelpScreen}
        />

        <Stack.Screen
          name={RouteName.PAYMENTSCREEN}
          options={{
            headerShadowVisible: false,
            title: 'Manage Payment Methods',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={PaymentScreen}
        />

        <Stack.Screen
          name={RouteName.SETTTING_SCREEN}
          options={{
            headerShown: false,
          }}
          component={DrawerSettingsScreen}
        />

        <Stack.Screen
          name={RouteName.ALL_BOOK_MARK_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'All Bookmarks',

            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontSize: 17,
              fontSize: 20,
              marginLeft: 17,
            },
          }}
          component={AllBookMarkScreen}
        />

        {/* <Stack.Screen name={RouteName.YOUR_ORDER_SCREEN}
          options={{
            headerShadowVisible: false,
            headerShown: false,
            title: null,
            headerTintColor: colors.theme_backgound,

          }}
          component={DrawerNavigationYourOrderScreen} /> */}

        <Stack.Screen
          name={RouteName.YOUR_CHAT}
          options={{headerShown: false}}
          component={DrawerChatScreen}
        />

        <Stack.Screen
          name={RouteName.OTP_VERIFY_SCREEN}
          options={{headerShown: false}}
          component={OtpVeryfyScreen}
        />

        <Stack.Screen
          name={RouteName.ORDER_TAB_SCREEN}
          options={{
            headerShown: true,
            headerTintColor: colorrdata,
            headerShadowVisible: false,
            title: 'Order',
            headerTitleStyle: {
              fontWeight: '700',
              color: colorrdata,
            },
          }}
          component={AddOrderitemScreen}
        />

        <Stack.Screen
          name={RouteName.CHECK_OUT}
          options={{
            headerShown: true,
            headerTintColor: colorrdata,
            headerShadowVisible: false,
            title: 'Confirm Order',
            headerTitleStyle: {
              fontWeight: '700',
              color: colorrdata,
            },
          }}
          component={CheckOutScreen}
        />

        <Stack.Screen
          name={RouteName.CREDIT_CARD_SCREEN_SET}
          options={{
            headerShown: true,
            headerTintColor: colorrdata,
            headerShadowVisible: false,
            title: 'Invoice Collection',
            headerTitleStyle: {
              fontWeight: '700',
              color: colorrdata,
            },
          }}
          component={CreditCardScreen}
        />

        <Stack.Screen
          name={RouteName.PAYMENT_SUCCESSFULLY}
          options={{
            headerShadowVisible: false,
            headerShown: true,
            title: null,
            headerTitleStyle: {
              fontWeight: '700',
            },
          }}
          component={PaytmSuccessFully}
        />

        <Stack.Screen
          name={RouteName.RATING_SCREEN_SET}
          options={{headerShown: false}}
          component={RatingScreen}
        />
        <Stack.Screen
          name={RouteName.OFFERS_TAB}
          options={{
            headerShadowVisible: false,
            title: 'Offers',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={OffersTab}
        />

        <Stack.Screen
          name={RouteName.EDIT_LOCATION_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'SET DELIVERY LOCATION',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={EditLocationScreen}
        />

        <Stack.Screen
          name={RouteName.EDIT_PROFILE_SCREEN}
          options={{
            headerShadowVisible: false,
            title: 'Edit Profile',
            headerTintColor: colorrdata,
            // headerLeft: () => null,
            headerBackTitleVisible: false,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={EditProfileScreen}
        />

        <Stack.Screen
          name={RouteName.FORGET_PASSWORD_SCREEN}
          options={{
            headerShadowVisible: true,
            title: 'Forget Password',
            headerTintColor: colorrdata,
            headerTitleStyle: {
              color: colorrdata,
              fontFamily: Fonts.Metropolis_Medium,
              fontSize: 17,
              fontWeight: '700',
            },
          }}
          component={ForgotPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;