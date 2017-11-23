import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {observer} from 'mobx-react';

@observer
export default class TCell extends Component {
  render() {
    return (
      <View style={styles.tcell}>
        <Text style={styles.tcell__text}>{this.props.val}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tcell: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  tcell__text: {
    color: '#fff'
  }
});
