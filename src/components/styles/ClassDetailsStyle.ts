import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import Color from '../../helper/Color';

export const HeaderView = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: #44d68d;
  border: 0px solid ${Color.primary};
  border-bottom-width: 2px;
  background-color: #6effb455;
  margin-bottom: 10px;

  padding-left: 10px;
`;

export const Backbtn = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const DetailContainer = styled(View)`
  padding: 0 15px;
`;

export const StudentItemView = styled(TouchableOpacity)`
  flex-direction: row;
  background-color: ${Color.primary};
  border-width: 0.3px;
  margin: 8px 15px;
  border-radius: 8px;
  padding: 15px 25px;
  /* justify-content: space-between; */
  /* align-items: center; */
  /* height: 70px; */
`;

export const StudentItemText = styled(Text)`
  color: ${Color.white};
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
`;
export const StudentItemImg = styled(Image)`
  height: 70px;
  width: 70px;
  margin-right: 20px;
`;

export const StudentImg = styled(Image)`
  height: 150px;
  width: 150px;
  border-radius: 100px;
`;
export const StudentImgView = styled(View)`
  align-self: center;
  border: 2px solid white;
  border-radius: 100px;
  padding: 15px;
  margin-bottom: 30px;
`;
export const StudentContainer = styled(View)`
  background-color: ${Color.primary};
  border-width: 0.3px;
  margin: 15px;
  border-radius: 15px;
  padding: 30px;
`;
