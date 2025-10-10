import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { useToast } from 'react-native-toast-notifications';
import images from '../../images';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import EditProfileStyle from '../../styles/EditProfileStyle';
import axios from 'axios';
import apiBaseUrl from '../../utils/api';

const EditProfileScreen = ({ navigation }) => {
  const toast = useToast();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const { currentUser } = useSelector(state => state.auth) || {};

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: currentUser?.user?.username || '',
      phoneNumber: currentUser?.user?.phone || '',
      email: currentUser?.user?.email || '',
      dist_id: currentUser?.user?.dist_id || '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,15}$/, 'Phone number must be 10-15 digits'),
      email: Yup.string()
        .email('Invalid email address'),
      dist_id: Yup.string(),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .when('password', {
          is: (password) => password && password.length > 0,
          then: schema => schema.required('Confirm password is required'),
        }),
    }),
    onSubmit: async values => {
      try {
        const userId = currentUser?.user?.id;

        if (!userId) {
          toast.show('User ID not found. Please login again.', {
            type: 'danger',
            placement: 'top',
          });
          return;
        }

        // Prepare the payload - only include fields that have values
        const payload = {};

        if (values.username && values.username.trim() !== '') {
          payload.username = values.username;
        }
        if (values.phoneNumber && values.phoneNumber.trim() !== '') {
          payload.phone = values.phoneNumber;
        }
        if (values.email && values.email.trim() !== '') {
          payload.email = values.email;
        }
        if (values.dist_id && values.dist_id.trim() !== '') {
          payload.dist_id = values.dist_id;
        }

        // Only include password if user wants to change it
        if (values.password && values.password.trim() !== '') {
          payload.password = values.password;
        }

        // Check if there's anything to update
        if (Object.keys(payload).length === 0 && !profileImage) {
          toast.show('No changes to update', {
            type: 'warning',
            placement: 'top',
            duration: 2000,
          });
          return;
        }

        // If there's a profile image, you might want to upload it separately
        // or include it as base64/FormData depending on your API requirements
        if (profileImage) {
          // Option 1: Send as base64
          // payload.profileImage = profileImage.uri;

          // Option 2: Use FormData for file upload
          // const formData = new FormData();
          // formData.append('profileImage', {
          //   uri: profileImage.uri,
          //   type: profileImage.type || 'image/jpeg',
          //   name: profileImage.fileName || 'profile.jpg',
          // });
          // Object.keys(payload).forEach(key => {
          //   formData.append(key, payload[key]);
          // });
        }

        // Make API call
        const response = await axios.put(
          `${apiBaseUrl}/users/${userId}`,
          payload,
          {
            headers: {
              'Content-Type': 'application/json',
              // Add authorization header if needed
              // 'Authorization': `Bearer ${currentUser?.token}`,
            },
          }
        );

        console.log('Profile update response:', response.data);

        toast.show('Profile Updated Successfully', {
          type: 'success',
          placement: 'top',
          duration: 2000,
          style: { backgroundColor: colorrdata },
        });

        // Optionally update Redux state with new user data
        // dispatch(updateUserAction(response.data));

        // Navigate back after successful update
        setTimeout(() => {
          navigation.goBack();
        }, 1500);

      } catch (error) {
        console.error('Profile update error:', error);

        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          'Failed to update profile';

        toast.show(errorMessage, {
          type: 'danger',
          placement: 'top',
          duration: 3000,
        });
      }
    },
  });

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs access to your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Select Photo',
      'Choose an option',
      [
        {
          text: 'Take Photo',
          onPress: async () => {
            const hasPermission = await requestCameraPermission();
            if (hasPermission) {
              launchCamera(
                {
                  mediaType: 'photo',
                  quality: 0.8,
                  maxWidth: 800,
                  maxHeight: 800,
                },
                response => {
                  if (response.didCancel) {
                    console.log('User cancelled');
                  } else if (response.errorCode) {
                    console.log('Error: ', response.errorMessage);
                  } else if (response.assets && response.assets[0]) {
                    setProfileImage(response.assets[0]);
                  }
                },
              );
            }
          },
        },
        {
          text: 'Choose from Library',
          onPress: () => {
            launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 0.8,
                maxWidth: 800,
                maxHeight: 800,
              },
              response => {
                if (response.didCancel) {
                  console.log('User cancelled');
                } else if (response.errorCode) {
                  console.log('Error: ', response.errorMessage);
                } else if (response.assets && response.assets[0]) {
                  setProfileImage(response.assets[0]);
                }
              },
            );
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <KeyboardAvoidingView
      style={EditProfileStyle.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}>
      <ScrollView
        contentContainerStyle={EditProfileStyle.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {/* Profile Picture Section */}
        <View style={EditProfileStyle.profileSection}>
          <View style={EditProfileStyle.imageContainer}>
            <Image
              style={EditProfileStyle.profileImage}
              source={
                profileImage
                  ? { uri: profileImage.uri }
                  : images.avatar || { uri: 'https://via.placeholder.com/150' }
              }
            />
            <TouchableOpacity
              style={[EditProfileStyle.cameraButton, { backgroundColor: colorrdata || '#007AFF' }]}
              onPress={handleImagePicker}>
              <IconMaterial name="camera-alt" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={EditProfileStyle.profileTitle}>Edit Profile</Text>
          <Text style={EditProfileStyle.profileSubtitle}>Update your information</Text>
        </View>

        {/* Form Section */}
        <View style={EditProfileStyle.formSection}>
          {/* Username */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>Username (Optional)</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="user" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Enter username"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                onChangeText={formik.handleChange('username')}
                onBlur={formik.handleBlur('username')}
                value={formik.values.username}
              />
            </View>
            {formik.touched.username && formik.errors.username && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.username}</Text>
            )}
          </View>

          {/* Phone Number */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>Phone Number (Optional)</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="phone" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Enter phone number"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                onChangeText={formik.handleChange('phoneNumber')}
                onBlur={formik.handleBlur('phoneNumber')}
                value={formik.values.phoneNumber}
              />
            </View>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.phoneNumber}</Text>
            )}
          </View>

          {/* Email */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>Email (Optional)</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="mail" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Enter email"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}
                value={formik.values.email}
              />
            </View>
            {formik.touched.email && formik.errors.email && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.email}</Text>
            )}
          </View>

          {/* Distributor ID */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>Distributor ID (Optional)</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="tag" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Enter distributor ID"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                onChangeText={formik.handleChange('dist_id')}
                onBlur={formik.handleBlur('dist_id')}
                value={formik.values.dist_id}
              />
            </View>
            {formik.touched.dist_id && formik.errors.dist_id && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.dist_id}</Text>
            )}
          </View>

          {/* Divider */}
          <View style={EditProfileStyle.divider}>
            <View style={EditProfileStyle.dividerLine} />
            <Text style={EditProfileStyle.dividerText}>Change Password (Optional)</Text>
            <View style={EditProfileStyle.dividerLine} />
          </View>

          {/* Password */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>New Password</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="lock" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Enter new password"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                secureTextEntry={!showPassword}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                value={formik.values.password}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={EditProfileStyle.eyeIcon}>
                <Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
            {formik.touched.password && formik.errors.password && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.password}</Text>
            )}
          </View>

          {/* Confirm Password */}
          <View style={EditProfileStyle.inputContainer}>
            <Text style={EditProfileStyle.label}>Confirm Password</Text>
            <View style={EditProfileStyle.inputWrapper}>
              <Icon name="lock" size={20} color="#999" style={EditProfileStyle.inputIcon} />
              <TextInput
                placeholder="Confirm new password"
                style={EditProfileStyle.input}
                placeholderTextColor="#999"
                secureTextEntry={!showConfirmPassword}
                onChangeText={formik.handleChange('confirmPassword')}
                onBlur={formik.handleBlur('confirmPassword')}
                value={formik.values.confirmPassword}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={EditProfileStyle.eyeIcon}>
                <Icon
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color="#999"
                />
              </TouchableOpacity>
            </View>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <Text style={EditProfileStyle.errorText}>{formik.errors.confirmPassword}</Text>
            )}
          </View>

          {/* Update Button */}
          <TouchableOpacity
            style={[
              EditProfileStyle.updateButton,
              { backgroundColor: colorrdata || '#007AFF' },
            ]}
            onPress={formik.handleSubmit}
            disabled={formik.isSubmitting}>
            <Text style={EditProfileStyle.updateButtonText}>
              {formik.isSubmitting ? 'Updating...' : 'Update Profile'}
            </Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            style={EditProfileStyle.cancelButton}
            onPress={() => navigation.goBack()}>
            <Text style={EditProfileStyle.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
