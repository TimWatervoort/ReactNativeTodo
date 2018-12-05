import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Alert, TouchableHighlight} from 'react-native';

class InputField extends Component {

  constructor(props){
    super(props);
    this.state = {
      newItem: ''
    }
    this.changeItem = this.changeItem.bind(this);
    this.submitItem = this.submitItem.bind(this);
  }

  submitItem() {
    const { submitIt } = this.props;
    submitIt(this.state.newItem);
    this.setState({
      ...this.state,
      newItem: ''
    });
    // Alert.alert(this.newItem.text)
  }

  changeItem (text){
    this.setState({
      ...this.state,
      newItem: text
    });
  }

  render () {
    return(
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: 200}}>
          <TextInput value={this.state.newItem} style={styles.text} onChangeText={(text) => this.changeItem(text)}/>
        </View>
        <View style={{width: 75}}>
          <TouchableHighlight onPress={this.submitItem} underlayColor="white">
            <View style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>


    )
  }

}

export default InputField;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'white',
    marginTop: 150,
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
