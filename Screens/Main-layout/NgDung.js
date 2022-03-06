import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeND from '../NguoiDung/HomeND/HomeND';
import DangKy from '../NguoiDung/DangKy/DangKy';
import DangNhap from '../NguoiDung/DangNhap/DangNhap';
import AboutUs from '../AboutUs';
const Stack = createNativeStackNavigator();

export default function NgDung() {
  return (
      <Stack.Navigator initialRouteName="DangNhap">
        <Stack.Screen
          name='HomeND'
          component={HomeND}
          options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='DangKy'
          component={DangKy} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='DangNhap'
          component={DangNhap} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='AboutUs'
          component={AboutUs} options={{headerShown:false}}
        ></Stack.Screen>
      </Stack.Navigator>
  );
}