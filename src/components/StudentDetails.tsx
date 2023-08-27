import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import CustomStausbar from './CustomStausbar';
import {
  Backbtn,
  HeaderView,
  StudentContainer,
  StudentImg,
  StudentImgView,
  StudentItemText,
} from './styles/ClassDetailsStyle';
import {HeaderText} from './styles/SheetViewStyle';
import IMAGES from '../helper/IMAGES';

const {BOY, GIRL} = IMAGES;

const StudentDetails = ({navigation, route}) => {
  console.log('---props: ', JSON.stringify(route, null, 2));
  const studentData = route?.params?.studentData || {};

  const renderData = () => {
    let arr = [];
    for (const [key, value] of Object.entries(studentData)) {
      console.log(`${key}: ${value}`);

      arr.push(
        <View style={{flexDirection: 'row'}} key={`std-${key}`}>
          <StudentItemText
            style={{
              fontSize: 20,
              lineHeight: 30,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}>
            {key.toUpperCase()}:{` `}
          </StudentItemText>
          <StudentItemText style={{fontSize: 20, lineHeight: 30}}>
            {value}
          </StudentItemText>
        </View>,
      );
    }
    return arr;
  };
  return (
    <View>
      <CustomStausbar />
      <HeaderView>
        <Backbtn
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={30} />
        </Backbtn>
        <HeaderText style={{paddingLeft: 15}}>Student Details</HeaderText>
      </HeaderView>

      <StudentContainer>
        <StudentImgView>
          <StudentImg
            source={studentData?.gender.toLowerCase() === 'male' ? BOY : GIRL}
            resizeMode="contain"
          />
        </StudentImgView>

        {renderData()}
      </StudentContainer>
    </View>
  );
};

export default StudentDetails;
