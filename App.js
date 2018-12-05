import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableHighlight, FlatList } from 'react-native';
import ListItem from './components/ListItem';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      words: [{id: 1, key: 'Hey.'}, {id: 2, key: 'What\'s up?'}, {id: 3, key: 'You good?'}]
    }
    this.removeIt = this.removeIt.bind(this);
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

  render () {
    return (
      <View style={styles.container}>
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
    fontSize: 30,
  },
  buttonContainer: {
    backgroundColor: 'white',
  }
});
