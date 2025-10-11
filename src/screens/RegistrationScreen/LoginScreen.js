import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Login, Style} from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {useTogglePasswordVisibility} from '../../utils';
import {Button} from '../../components';
import {RouteName} from '../../routes';
import IconG from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {loginUser, clearAuthState} from '../../redux/auth/auth.slice';
import {useAuth, useCommon} from '../../redux/hooks/useRedux';
import {useToast} from 'react-native-toast-notifications';

const LoginScreen = () => {
  const {colorrdata} = useCommon();
  const navigation = useNavigation();
  const [textInputName, setTextInputName] = useState('');
  const [textInputpassword, setTextInputPassword] = useState('');
  const [Error1, setError1] = useState(0);
  const [Error2, setError2] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();
  const {login, isLoggedIn} = useAuth();
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Clear auth state when screen comes into focus
      dispatch(clearAuthState());
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  // Handle successful login
  useEffect(() => {
    if (isLoggedIn && login.data) {
      toast.show('Login successful!', {
        type: 'success',
        placement: 'top',
        duration: 1000,
        offset: 10,
        animationType: 'slide-in',
      });

      // Reset navigation stack to prevent going back to login
      navigation.reset({
        index: 0,
        routes: [{name: RouteName.HOME_SCREEN}],
      });

      // Clear login state after navigation
      dispatch(clearAuthState());
    }
  }, [isLoggedIn, login.data, navigation, toast, dispatch]);

  const checkTextInput = async () => {
    if (!textInputName.trim()) {
      setError1(1);
      return;
    }
    if (!textInputpassword.trim()) {
      setError2(1);
      return;
    }

    try {
      await dispatch(
        loginUser({
          username: textInputName.trim(),
          password: textInputpassword.trim(),
        })
      ).unwrap();
      // Success is handled by useEffect above
    } catch (error) {
      toast.show(error || 'Login failed. Please try again.', {
        type: 'danger',
        placement: 'top',
        duration: 1500,
        offset: 10,
        animationType: 'slide-in',
      });
    }
  };

  return (
    <View>
      <View style={[Login.paddingbottom, Login.bgcolorset]}>
        <Text style={Login.bordersetactive}></Text>
        <View style={Login.tabminview}>
          <View style={Style.inputUnderLine}>
            <TextInput
              placeholder="Username"
              style={Style.inputtextstyle}
              onChangeText={value => {
                setError1(0);
                setTextInputName(value);
              }}
              value={textInputName}
              underlineColorAndroid="transparent"
              placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
              editable={!login.loading}
            />
          </View>
          {Error1 === 1 ? (
            <Text style={Login.pleseentername}>* Please Enter Username</Text>
          ) : null}
          <View style={Style.inputUnderLine}>
            <View style={Style.setpasswordwidtbg}>
              <TextInput
                style={Style.textpassworedsert}
                name="password"
                onPress={handlePasswordVisibility}
                placeholder="Password"
                placeholderTextColor={'rgba(0, 0, 0, 0.54)'}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                enablesReturnKeyAutomatically
                value={textInputpassword}
                onChangeText={value => {
                  setError2(0);
                  setTextInputPassword(value);
                }}
                editable={!login.loading}
              />
            </View>
            <View>
              <Pressable onPress={handlePasswordVisibility}>
                <IconG name={rightIcon} size={25} style={Login.eyeiconset} />
              </Pressable>
            </View>
          </View>
          {Error2 === 1 ? (
            <Text style={Login.pleseentername}>
              * Please Enter the password
            </Text>
          ) : null}

          {/* Show error message from Redux */}
          {login.error && (
            <Text style={[Login.pleseentername, {marginTop: 10}]}>
              {login.error}
            </Text>
          )}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(RouteName.FORGET_PASSWORD_SCREEN)
            }
            disabled={login.loading}>
            <Text style={[Login.textstyle, {color: colorrdata}]}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={Login.buttonview}>
            <Button
              title="Login"
              onPress={checkTextInput}
              buttonStyle={Login.buttonStyle}
              buttonTextStyle={Login.buttonTextStyle}
              loading={login.loading}
              disabled={login.loading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
