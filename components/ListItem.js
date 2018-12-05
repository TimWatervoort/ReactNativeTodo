import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, TouchableHighlight } from 'react-native';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem () {
    const { removeIt } = this.props;
    removeIt(this.props.id)
  }

  render () {
    return (
      <Text
      id={this.props.id}
      style={this.props.styling}
      onPress={this.deleteItem}
      >
      {this.props.content}
      </Text>
    )
  }

}

export default ListItem;
