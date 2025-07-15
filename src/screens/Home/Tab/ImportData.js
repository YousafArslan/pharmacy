import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {OffersTabStyle} from '../../../styles';
import Style from '../../../styles/CommonStyle/SweetaelertModalStyle';
import {Button} from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { GetOfflineDataAction } from '../../../redux/dss/dss.slice';
import { useToast } from 'react-native-toast-notifications';

const ImportData = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const authReducer = useSelector(state=> state.auth)
  // const dssReducer = useSelector(state=> state.dss)
  const toast = useToast();

  const handleOfflineData = () => {
    startLoading()
    dispatch(GetOfflineDataAction({data:authReducer?.currentUser?.user?.dist_id}))
  }


  const startLoading = () => {
    setLoading(true);
    setProgress(0);
    let percent = 0;
    const interval = setInterval(() => {
      percent += 1;
      setProgress(percent);
      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
          toast.show('Data Successfully Imported', {
            type: "success",
            placement: 'top',
            duration: 1000,
            offset: 10,
            animationType: 'slide-in',
          });
          // alert('Data Successfully Imported');
        }, 2);
      }
    }, 2); // 2 seconds total
  };

  return (
    <View
      style={[
        OffersTabStyle.minstyleviewphotograpgy,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={{paddingHorizontal: 20}}>
        {!loading && (
          <Button
            title="Import Data"
            buttonTextStyle={Style.setbuttontextstyle}
            buttonStyle={Style.setbuttonstyletwo}
            onPress={handleOfflineData}
          />
        )}
        {loading && (
          <View
            style={{
              marginTop: 30,
              width: 200,
              height: 20,
              borderRadius: 10,
              backgroundColor: '#eee',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: '#ccc',
            }}>
            <View
              style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: 'hsl(234, 92.8%, 72.7%)',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'width 0.2s',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {progress}%
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default ImportData;
