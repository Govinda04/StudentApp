import {View, Text, useColorScheme, StatusBar} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView} from 'react-native';

const CustomStausbar = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: '#6effb455'}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#6effb455"
      />
    </SafeAreaView>
  );
};

export default CustomStausbar;
