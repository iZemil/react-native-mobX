import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import THCell from './THCell';
import TCell from './TCell';
import { observer } from 'mobx-react';

@observer
export default class TColumn extends Component {
  render() {
    return (
      <View style={styles.column}>
        <THCell val={this.props.thVal} index={this.props.index} tableStore={this.props.tableStore} />
        {this.props.tableStore.tableData[0].data.map(
          (tc, i) => <TCell val={tc} key={Math.random()} index={i} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    width: 125,
    flexDirection: 'column'
  }
});
