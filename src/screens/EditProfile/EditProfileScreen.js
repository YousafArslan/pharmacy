import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Styles from '../../styles/LoginRegisterStyle/LoginScreenStyle';
import Style from '../../styles/CommonStyle/Style';
import {RouteName} from '../../routes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Creditcard} from '../../styles';
import {Button} from '../../components';

const EditProfileScreen = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [distributionId, setDistributionId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState({
    fullnameError: false,
    usernameError: false,
    distributionIdError: false,
    passwordError: false,
    confirmPasswordError: false,
    mobileNumberError: false,
    emailError: false,
    emailValidError: false,
  });

  const validateEmail = item => {
    setEmail(item);
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      item,
    );
    setErrors(prev => ({...prev, emailValidError: !isValidEmail}));
  };

  const handleSubmit = () => {
    // Add validation logic here for each field
    // Placeholder logic to check if fields are empty
    setErrors({
      fullnameError: !fullname.trim(),
      usernameError: !username.trim(),
      distributionIdError: !distributionId.trim(),
      passwordError: !password.trim(),
      confirmPasswordError:
        password !== confirmPassword || !confirmPassword.trim(),
      mobileNumberError: !mobileNumber.trim(),
      emailError: !email.trim(),
    });
  };

  // Example function to handle image picking
  const handleImagePicker = () => {
    // Here you should include your logic to pick an image
    // For example using ImagePicker from 'react-native-image-picker'
  };

  return (
    <View style={Styles.mincolorwhite}>
      <View style={Styles.tabminview}>
        {/* Upload Picture */}
        <View style={Style.uploadView}>
          <TouchableOpacity
            onPress={handleImagePicker}
            style={Style.uploadButton}>
            {profilePic ? (
              <Image source={{uri: profilePic}} style={Style.imageUpload} />
            ) : (
              <Icon name="camera" size={30} color="#777" />
            )}
          </TouchableOpacity>
        </View>
        {/* Username */}
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Username"
            style={Style.inputtextstyle}
            onChangeText={value => setUsername(value)}
            value={username}
          />
          {errors.usernameError && (
            <Text style={Styles.pleseentername}>
              * Please enter your username
            </Text>
          )}
        </View>

        {/* Distribution ID */}
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Distribution ID"
            style={Style.inputtextstyle}
            onChangeText={value => setDistributionId(value)}
            value={distributionId}
          />
          {errors.distributionIdError && (
            <Text style={Styles.pleseentername}>
              * Please enter your distribution ID
            </Text>
          )}
        </View>

        {/* Password */}
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Password"
            style={Style.inputtextstyle}
            secureTextEntry
            onChangeText={value => setPassword(value)}
            value={password}
          />
          {errors.passwordError && (
            <Text style={Styles.pleseentername}>* Please enter a password</Text>
          )}
        </View>

        {/* Confirm Password */}
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Confirm Password"
            style={Style.inputtextstyle}
            secureTextEntry
            onChangeText={value => setConfirmPassword(value)}
            value={confirmPassword}
          />
          {errors.confirmPasswordError && (
            <Text style={Styles.pleseentername}>* Passwords do not match</Text>
          )}
        </View>

        {/* Mobile Number */}
        <View style={Style.inputUnderLine}>
          <TextInput
            placeholder="Mobile Number"
            style={Style.inputtextstyle}
            keyboardType="numeric"
            onChangeText={value => setMobileNumber(value)}
            value={mobileNumber}
          />
          {errors.mobileNumberError && (
            <Text style={Styles.pleseentername}>
              * Please enter your mobile number
            </Text>
          )}
        </View>

        <View style={Styles.bluebuttonstyle}>
          <Button
            title="Update"
            onPress={handleSubmit}
            buttonStyle={Styles.setbuttonborderradius}
            buttonTextStyle={Styles.textcolorsetwhite}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfileScreen;
