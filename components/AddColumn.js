import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import THCell from './THCell';
import TCell from './TCell';
import { observer } from 'mobx-react';

@observer
export default class TColumn extends Component {
  render() {
    const { tableStore } = this.props;
    let isVisible = () => {
      // return index ?
      return this.tableStore.tableData[0].data.some(row => row.selected)
    }

    return (
      isVisible ? 
      <View style={styles.addColumn}>
        <TouchableHighlight
          style={ {
            padding: 10,
            paddingBottom: 20,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
          } }
          onPress={ () => this.props.tableStore.addColumn() }
        >
          <Text style={ {color: '#fff'} }>Добавить</Text>
        </TouchableHighlight>
        <View style={styles.cell}>
        </View>
        <View style={ {
          padding: 10,
          width: '100%',
          height: 40,
          justifyContent: 'center',
          alignContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#fff'
        } }>
          <TouchableHighlight
            style={ { width: 30, marginRight: 10 } }
            onPress={ () => this.props.tableStore.removeRow() }
          >
            <Image
              style={ {width: 20, height: 20, resizeMode: 'contain'} }
              source={require('../assets/i/remove.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={ { width: 30 } }
            onPress={ () => this.props.tableStore.addRow() }
          >
            <Image
              style={ {width: 20, height: 20, resizeMode: 'contain'} }
              source={require('../assets/i/add.png')}
            />
          </TouchableHighlight>
        </View>
      </View> : null
    );
  }
}

const styles = StyleSheet.create({
  addColumn: {
    width: 130,
    flexDirection: 'column'
  },
  cell: {
    padding: 10,
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  }
});
