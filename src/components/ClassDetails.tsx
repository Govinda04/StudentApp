import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

import {HeaderText} from './styles/SheetViewStyle';
import CustomStausbar from './CustomStausbar';
import Color from '../helper/Color';
import {
  Backbtn,
  DetailContainer,
  HeaderView,
  StudentItemImg,
  StudentItemText,
  StudentItemView,
} from './styles/ClassDetailsStyle';
import IMAGES from '../helper/IMAGES';

const {BOY, GIRL} = IMAGES;

const ClassDetails = ({route, navigation}, props) => {
  // console.log('---props: ', JSON.stringify(props, null, 2));
  // console.log('---route: ', JSON.stringify(route, null, 2));
  const classData = route?.params?.classData;
  const columns = route?.params?.columns;
  const className = route?.params?.className;
  console.log(className, columns);

  const renderItem = ({item}) => {
    const {id, name, gender = '', dob} = item;
    // let a = {
    //   DOB: '2000-07-12',
    //   Name: 'Aarav',
    //   Id: '101',
    //   Surname: 'Patel',
    //   address: '123 Main St, Mumbai',
    //   contact: '123-456-7890',
    //   gender: 'Male',
    // };

    const _handleClassOnPress = () => {
      navigation.navigate('StudentDetails', {
        studentData: item,
        className: className,
      });
    };
    return (
      <StudentItemView onPress={_handleClassOnPress}>
        <StudentItemImg
          source={gender.toLowerCase() === 'male' ? BOY : GIRL}
          resizeMode="contain"
        />
        <View>
          <StudentItemText> Id No.: {id}</StudentItemText>
          <StudentItemText> Name: {name}</StudentItemText>
          <StudentItemText> Birth Date: {dob}</StudentItemText>
        </View>
      </StudentItemView>
    );
  };
  return (
    <View>
      <CustomStausbar />
      <HeaderView>
        <Backbtn
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={30} color={Color.primary} />
        </Backbtn>
        <HeaderText style={{paddingLeft: 15}}>
          'Class {className}' Details
        </HeaderText>
      </HeaderView>
      <DetailContainer>
        <FlatList
          data={classData}
          renderItem={renderItem}
          keyExtractor={(item, index) => `std-${item.Id}-${index}`}
          style={{marginBottom: 20}}
        />
      </DetailContainer>
    </View>
  );
};

export default ClassDetails;
