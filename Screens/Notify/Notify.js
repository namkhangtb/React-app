import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';

const data = require('./Notify.json');
export default class Notify extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.backHome = this.backHome.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = {
      data: data.notifies,
    };
  }

  backHome() {
    this.navigation.goBack();
  }
  renderItem({item, index}) {
    return (
      <TouchableOpacity style={styles.button}>
        <View style={styles.posterNotify}>
          <Image style={{width: 50, height: 50}} source={{uri: item.image}} />
        </View>

        <View style={styles.titleNotify}>
          <Text style={styles.textButton}>{item.about}</Text>
        </View>
        {/* <View style={styles.viewMore}>
          <Text style={styles.textViewMore}>{'>'}</Text>
        </View> */}
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={{fontSize: 16, color: '#30336b'}} onPress={this.backHome}>
              Back
            </Text>
          </View>
          <View style={styles.headerCenter}>
            <Text style={{fontSize: 26, color: '#30336b'}}>Notification</Text>
          </View>
          <View style={styles.headerRight}>

          </View>
        </View>
        <FlatList
          style={styles.listNotify}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dff9fb'
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

  button: {
    //borderWidth: 1,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 14,
    //textAlign: 'center',
  },
  posterNotify: {
    flex: 2
  },
  titleNotify: {
    flex: 10,
  },
  // viewMore: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  textViewMore: {
    textAlign: 'center',
  },
  listNotify: {
    //backgroundColor: 'white'
  },
});
