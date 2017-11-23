import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class THCell extends Component {
  render() {
    return (
      <View style={styles.thcell} >
        <Text style={styles.thcell__text} onPress={ () => this.props.tableStore.removeColumn(this.props.index) }>{this.props.val}</Text>
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
