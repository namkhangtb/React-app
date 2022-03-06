import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class bmi extends Component {
  constructor(props) {
    super(props);
    this.state={
      weight:'10',
      height:'10',
      bmi:0.00,
      level :'....',
    }
  }
  compute(){
    //console.log("press");
    //console.log(this.state)
    const{height,weight}=this.state;
    const n_height=parseFloat(height);
    const n_weight=parseFloat(weight);
    console.log(n_height,n_weight);

    const _bmi=n_weight/Math.pow(n_height/100,2);
    this.setState({bmi:_bmi})

    var _obesity='';
    if(_bmi>32){
      _obesity='Obese'
    }
    else if(_bmi>25&&_bmi<32){
      _obesity='Over Weight'
    }
    else if(_bmi>18.5&&_bmi<25){
      _obesity='Normal Weight'
    }
    else{
      _obesity='Under Weight'
    }
    this.setState({level :_obesity})
    console.log(this.state);
  }
  render() {
    return (
      <View style ={styles.container}>
          <Text style={styles.title}>BMIApplication</Text>
            <View style={styles.group}>
              <Text style={styles.title}>Weight(KG):</Text>
              <TextInput style={styles.input} keyboardType='numeric' 
              value={this.state.weight}
              onChangeText={(value)=>{this.setState({weight:value})}}></TextInput>
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Height(CM):</Text>
              <TextInput style={styles.input} keyboardType='numeric' value={this.state.height}
              onChangeText={(value)=>{this.setState({height:value})}}></TextInput>
            </View>
          <View style={styles.center}>
                <View style={styles.group}>
                  <Text style={styles.title}>BMI:{this.state.bmi}</Text>
                </View>
                <View style={styles.group}>
                  <Text style={styles.title}> level :{this.state.level }</Text>
                </View>
                <View style={styles.group}>
                  <TouchableOpacity style={styles.button} onPress={this.compute.bind(this)}>
                      <Text style={styles.buttonText}>Compute</Text>
                  </TouchableOpacity>
                </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection:'column',
    padding:20,
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
    
    height:40,
    borderWidth:1
  },
  title: {
    fontSize:20,
  },
  center: {
   alignItems:'center'
  },
});
