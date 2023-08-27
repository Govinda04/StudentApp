import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'axios';
import {groupBy} from 'lodash';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Color from '../helper/Color';
import {
  ClassItemText,
  ClassItemView,
  HeaderText,
  HeaderView,
  LoaderView,
  RefreshBtn,
} from './styles/SheetViewStyle';
import CustomStausbar from './CustomStausbar';

const {height: deviceHeight, width: deviceWidth} = Dimensions.get('window');

const SheetView = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  // const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState([]);
  const [className, setClassName] = useState<string[]>([]);
  const [classData, setClassData] = useState({});

  const [loading, setLoading] = useState(false);

  const URL = 'https://sheets.googleapis.com/v4/spreadsheets/';
  const SHEET_ID = '17z6BG68jy4VdwTo5NLYB1n5CPmy3dULjhGylPOq6u9Q';
  const API_KEY = 'AIzaSyDHJGkz01zDvYk6NYsaLC6_TxMnDObPs2M';

  const getSheetData = async () => {
    try {
      const response = await axios.get(
        `${URL}${SHEET_ID}/values/sheet1?valueRenderOption=FORMATTED_VALUE&key=${API_KEY}&range=A1:I22`,
      );

      const values = response.data.values;
      if (values.length > 1) {
        let headers = values[0];
        headers = headers.map((h: string) => h.toLowerCase());

        setColumns(headers);
        const jsonData: any[] = values.slice(1).map((row: any) => {
          const rowData: any = {};
          headers.forEach((header: string, index: number) => {
            rowData[header] = row[index];
          });
          return rowData;
        });

        // setData(jsonData);
        // console.log('---jsonData:', JSON.stringify(jsonData, null, 2));

        const className = [...new Set(jsonData.map(std => std.class))].sort();

        setClassName(className);
        console.log('---className:', JSON.stringify(className, null, 2));

        const students = groupBy(jsonData, 'class');

        console.log('---students:', JSON.stringify(students, null, 2));
        setClassData(students);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getSheetData();
  }, []);

  const renderClasses = ({item}: any) => {
    const _data = classData[item];

    const _handleClassOnPress = () => {
      navigation.navigate('ClassDetails', {
        classData: _data,
        columns: columns,
        className: item,
      });
    };

    if (_data?.length > 0) {
      return (
        <ClassItemView onPress={_handleClassOnPress}>
          <ClassItemText>Class {item}</ClassItemText>
          <Icon name="circle-chevron-right" size={30} color={Color.white} />
        </ClassItemView>
      );
    }
    return null;
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <CustomStausbar />
      <HeaderView>
        <HeaderText>Classes List </HeaderText>
        <RefreshBtn
          onPress={() => {
            setLoading(true);
            getSheetData();
          }}>
          <Icon name="rotate" size={30} color={Color.primary} />
        </RefreshBtn>
      </HeaderView>
      {loading ? (
        <LoaderView>
          <ActivityIndicator size={'large'} />
        </LoaderView>
      ) : null}

      <FlatList
        data={className}
        renderItem={renderClasses}
        keyExtractor={(item, index) => `class-${item?.id}-${index}`}
        style={{marginBottom: 70}}
        refreshing={loading}
        onRefresh={() => {
          getSheetData();
        }}
        // bounces={false}
      />
    </View>
  );
};

export default SheetView;
