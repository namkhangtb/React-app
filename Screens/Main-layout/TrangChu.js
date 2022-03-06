import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Home/Index';
import DetailScreen from '../Detail/Index';
import NotifyScreen from '../Notify/Notify';
import GioHang from '../Main-layout/GioHang';
import Voucher from '../Voucher';

const Stack = createNativeStackNavigator();

export default function TrangChu() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Detail'
          component={DetailScreen} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Notify'
          component={NotifyScreen} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='GioHang'
          component={GioHang} options={{headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name='Voucher'
          component={Voucher} options={{headerShown:false}}
        ></Stack.Screen>
      </Stack.Navigator>
  );
}