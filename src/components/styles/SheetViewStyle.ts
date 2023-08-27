import {Dimensions, TouchableOpacity, View, Text} from 'react-native';
import styled from 'styled-components';
import Color from '../../helper/Color';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

export const RefreshBtn = styled(TouchableOpacity)`
  padding: 5px;
  border-width: 0.3px;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #eaeaea;
`;

export const HeaderView = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #44d68d;
  border: 0px solid ${Color.primary};
  border-bottom-width: 2px;
  background-color: #6effb455;
  margin-bottom: 10px;
`;
export const HeaderText = styled(Text)`
  font-size: 28px;
  font-weight: bold;
  color: ${Color.grey44};
`;
// export const HeaderView = styled(View)``;

export const LoaderView = styled(View)`
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: ${deviceHeight}px;
  width: ${deviceWidth}px;
  background-color: #fff;
`;

export const ClassItemView = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${Color.primary};
  border-width: 0.3px;
  margin: 8px 15px;
  border-radius: 8px;
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

export const ClassItemText = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  color: ${Color.white};
`;
