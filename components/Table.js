import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button, Alert } from 'react-native';
import TColumn from './TColumn';
import AddColumn from './AddColumn';
import { observer } from 'mobx-react';

@observer
export default class Table extends Component {
  
  render() {
    const { tableStore } = this.props;

    return (
      <ScrollView
        style={styles.table}
        horizontal={true}
        keyboardShouldPersistTaps='always'
        >
        { tableStore.tableData.map(
          (column, i) => 
          <TColumn tableStore={tableStore}
            key={column.id}
            thVal={column.name}
            index={column.id}
            colN={i}
          />)
        }
        <AddColumn tableStore={tableStore} />
      </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  table: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#000',
    flexDirection: 'row'
  }
});
