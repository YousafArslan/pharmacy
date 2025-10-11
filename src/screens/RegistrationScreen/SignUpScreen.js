import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, registerAction } from '../../redux/auth/auth.slice';
import { useToast } from 'react-native-toast-notifications';

const SignUpScreen = ({ switchToLogin }) => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const auth = useSelector(state => state.auth) || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const [dist_id, setDistId] = useState('');
  const [username, setUsername] = useState('');
  const [distIdError, setDistIdError] = useState(0);
  const [usernameError, setUsernameError] = useState(0);
  const [displayAlert, setDisplayAlert] = useState(0);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isActivateLoading, setIsActivateLoading] = useState(false);
  const [previousValues, setPreviousValues] = useState({ username: '', dist_id: '' });

  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
    loadStoredValues();
  }, [navigation]);

  const loadStoredValues = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('signup_username');
      const storedDistId = await AsyncStorage.getItem('signup_dist_id');

      if (storedUsername) {
        setUsername(storedUsername);
        setPreviousValues(prev => ({ ...prev, username: storedUsername }));
      }
      if (storedDistId) {
        setDistId(storedDistId);
        setPreviousValues(prev => ({ ...prev, dist_id: storedDistId }));
      }
    } catch (error) {
      console.error('Error loading stored values:', error);
    }
  };

  const signupbutton = async () => {
    if (!dist_id.trim()) {
      setDistIdError(1);
      return;
    }
    if (!username.trim()) {
      setUsernameError(1);
      return;
    }

    // Check if values have changed
    if (previousValues.username === username.trim() && previousValues.dist_id === dist_id.trim()) {
      toast.show("PIN already generated for these credentials", {
        type: 'info',
        placement: 'top',
        duration: 2000,
        offset: 10,
        animationType: 'slide-in',
      });
      return;
    }

    setDisplayAlert(1);
    setIsLoading(true);
    try {
      dispatch(
        registerAction({
          values: { username, dist_id },
        })
      );

      // Store values in AsyncStorage after successful API call
      await AsyncStorage.setItem('signup_username', username.trim());
      await AsyncStorage.setItem('signup_dist_id', dist_id.trim());
      setPreviousValues({ username: username.trim(), dist_id: dist_id.trim() });

      toast.show("Account Created! Contact your admin for pin", {
        type: 'success',
        placement: 'top',
        duration: 1000,
        offset: 10,
        animationType: 'slide-in',
      });

    } catch (error) {
      // Handle error (e.g., show error message)
    } finally {
      setIsLoading(false);
    }
  };

  const activatePin = () => {
    if (!pin.trim()) {
      setPinError(1);
      return;
    }
    setPinError(0);
    setIsActivateLoading(true);
    dispatch(
      LoginAction({
        data: {
          username: username.trim(),
          password: pin.trim(),
        },
        moveToNext
      })
    );
  };

  const moveToNext = (message, status) => {
          setIsActivateLoading(false);
          if (status === 'success') {
            toast.show("User is activated", {
              type: 'success',
              placement: 'top',
              duration: 1000,
              offset: 10,
              animationType: 'slide-in',
            });
            if (switchToLogin) {
              switchToLogin();
            }
          } else {
            toast.show(message || "Login failed. Please try again.", {
              type: 'danger',
              placement: 'top',
              duration: 1500,
              offset: 10,
              animationType: 'slide-in',
            });
          }
  }

  return (
    <View style={Login.tabminview}>
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="Customer ID"
          style={Style.inputtextstyle}
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          value={dist_id}
          onChangeText={value => {
            setDistIdError(0);
            setDistId(value);
          }}
        />
      </View>
      {
        distIdError === 1 && (
          <Text style={Login.pleseentername}>* Please Enter Customer ID</Text>
        )
      }
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="User Name"
          style={Style.inputtextstyle}
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          value={username}
          onChangeText={value => {
            setUsernameError(0);
            setUsername(value);
          }}
        />
      </View>
      {usernameError === 1 && (
        <Text style={Login.pleseentername}>* Please Enter User Name</Text>
      )}
      <View style={Login.setbuttonvieLogininup}>
        <Button
          title={isLoading ? "Generating..." : "Generate PIN"}
          onPress={signupbutton}
          disabled={isLoading}
          buttonStyle={{ backgroundColor: colorrdata }}
          buttonTextStyle={Login.textcolorsetwhite}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={Login.alreadyPinText}>Already have a PIN? </Text>
        <Text style={Login.enterHereText}>Enter Here: </Text>
      </View>
      <View style={Style.inputUnderLine}>
        <TextInput
          placeholder="Enter PIN"
          style={Style.inputtextstyle}
          placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
          value={pin}
          onChangeText={value => {
            setPinError(0);
            setPin(value);
          }}
        />
      </View>
      {pinError === 1 && (
        <Text style={Login.pleseentername}>* Please Enter PIN</Text>
      )}
      <View style={Login.setbuttonvieLogininup}>
        <Button
          title="Activate"
          onPress={activatePin}
          loading={isActivateLoading}
          buttonStyle={{ backgroundColor: colorrdata }}
          buttonTextStyle={Login.textcolorsetwhite}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
