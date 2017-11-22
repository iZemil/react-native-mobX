import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import THCell from './THCell';
import TCell from './TCell';

export default class TColumn extends Component {
  render() {
    return (
      <View style={styles.column}>
        <THCell val={this.props.thVal} />
        <TCell val='100' />
        <TCell val='80' />
        <TCell val='60' />
        <TCell val='40' />
        <TCell val='20' />
        <TCell val='0' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    width: 100,
    flexDirection: 'column'
  }
});
