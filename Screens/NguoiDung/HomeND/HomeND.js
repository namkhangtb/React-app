import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export default class HomeND extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            data: props.route.params,
        }
    }
    gotoDangNhap(){
        this.navigation.navigate('DangNhap');
    }
    gotoAboutUs(){
        this.navigation.navigate('AboutUs')
    }
    render() {
        return(
            <View style={{backgroundColor:'#B3EDF5',height:700}}>
                <View style={styles.header}>
                    <View>
                        <Text style={{fontSize:30,fontWeight:'bold',margin:15,color:'#30336b'}}>
                            Hello: {this.state.data.user}
                        </Text>
                        <Text style={{fontSize:20,fontWeight:'bold',margin:5,color:'#30336b'}}>
                            Is the Member
                        </Text>
                    </View>
                    <View>
                    <Text style={{fontSize:20,fontWeight:'bold',marginLeft:120,color:'#30336b'}} 
                    onPress={this.gotoDangNhap.bind(this)}>
                            Sign out
                        </Text>
                    </View>
                </View>

                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Liked
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Recently Viewed
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Super Voucher
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap}>
                        Setting User
                    </Text>
                </View>
                <View style={styles.tap}>
                    <Text style={styles.textTap} onPress={this.gotoAboutUs.bind(this)}>
                        About Us
                    </Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#FF7979',
        height:100,
        flexDirection:'row',
    },
    tap:{
        margin:10,
        backgroundColor:'#20F55C',
        height:70,
        borderRadius:10,
    },
    textTap:{
        fontSize:20,
        fontWeight:'bold',
        margin:20,
        color:'#5B14F5'
    }
});