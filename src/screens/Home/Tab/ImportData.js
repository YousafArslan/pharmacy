import React from 'react';
import {View} from 'react-native';
import {OffersTabStyle} from '../../../styles';
import Style from '../../../styles/CommonStyle/SweetaelertModalStyle';
import {Button} from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { GetOfflineDataAction } from '../../../redux/dss/dss.slice';

const ImportData = () => {
  const dispatch = useDispatch()
  const authReducer = useSelector(state=> state.auth)
  const dssReducer = useSelector(state=> state.dss)
  console.log("dssReducer",dssReducer)
  const handleOfflineData = () => {
    dispatch(GetOfflineDataAction({data:authReducer?.currentUser?.user?.dist_id}))
  }
  
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
        <Button
          title="Import Data"
          buttonTextStyle={Style.setbuttontextstyle}
          buttonStyle={Style.setbuttonstyletwo}
          style={{paddingRight: 10}}
          onPress={() =>
            handleOfflineData()
          }
        />
      </View>
    </View>
  );
};
export default ImportData;
