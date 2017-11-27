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
        <THCell
          val={this.props.thVal}
          colN={this.props.colN}
          tableStore={this.props.tableStore}
        />
        { this.props.tableStore.tableData[this.props.colN].data.map(
          (cell, i) => 
          <TCell
            val={cell.val}
            key={Math.random()} 
            iX={this.props.colN}
            iY={i} 
            index={this.props.index}
            tableStore={this.props.tableStore}
          />
        ) }
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
