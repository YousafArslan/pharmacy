import React from 'react';
import {View} from 'react-native';
import {OffersTabStyle} from '../../../styles';
import Style from '../../../styles/CommonStyle/SweetaelertModalStyle';
import {Button} from '../../../components';

const ImportData = () => {
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
          // onPress={() =>
          //   navigation.navigate(RouteName.LOGIN_AND_REGISTRATION)
          // }
        />
      </View>
    </View>
  );
};
export default ImportData;
