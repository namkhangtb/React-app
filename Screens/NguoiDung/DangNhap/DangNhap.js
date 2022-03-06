import React, {Component} from 'react';
const width =Dimensions.get("screen").width/2-30;
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const data=require("../DangNhap/User.json")
export default class DangNhap extends Component {
    constructor (props) {
            super(props);
            this.navigation = props.navigation;
            this.state = {
                data:data.User,
                check:'',
                User:'',
                Pass:''
            }
    }
    checkuser(){
        let check=''
        console.log(this.state.data)
        console.log(this.state.data[0].user , this.state.data[0].pass)

        console.log(this.state.User,this.state.Pass)

        for( let i=0;i<this.state.data.length;i++){
            if(this.state.data[i].user===this.state.User&& this.state.Pass===this.state.data[i].pass){
                this.navigation.navigate('HomeND',this.state.data[i]);
            }
            else if(this.state.User==''||this.state.Pass==''){
                check='Tài khoản và mật khẩu không được để trống',
                this.setState({check:check});
            }
            else{
                check='Mật khẩu hoặc mật khẩu sai',
                this.setState({check:check});
            }
        }
    }
    render() {
        return(
            <View style={{backgroundColor:'#FF7979'}}>
                <View style={styles.header}>
                    <Text style={{textAlign:'center',fontSize:40,fontWeight:'bold', color: '#30336b'}}>
                        WelCome to LipStick.com
                    </Text>
                </View>
                <View style={styles.container}>
                <Text style={styles.title}>{this.state.check }</Text>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        User
                    </Text>
                    <TextInput style={styles.input} value={this.state.User}
                    onChangeText={(value)=>{this.setState({User:value})}}
                    ></TextInput>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>
                        Password
                    </Text>
                    <TextInput secureTextEntry={true} style={styles.input}value={this.state.Pass}

                    onChangeText={(value)=>{this.setState({Pass:value})}} 
                    ></TextInput>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>
                            Forgot password?
                    </Text>
                        <View style={{alignItems:'center'}}>
                            <Text style={styles.buttonstyle}onPress={this.checkuser.bind(this)}>
                                Sign in
                            </Text>
                            <Text style={styles.buttonstyle} onPress={()=>this.navigation.navigate('DangKy')}>
                                Register
                            </Text>
                        </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        height:100,
        backgroundColor:'#FF7979',
        
    },
    buttonstyle:{
        textAlign:'center',
        margin:15,
        height:30,
        borderRadius:10,
        backgroundColor:'#FF7979',
        width:100,
        alignItems:'center',
        padding:5
    },
    container: {
      justifyContent: 'center',
      flexDirection:'column',
      padding:20,
      borderRadius:15,
      backgroundColor:'#B3EDF5',
      height:500
    },
    group: {
      marginTop:20
    },
    button:{
      backgroundColor:'lightblue',
      padding:20,
      borderWidth:1,
    },
    buttonText: {
      fontSize:30,
    },
    input:{
      padding:10,
      borderRadius:15,
      height:40,
      borderWidth:1,
      backgroundColor:'white'
      
    },
    title: {
      fontSize:20,
    },
    center: {
     alignItems:'center'
    },
  });