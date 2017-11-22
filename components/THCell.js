import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class THCell extends Component {
  render() {
    return (
      <View style={styles.thcell}>
        <Text style={styles.thcell__text}>{this.props.val}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thcell: {
    padding: 10,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thcell__text: {
    color: '#fff'
  }
});
