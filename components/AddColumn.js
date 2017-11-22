import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import THCell from './THCell';
import TCell from './TCell';

export default class TColumn extends Component {
  render() {
    return (
      <View style={styles.addColumn}>
        <Button
          onPress={() => { Alert.alert('Добавить колонку с Датчиком')}}
          title="+"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addColumn: {
    width: 50,
    flexDirection: 'column'
  }
});
