import React,{Component} from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet,FlatList,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
const width =Dimensions.get("screen").width/2-30;
const data = require('../Main-layout/GioHang.json');
export default class DetailsScreen extends Component {
    constructor (props) {
        super(props);
        this.navigation = props.navigation;
        this.gotoNotify = this.gotoNotify.bind(this);
        this.addCart=this.addCart.bind(this);
        this.state = {
            data: props.route.params,
            cong:0,
            tru:0,
            dem:0,
        }
    }
    addCart(){
        data.carts.push({tonggia: this.state.data.price,Quantity:1,name: this.state.data.name,img : this.state.data.img,price : this.state.data.price});
        console.log(data.carts);
        console.log('--------------------------------------------');
        this.navigation.navigate('GioHang');
    }
    gotoNotify() {
    this.navigation.navigate('GioHang');
    }
  render(){
          return(
              <ScrollView>
                  <SafeAreaView style={{flex:1,backgroundColor:'#B3EDF5'}}>
                  <View style={styles.Header}>
                      <View style={styles.goback} >
                           <Text style={styles.textback} onPress={()=>this.navigation.navigate('Home')}>
                               Back
                           </Text>
                      </View>
                      <View style={{backgroundColor:'#FF7979'}}>
                        <Text style={{
                            width:50,
                            height:80,
                            marginLeft:30,
                            }} onPress={()=>this.gotoNotify()}>
                        <Image
                            source={require('../../Image/GioHang.png')}
                            style={{
                                width:50,
                                height:50,
                                marginLeft:30}} />
                        </Text>
                      </View>
                  </View>
                  <View style={styles.imageContainer}>
                      {/* <Image source={this.state.data.img} */}
                      <Image source={{uri:this.state.data.img}}
                          style={{resizeMode:'contain',flex:1,height:400,width:400, borderRadius:20}}
                      />
                  </View>
                  
                  <View style={styles.detailContainer}>
                      <View style={{marginLeft:20,flexDirection:'row',alignItems:'flex-end'}}>
                          <View style={styles.line} />
                          <Text style={{fontSize: 18, fontWeight: 'bold',color:'white'}}>Best choice</Text>
                      </View>
                      <View
                      style={{
                          marginLeft: 20,
                          marginTop: 20,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 22, fontWeight: 'bold',color:'white'}}>
                          {this.state.data.name}
                      </Text>
                      <View style={styles.price}>
                          <Text style={{marginLeft:20,
                                  color:'white',
                                  fontWeight: 'bold',
                                  fontSize: 16,}}>
                              ${this.state.data.price}
                          </Text>
                      </View>
                  </View>
                  <View style={{paddingHorizontal:20,marginTop:10}}>
                       <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                             About
                      </Text>
                       <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>
                           {this.state.data.about}
                      </Text>
                  </View>
                  <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                              
                          </View>
                          <View style={styles.buyBtn}>
                          <Text onPress={()=>this.addCart()}
                              style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                              Buy
                          </Text>
                      </View>
                      </View>
                  </View>
                  
              </SafeAreaView>
          </ScrollView>
          )
     }
}

const styles = StyleSheet.create({
    buyBtn: {
        width: 130,
        height: 50,
        backgroundColor:'#FF7979',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
      },
    borderBtn: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 40,
        marginLeft:10
      },
      borderBtnText: {
          fontWeight: 'bold', 
          fontSize: 28},
    price:{
        width: 80,
        height: 40,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor:'#FF7979'
    },
    line:{
        width:25,
        height:2,
        backgroundColor:'white',
        marginBottom: 5,
        marginRight: 3,
    },
    Card:{
        backgroundColor:'white',
        height:225,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
    },
    detailContainer:{
        flex:0.55,
        backgroundColor:'#95afc0',
        marginHorizontal:7,
        marginBottom:7,
        borderRadius:20,
        marginTop:30,
        paddingTop:30,
        height:500,
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
    },  
    textback:{
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        color:'#30336b'
    },
    goback:{
        width:50,
        height:50,
        borderRadius:5,
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'#FF7979',
        alignItems:'center',
        justifyContent: 'center'
    },
    Header:{
        paddingHorizontal:20,
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#FF7979',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    button: {
        borderWidth: 1,
        padding: 10,
        width: 150,
        alignItems: 'center'
    },
    buttonText: {
        // textAlign: 'center'
    }
});