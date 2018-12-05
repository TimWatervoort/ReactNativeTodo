import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import InputField from './components/InputField';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      words: [{id: 1, key: 'Get groceries'}, {id: 2, key: 'Do laundry'}, {id: 3, key: 'Curse mankind'}]
    }
    this.removeIt = this.removeIt.bind(this);
    this.submitIt = this.submitIt.bind(this);
  }

  alertHey() {
    Alert.alert('Hey.');
  }

  removeIt (id) {
    const newState = this.state.words.filter(x => {
      return parseInt(x.id) !== parseInt(id);
    });
    this.setState({
      ...this.state,
      words: newState
    });
  }

  submitIt(input) {
    const newId = this.state.words[this.state.words.length - 1].id + 1
    const newItem = {
      key: input,
      id: newId
    }
    this.setState({
      ...this.state,
      words: [...this.state.words, newItem]
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <InputField submitIt={this.submitIt}/>
        <FlatList
          data = {this.state.words}
          renderItem = {({item}) => <ListItem styling={styles.text} content={item.key} id={item.id} removeIt={this.removeIt}/>}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
  buttonContainer: {
    backgroundColor: 'white',
  }
});
