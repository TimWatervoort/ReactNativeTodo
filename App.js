import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import ListItem from './components/ListItem';
import InputField from './components/InputField';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      words: []
    }
    this.removeIt = this.removeIt.bind(this);
    this.submitIt = this.submitIt.bind(this);
  }

  keyExtractor = (item, index) => index.toString();

  async componentDidMount () {
    const response = await fetch('https://agile-sea-28350.herokuapp.com/tasks');
    const json = await response.json();
    this.setState({
      ...this.state,
      words: json
    });
  }

  async removeIt (id) {
    const response = await fetch(`https://agile-sea-28350.herokuapp.com/tasks/${id}`, {
      method: 'DELETE',
      headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
    });
    const json = await response.json();
    this.setState({
      ...this.state,
      words: json
    });
  }

  async submitIt(input) {
    const response = await fetch('https://agile-sea-28350.herokuapp.com/tasks', {
      method: 'POST',
      headers: {
            "Content-Type": "application/json; charset=utf-8"
          },
      body: JSON.stringify({
        task: input
      })
    })
    const json = await response.json();
    this.setState({
      ...this.state,
      words: json
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <InputField submitIt={this.submitIt}/>
        <FlatList
          keyExtractor = {this.keyExtractor}
          data = {this.state.words}
          renderItem = {({item}) => <ListItem styling={styles.text} content={item.task} id={item.id} removeIt={this.removeIt}/>}
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
