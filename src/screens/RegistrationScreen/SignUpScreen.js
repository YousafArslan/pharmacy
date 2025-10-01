import React, { useState, useEffect } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Login, Style } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, registerAction } from '../../redux/auth/auth.slice';
import { useToast } from 'react-native-toast-notifications';

const SignUpScreen = () => {
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
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

  useEffect(() => {
    navigation.addListener('focus', () => {
      setDisplayAlert(0);
    });
  }, [navigation]);

  const signupbutton = async () => {
    if (!dist_id.trim()) {
      setDistIdError(1);
      return;
    }
    if (!username.trim()) {
      setUsernameError(1);
      return;
    }
    setDisplayAlert(1);
    setIsLoading(true);
    try {
      await dispatch(
        registerAction({
          values: { username, dist_id },
        })
      );
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
    setIsLoading(true);
    dispatch(
      LoginAction({
        data: {
          username: username.trim(),
          password: pin.trim(),
        },
        moveToNext: (message, status) => {
          setIsLoading(false);
          if (status === 'success') {
            toast.show(message, {
              type: 'success',
              placement: 'top',
              duration: 1000,
              offset: 10,
              animationType: 'slide-in',
            });
            navigation.navigate(RouteName.HOME_SCREEN);
          } else {
            toast.show('Invalid credentials', {
              type: 'danger',
              placement: 'top',
              duration: 1500,
              offset: 10,
              animationType: 'slide-in',
            });
          }
        },
      })
    );
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
          buttonStyle={{ backgroundColor: colorrdata }}
          buttonTextStyle={Login.textcolorsetwhite}
          disabled={isLoading}
          loading={isLoading} // If your Button supports a loading prop
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
          loading={isLoading}
          buttonStyle={{ backgroundColor: colorrdata }}
          buttonTextStyle={Login.textcolorsetwhite}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;
