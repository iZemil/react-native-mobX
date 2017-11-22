import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import TColumn from './TColumn';
import AddColumn from './AddColumn';

export default class Table extends Component {
  render() {
    return (
      <View style={styles.table}>
        <TColumn thVal='Литры' />
        <TColumn thVal='Датчик 1' />
        <AddColumn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  table: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#ffff00'
  }
});
