import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
const data = require('./aboutus.json');
export default class AboutUs extends Component{
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.gotoHomeND = this.gotoHomeND.bind(this);
    this.state = {
      data: data.maps,
    }
  }

  // renderItem({item}) {
  //   return (
  //     <View style={styles.map}>
  //       <View style={styles.textMap}>
  //         <Text style={{fontSize: 18}}>{item.name}</Text>
  //         <Text>{item.location}</Text>
  //         <Text>{item.district}</Text>
  //         <Text>{item.city}</Text>
  //         <Text>{item.numphone}</Text>
  //       </View>
  //       <MapView
  //         style={{flex:1}}
  //         initialRegion={{
  //           latitude: item.latitude,
  //           longitude: item.longitude,
  //           latitudeDelta: 0.0922,
  //           longitudeDelta: 0.0421,
  //         }}>
  //         <Marker
  //           description={item.description}
  //           coordinate={{latitude: item.latitude, longitude: item.longitude}}>
  //           <Image
  //             source={require('../../Image/placeholder.png')}
  //             style={{width: 35, height: 35}}
  //           />
  //           <Callout>
  //             <Text style={{width:60,textAlign:'center'}}>Lipstick Clothing</Text>
  //           </Callout>
  //         </Marker>
  //       </MapView>
  //     </View>
  //   )
  // }


  gotoHomeND(){
    this.navigation.navigate('HomeND');
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text
              style={{fontSize: 16, color: '#30336b'}}
              onPress={this.gotoHomeND}>
              Back
            </Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={{fontSize: 26, color: '#30336b'}}>About Us</Text>
          </View>
          <View style={styles.headerRight}></View>
        </View>

        <ScrollView>
          <View style={{alignItems:'center'}}>
            <Image
              source={require('../../Image/lipstick.png')}
              style={{height: 100, width: 272, marginTop: 30, marginBottom: 10}}
            />
            <Text style={{fontSize: 16}}>
              Come visit us in one of our stores!
            </Text>
          </View>
      
          {/* <FlatList
          //style={styles.listNotify}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        /> */}
          {/* Map1 */}
          <View style={styles.map}>
            <View style={styles.textMap}>
              <Text style={{fontSize: 18}}>Lipstick Ashleaf</Text>
              <Text>Unit 5 Ashleaf Shopping</Text>
              <Text>Centre</Text>
              <Text>Crumlincross</Text>
              <Text>Walkinstown</Text>
              <Text>Dublin 12</Text>
              <Text>01 456 0340</Text>
            </View>
            <MapView
              style={{flex:1}}
              initialRegion={{
                latitude: 53.3159706,
                longitude: -6.3180105,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                description="LipStick1"
                coordinate={{latitude: 53.3159706, longitude: -6.3180105}}>
                <Image
                  source={require('../../Image/placeholder.png')}
                  style={{width: 35, height: 35}}
                />
                <Callout>
                  <Text style={{width: 60, textAlign: 'center'}}>Lipstick Clothing</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>

          {/* Map2 */}
          <View style={styles.map}>
            <View style={styles.textMap}>
              <Text style={{fontSize: 18}}>Lipstick Stillorgan</Text>
              <Text>7 Stillorgan Village</Text>
              <Text>Stillorgan</Text>
              <Text>Co. Dublin</Text>
              <Text>01 212 3771</Text>
            </View>
            <MapView
              style={{flex:1}}
              initialRegion={{
                latitude: 53.2893004,
                longitude: -6.200776,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                description="LipStick2"
                coordinate={{latitude: 53.2893004, longitude: -6.200776}}>
                <Image
                  source={require('../../Image/placeholder.png')}
                  style={{width: 35, height: 35}}
                />
                <Callout>
                  <Text style={{width:60,textAlign:'center'}}>Lipstick Clothing</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>
          
          {/* Map3 */}
          <View style={{...styles.map, marginBottom:90}}>
            <View style={styles.textMap}>
              <Text style={{fontSize: 18}}>Lipstick Nutgrove</Text>
              <Text>Unit 22 Nutgrove</Text>
              <Text>Shopping Centre</Text>
              <Text>Rathfarnham</Text>
              <Text>Dublin 14</Text>
              <Text>01 493 4281</Text>
            </View>
            <MapView
              style={{flex:1}}
              initialRegion={{
                latitude: 53.2898719,
                longitude: -6.2676133,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                description="LipStick3"
                coordinate={{latitude: 53.2898719, longitude: -6.2676133}}>
                <Image
                  source={require('../../Image/placeholder.png')}
                  style={{width: 35, height: 35}}
                />
                <Callout>
                  <Text style={{width:60,textAlign:'center'}}>Lipstick Clothing</Text>
                </Callout>
              </Marker>
            </MapView>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#FF7979',
    height: 80,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
    
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
    flex: 1
  },
  map: {
    //flex:1,
    flexDirection:'row',
    width: 400,
    height: 200,
    marginTop:30,
  },  
  textMap: {
    marginLeft: 10,
    marginRight: 10,
  },
});