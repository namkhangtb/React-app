import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
const width = Dimensions.get('screen').width / 2 - 30;
import products from '../Products/products';
import products2 from '../Products/products2';
let productsjson1 = require('../Products/products.json');
let productsjson2 = require('../Products/products2.json');
let productsjson3 = require('../Products/products3.json');
let productsjson4 = require('../Products/products4.json');
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    
    this.gotoDetail = this.gotoDetail.bind(this);

    this.gotoNotify = this.gotoNotify.bind(this);
    this.refreshFlatList = this.refreshFlatList.bind(this);
    this.state = {
      data: productsjson1.products,
    };
  }
  gotoDetail(product) {
    console.log(product.img);
    this.navigation.navigate('Detail', product);
 }
  gotoNotify() {
    this.navigation.navigate('GioHang');
  }
  findout(item) {
    console.log(item);
  }
  refreshFlatList(products) {
    console.log(products)
    this.setState(this.state.data=products)
  }
  render() {
    // cái thanh swip 
    //List Hang Hoa
    const Card=({product})=>{
      return (
        <TouchableOpacity onPress={() => this.gotoDetail(product)}>
          <View style={styles.Card}>
            <View>
                <View style={{height:120,marginTop:30,alignItems:'center',justifyContent:'center',}}>
                    <Image 
                  style={{
                    flex: 1,
                    resizeMode: 'contain',
                    height: 200,
                    width: 100,
                    borderRadius: 15,
                  }}
                  source={{uri: product.img}}/>
                                                
                </View>
                <Text style={{fontSize:20,textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>
                    {product.name}
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                    <Text style={{fontSize:15,textAlign:'left',fontWeight:'bold',marginLeft:5}}>
                        ${product.price}
                    </Text>
                    <View style={{
                        height:25,
                        width: 25,
                        backgroundColor:'#FF7979',
                        borderRadius:5,
                        justifyContent:'center',
                        alignItems:'center',
                        marginRight:10,
                        }}>
                        <Text style={{
                            fontSize:18,
                            color:'white',
                            fontWeight:'bold',
                            flex:1}}>
                            +
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    );
};
    return(           
      <View style={{backgroundColor: '#B3EDF5', height: 600}}>
        <View style={styles.header}>
          <View style={{backgroundColor: '#FF7979', width: 300}}>
                <Text style={{paddingLeft:30,fontSize:20,fontWeight:'bold',color:'#30336b'}}>
                    Welcome to 
                </Text>   
                <Text style={{paddingLeft:20,fontSize:25,fontWeight:'bold',color:'#30336b'}}>
                    LipStickShop.com
                </Text>        
                    
                <View style={{flexDirection:'row'}}>
                    <View style={styles.seachContainer}>
                        <Image                       
                            source={require('../Home/seach.png')}
                            style={{
                                width:25,
                                height:20,
                                marginLeft:20}}/>   
                        <TextInput placeholder="seach" style={styles.inputseach}></TextInput>  
                    </View>  
                </View>
            </View>

            <View style={{backgroundColor:'#FF7979'}} >
                <Text style={{
                    width:50,
                    height:80,
                    marginLeft:30,
                    }} onPress={()=>this.gotoNotify()}>
                    <Image
                        source={require('../../Image/GioHang.png')}
                        
                        // source={require('../Home/ThongBao_2.png')}
                        style={{
                            width:50,
                            height:50,
                            marginLeft:30}} />
                </Text>
            </View>
        </View>
        
        <View style={styles.swip}>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson1.products)}>
            Váy
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson2.products)}>
            Son
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson3.products)}>
            Giày
          </Text>
          <Text
            style={styles.swiptext}
            onPress={() => this.refreshFlatList(productsjson4.products)}>
            Áo
          </Text>
        </View>
        
        <FlatList 
          numColumns={2}
          data={this.state.data}
          renderItem={({item}) => <Card product={item} />}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 40,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  swiptext: {
    marginLeft:30,
    marginRight:30,
    fontSize:20,
    color:'#30336b',
  },
  swip:{
    justifyContent:'center',
    backgroundColor:'#FF7979',
    margin:10,
    flexDirection:'row',
    borderRadius:10,
  },
  Card: {
    backgroundColor:'white',
    height:225,
    width,
    marginHorizontal:2,
    borderRadius:10,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
  },
  CategorySelected: {
    color:'pink',
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:'pink',
  },
  categoryText: {
    fontSize: 16,
    color:'white',
    fontWeight:'bold',
  },
  categoryContainer: {
    backgroundColor:'purple',
    flexDirection:'row',
    marginTop:30,
    marginBottom:10,
    marginLeft:10,
    marginRight:10,
    justifyContent:'space-between',
    color:'white'
  },
  seachContainer: {
    height:40,
    borderRadius:10,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    marginLeft:10,
  },
  inputseach: {
    fontSize:15,
    fontWeight:'bold',
    color:'green',
    backgroundColor:'white',
    borderRadius:15,
    width:230,
  },
  seach: {
    justifyContent: 'space-between',
  },
  header: { 
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#FF7979',
    height:110,
  },
  container: {
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
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    // textAlign: 'center'
  },
});