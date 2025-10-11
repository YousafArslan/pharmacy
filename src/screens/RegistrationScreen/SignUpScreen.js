import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Login, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useDispatch } from 'react-redux';
import { loginUser, registerUser, clearAuthState } from '../../redux/auth/auth.slice';
import { useAuth, useCommon } from '../../redux/hooks/useRedux';
import { useToast } from 'react-native-toast-notifications';

const SignUpScreen = ({ switchToLogin }) => {
  const { colorrdata } = useCommon();
  const { register, login, isLoggedIn } = useAuth();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const toast = useToast();

  const [dist_id, setDistId] = useState('');
  const [username, setUsername] = useState('');
  const [distIdError, setDistIdError] = useState(0);
  const [usernameError, setUsernameError] = useState(0);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(0);
  const [previousValues, setPreviousValues] = useState({ username: '', dist_id: '' });

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(clearAuthState());
    });
    loadStoredValues();
    return unsubscribe;
  }, [navigation, dispatch]);

  // Handle successful activation/login
  useEffect(() => {
    if (isLoggedIn && login.data) {
      toast.show('User is activated', {
        type: 'success',
        placement: 'top',
        duration: 1000,
        offset: 10,
        animationType: 'slide-in',
      });
      if (switchToLogin) {
        switchToLogin();
      }
      dispatch(clearAuthState());
    }
  }, [isLoggedIn, login.data, switchToLogin, toast, dispatch]);

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
      toast.show('PIN already generated for these credentials', {
        type: 'info',
        placement: 'top',
        duration: 2000,
        offset: 10,
        animationType: 'slide-in',
      });
      return;
    }

    try {
      await dispatch(
        registerUser({ username, dist_id })
      ).unwrap();

      // Store values in AsyncStorage after successful API call
      await AsyncStorage.setItem('signup_username', username.trim());
      await AsyncStorage.setItem('signup_dist_id', dist_id.trim());
      setPreviousValues({ username: username.trim(), dist_id: dist_id.trim() });

      toast.show('Account Created! Contact your admin for pin', {
        type: 'success',
        placement: 'top',
        duration: 1000,
        offset: 10,
        animationType: 'slide-in',
      });
    } catch (error) {
      toast.show(error || 'Registration failed. Please try again.', {
        type: 'danger',
        placement: 'top',
        duration: 1500,
        offset: 10,
        animationType: 'slide-in',
      });
    }
  };

  const activatePin = async () => {
    if (!pin.trim()) {
      setPinError(1);
      return;
    }
    setPinError(0);

    try {
      await dispatch(
        loginUser({
          username: username.trim(),
          password: pin.trim(),
        })
      ).unwrap();
      // Success is handled by useEffect above
    } catch (error) {
      toast.show(error || 'Activation failed. Please try again.', {
        type: 'danger',
        placement: 'top',
        duration: 1500,
        offset: 10,
        animationType: 'slide-in',
      });
    }
  };

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
          editable={!register.loading && !login.loading}
        />
      </View>
      {distIdError === 1 && (
        <Text style={Login.pleseentername}>* Please Enter Customer ID</Text>
      )}
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
          editable={!register.loading && !login.loading}
        />
      </View>
      {usernameError === 1 && (
        <Text style={Login.pleseentername}>* Please Enter User Name</Text>
      )}

      {/* Show registration error */}
      {register.error && (
        <Text style={[Login.pleseentername, { marginTop: 10 }]}>
          {register.error}
        </Text>
      )}

      <View style={Login.setbuttonvieLogininup}>
        <Button
          title={register.loading ? 'Generating...' : 'Generate PIN'}
          onPress={signupbutton}
          disabled={register.loading || login.loading}
          loading={register.loading}
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
          editable={!register.loading && !login.loading}
        />
      </View>
      {pinError === 1 && (
        <Text style={Login.pleseentername}>* Please Enter PIN</Text>
      )}

      {/* Show login/activation error */}
      {login.error && (
        <Text style={[Login.pleseentername, { marginTop: 10 }]}>
          {login.error}
        </Text>
      )}

      <View style={Login.setbuttonvieLogininup}>
        <Button
          title="Activate"
          onPress={activatePin}
          loading={login.loading}
          disabled={register.loading || login.loading}
          buttonStyle={{ backgroundColor: colorrdata }}
          buttonTextStyle={Login.textcolorsetwhite}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
