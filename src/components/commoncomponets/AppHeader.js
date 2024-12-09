import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RowComponent from '../../components';
import { Fonts, SF, SH, SW, fontPercent } from '../../utils';
import { useTheme } from '@react-navigation/native';

function AppHeader({ headerStyle, leftImage, title, rightImage, onLeftPress, onRightPress }) {
    const { colors } = useTheme();
    const styles = useMemo(
        () =>
            StyleSheet.create({
                container: {
                    height: SH(45),
                    width: '100%',
                    
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                     backgroundColor:'white',
                    ...headerStyle
                },
                leftView: {
                    height: '100%',
                    width: '15%',
                    left : SH(20),
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                },
                leftImageStyle: {
                    height: SH(18),
                    width: SH(18),
                    resizeMode: 'contain',
                },
                titleStyle: {
                    fontFamily: Fonts.Poppins_Bold,
                    fontSize: SF(20),
                    fontWeight: '700',
                    color: '#000'
                },
                rightView: {
                    height: '100%',
                    width: '15%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                rightImageStyle: {
                    height: SH(18),
                    width: SW(18),
                    resizeMode: 'contain'
                }

            }),
        [headerStyle, colors],
    );
    return (
        <RowComponent rowStyle={styles.container}>
            <TouchableOpacity disabled={!leftImage} style={styles.leftView} onPress={() => onLeftPress()}>
                <Image style={styles.leftImageStyle} source={leftImage} />
            </TouchableOpacity>
            <View style={{ right : SH(10) }}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View> 
            {/* <TouchableOpacity disabled={!rightImage} style={styles.leftView}>
                <Image style={styles.rightView} source={rightImage} />
            </TouchableOpacity> */}
        </RowComponent>
    )
}


export default AppHeader;