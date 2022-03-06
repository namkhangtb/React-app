import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TrangChu from '../Screens/Main-layout/TrangChu';
import NgDung from '../Screens/Main-layout/NgDung';
import Notify from '../Screens/Notify/Notify.js';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
const Tab = createBottomTabNavigator();
const Tabs =()=>{
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style:{
                    height: 70,
                    position: 'absolute',
                    backgroundColor: 'white',
                    ...styles.shadow,
                }
            }}
            
        >           
            <Tab.Screen name="TrangChu" component={TrangChu}
            options={{
                headerShown:false,
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image
                            source={require('../Image/TrangChu.png')}
                            resizeMode='contain'
                            style={{
                                width:55,
                                height:50,
                            }}
                        />
                        <Text style={{color:focused ? '#e32f45':'#748c94',fontSize:12}}
                        >Trang Chủ</Text>
                    </View>
                )
            }}
            />          
            <Tab.Screen name="Notify" component={Notify}
                options={{headerShown:false,
                    tabBarIcon:({focused})=>(
                        <View style={{marginTop:10}}>
                            <View style={{alignItems:'center',justifyContent:'center'}}>
                                <Image
                                    source={require('../Screens/Home/ThongBao_2.png')}
                                    resizeMode='contain'
                                    style={{
                                        
                                        width:40,
                                        height:30,
                                        backgroundColor:'white'
                                    }}
                                />
                                <Text style={{marginTop:5,color:focused ? '#e32f45':'#748c94',fontSize:12}}
                                >Thông Báo</Text>
                            </View>
                        </View>
                    )
                }}
             />
             <Tab.Screen name="NgDung" component={NgDung}
                options={{headerShown:false,
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Image
                                source={require('../Image/user.png')}
                                resizeMode='contain'
                                style={{
                                    marginTop:15,
                                    width:40,
                                    height:30,
                                    
                                }}
                            />
                            <Text style={{color:focused ? '#e32f45':'#748c94',fontSize:12,paddingTop:7}}
                            >Tôi</Text>
                        </View>
                    )
                }}
             />
        </Tab.Navigator>
    );
}
const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
});
export default Tabs;