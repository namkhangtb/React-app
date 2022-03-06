import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
const voucherused = require('../Voucher/voucher-used.json');
const data = require('./GioHang.json');
export default class GioHang extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.goToVoucher = this.goToVoucher.bind(this);
    this.backHome = this.backHome.bind(this);
    this.computetru = this.computetru.bind(this);
    this.computecong = this.computecong.bind(this);
    this.deletecart = this.deletecart.bind(this);
    this.deletevoucher = this.deletevoucher.bind(this);
    //this.reloadVoucher = this.reloadVoucher.bind(this);
    this.sum = this.sum.bind(this);
    this.sumamount = this.sumamount.bind(this);
    this.state = {
      data: props.route.params,
      id: 1,
      cong:0,
      tru:0,
      dem:0,
      tong: 0,
      totalamount: 0,
      discountt: 0,
      temp:0
    };
    console.log(this.state.data);
  }

  deletecart(name){
    for (let i = 0; i < data.carts.length; i++) {
      if (data.carts[i].name === name) {
        data.carts.splice(i,1);
        console.log('xoa thang cong')
      }
    }
    this.navigation.navigate('GioHang', data.carts);
    this.navigation.navigate('GioHang')
  }

  deletevoucher(){
    if (voucherused.voucherused.length >= 0) {
      voucherused.voucherused[0].discount=0;
    }
    this.navigation.navigate('GioHang', data.carts);
    this.navigation.navigate('GioHang')
  }
  // reloadVoucher(){
  //   if (voucherused.voucherused[0] != null) {
  //     this.setState({discountt: voucherused.voucherused[0].discount});
  //   } else {
  //     this.setState({discountt: 0});
  //   }
  // }
  sumamount(){
    let tong = 0;
    for (let i = 0; i < data.carts.length; i++) {
      tong = tong + data.carts[i].tonggia;
      this.setState({totalamount: tong});
    }
  }
  sum(){
    let tong = 0;
    for (let i = 0; i < data.carts.length; i++) {
      tong = tong + data.carts[i].tonggia;
      this.setState({tong: tong});
      this.setState({totalamount: tong});
    }
    console.log(tong);
    if (voucherused.voucherused[0] != null) {
      this.setState({discountt: voucherused.voucherused[0].discount});
      if (voucherused.voucherused[0].discount > tong) {
        tong = 0;
        this.setState({tong: tong});
      } else {
        tong = tong - voucherused.voucherused[0].discount;
        this.setState({tong: tong})
      }
    }

  }
  computetru(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc = data.carts[i].price;
      if (data.carts[i].name === name) {
        if (data.carts[i].Quantity == 1) {
          console.log('gioi han');
        } else {
          data.carts[i].Quantity = data.carts[i].Quantity - 1;
          data.carts[i].tonggia = data.carts[i].Quantity * giagoc;
          console.log(data.carts[i].Quantity);
        }
      }
      this.setState({totalamount: giagoc});
    }
    this.sumamount();
    this.navigation.navigate('GioHang')
    this.navigation.navigate('GioHang', data.carts)
  }
  computecong(name){
    var giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc = data.carts[i].price;
      if (data.carts[i].name === name) {
        data.carts[i].Quantity = data.carts[i].Quantity + 1;
        data.carts[i].tonggia = data.carts[i].Quantity * giagoc;
        console.log(data.carts[i].Quantity);
      }
      this.setState({totalamount: giagoc});
    }
    this.sumamount();
    this.navigation.navigate('GioHang')
    this.navigation.navigate('GioHang', data.carts)
  }
  
  goToVoucher() {
    this.navigation.navigate('Voucher');
  }
  backHome() {
    this.navigation.goBack();
  }
  render() {
    const RenderItem = ({cart}) => {
      console.log(cart)
      return (
        <View style={styles.cart}>
          <View style={styles.img}>
            <Image
              style={{width: 115, height: 115, borderRadius: 20}}
              source={{uri: cart.img}}
            />
          </View>
  
          <View style={styles.title}>
            <Text style={{marginLeft: 10,marginTop:5, fontSize: 18, color:'#5B14F5'}}>{cart.name}</Text>
            {/* <Text style={{marginLeft: 10}}></Text> */}
  
            <View style={styles.quantity}>
              <Text style={styles.textQuantity} onPress={()=> this.computetru(cart.name)}>-</Text>
              <Text style={styles.textQuantity}>{cart.Quantity}</Text>
              <Text style={styles.textQuantity} onPress={()=> this.computecong(cart.name)}>+</Text>
            </View>
          </View>
          <View style={styles.price}>
            <Text style={{fontSize: 16, color: '#5B14F5', textAlign: 'center'}}>
              Price
            </Text>
            <Text style={{color:'#5B14F5'}}>${cart.tonggia.toFixed(2)}</Text>
            <TouchableOpacity onPress={()=>this.deletecart(cart.name)} >
              <Image
                //style={styles.imgDetele}
                style={{width: 30, height: 30}}
                source={require('../../Image/delete.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    for (let i = 0; i < data.carts.length - 1; i++) {
      for (let j = i + 1; j < data.carts.length; j++) {
        if (data.carts[i].name == data.carts[j].name) {
          data.carts.pop(data.carts[j]);
          console.log('thang cong')
        }
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={{fontSize: 16, color:'#30336b'}} onPress={this.backHome}>
              Back
            </Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={{fontSize: 26, color:'#30336b'}}>Your Cart</Text>
          </View>
          <View style={styles.headerRight}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../Image/search_new.png')}
            />
          </View>
        </View>
        <View style={styles.products}>
          <FlatList
            //style={styles.listNotify}
            data={data.carts}
            renderItem={({item}) => <RenderItem cart={item} />}
          />
          <Text style={{fontSize: 20, marginLeft: 5,color:'#30336b'}}>Totals</Text>
          <View style={styles.bottom}>
            <View style={styles.leftBottom}>
              <Text style={{fontSize: 16, color:'#30336b'}}>Total Amount:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Voucher:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Shipping:</Text>
              <Text style={{fontSize: 16, color:'#30336b'}}>Total Payment:</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={{fontSize: 18, color:'#FFF', textAlign: 'center'}} onPress={this.goToVoucher}>Voucher</Text>
              </TouchableOpacity>
            </View> 
            <View style={styles.rightBottom}>
              <Text style={{fontSize: 16, paddingLeft: 40, color:'#30336b'}}>$ {this.state.totalamount.toFixed(2)}</Text>
              <View style={{flexDirection:'row'}}>
                <Text style={{fontSize: 16, paddingLeft: 40, color:'#30336b'}}>$ {voucherused.voucherused[0].discount}</Text>
                <TouchableOpacity onPress={this.deletevoucher}>
                  <Text style={{fontSize: 14, paddingLeft: 26, color:'#30336b'}}>Del Voucher</Text>
                </TouchableOpacity>
              </View>
              <Text style={{fontSize: 16, paddingLeft: 40, color:'#30336b'}}>$ 0.00</Text>
              <Text style={{fontSize: 16, paddingLeft: 40, color:'#30336b'}}>$ {this.state.tong.toFixed(2)}</Text>
              <TouchableOpacity style={styles.button} onPress={this.sum}>
                <Text style={{fontSize: 18, color:'#FFF', textAlign: 'center'}}>Check Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B3EDF5',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF7979',
    height: 80,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    //justifyContent: 'center'
  },
  headerLeft: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    //backgroundColor:'darkblue',
    borderBottomLeftRadius: 20
  },
  headerCenter: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7979',
    borderBottomRightRadius: 20,
  },

  cart: {
    marginTop: 30,
    flexDirection: 'row',
    // padding: 2,
    // borderWidth: 1,
    // borderColor: '#20F55C',
    // borderBottomRightRadius: 20,
    // borderTopLeftRadius: 20,
    borderRadius: 20,
    backgroundColor: "#64FA89",
  },
  img: {
    flex: 2.7, 
    width: 124,
    height: 115,
    borderRadius: 20,
    //backgroundColor: 'grey',
    //marginLeft: 5,
  },
  title: {
    flex: 5,
    //backgroundColor: 'yellow',
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'space-between',
  },
  quantity:{
    flexDirection: 'row',
    //backgroundColor: 'pink',
    width: 120,
    height: 30,
    alignItems: 'center',
    marginLeft: 20,
  },
  textQuantity: {
    fontSize: 20,
    width: 40,
    //height: 30,
    textAlign: 'center',
    color: '#5B14F5',
  },
  price: {
    flex: 1.3,
    marginRight: 5,
    //backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  
  // imgDetele: {
    
  // },
  products: {
    height:500,
  },
  bottom: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    height:150,
  },
  leftBottom: {
    flex: 1,
    backgroundColor: '#95afc0',
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10
  },
  rightBottom: {
    flex: 1,
    backgroundColor: '#95afc0',
    borderBottomRightRadius:10,
    borderTopRightRadius:10
  },
  button: {
    backgroundColor: '#FF7979',
    height: 30,
    marginLeft: 40, 
    marginRight: 40, 
    marginTop: 10,
    borderRadius: 15,
  },
});