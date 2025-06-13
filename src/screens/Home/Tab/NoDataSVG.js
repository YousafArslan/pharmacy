import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Rect, Line, Circle, Text as SvgText } from 'react-native-svg';

const NoDataSVG = ({message}) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
      <Svg width="200" height="200" viewBox="0 0 200 200">
        <Rect x="40" y="50" width="120" height="100" rx="10" ry="10" fill="#f9f9f9" stroke="#ccc" strokeWidth="2" />
        <Line x1="60" y1="80" x2="140" y2="80" stroke="#ccc" strokeWidth="2" />
        <Line x1="60" y1="100" x2="140" y2="100" stroke="#ccc" strokeWidth="2" />
        <Line x1="60" y1="120" x2="140" y2="120" stroke="#ccc" strokeWidth="2" />
        <Circle cx="100" cy="160" r="3" fill="#ccc" />
        <SvgText
          x="100"
          y="185"
          fontSize="12"
          fill="#999"
          textAnchor="middle"
        >
         {message || `No data available`}
        </SvgText>
      </Svg>
    </View>
  );
};

export default NoDataSVG;
