import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import THCell from './THCell';
import TCell from './TCell';
import { observer } from 'mobx-react';

@observer
export default class TColumn extends Component {
  render() {
    const { tableStore } = this.props;

    return (
      <View style={styles.addColumn}>
        <Button
          onPress={this.handlePress.bind(this)}
          title="+"
        />
      </View>
    );
  }

  handlePress() {
    this.props.tableStore.addColumn();
  }
}

const styles = StyleSheet.create({
  addColumn: {
    width: 50,
    flexDirection: 'column'
  }
});
