import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Table from './components/Table';
import TableStore from './stores/TableStore';

var tableStore = new TableStore;

export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Table tableStore={tableStore} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#000'
  }
});
