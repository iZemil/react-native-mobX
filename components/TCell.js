import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableHighlight } from 'react-native';
import {observer} from 'mobx-react';

@observer
export default class TCell extends Component {

  state = {
    textVal: this.props.val,
    isRed: false
  }

  onChange(text) {
    let newText = '';
    const numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }
    this.setState({textVal: newText});

    if(newText > 4095) {
      this.setState({
        isRed: true
      })
    } else {
      this.setState({
        isRed: false
      })
    }
  }

  render() {
    let { 
      tableStore,
      iY,
      iX,
      val
    } = this.props;

    let bgColor = () => {
      if(this.state.isRed) {
        return 'red'
      }
      return tableStore.tableData[0].data[iY].selected ? tableStore.tableView.tRowBgC_selected : tableStore.tableView.tRowBgC
    }

    return (
      <TouchableHighlight
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#fff',
          backgroundColor: bgColor
        }}
        onLongPress={ () => tableStore.selectRow(iY) }
        ><TextInput
          style={styles.tcell__text}
          underlineColorAndroid='transparent'
          keyboardType = 'numeric'
          value={this.state.textVal}
          onChangeText={ (text) => this.onChange(text) }
          onSubmitEditing={ () => this.props.tableStore.changeCellVal(this.state.textVal, this.props.iX, this.props.iY) }
          />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  tcell: {
    height: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  tcell__text: {
    width: '80%',
    height: 19,
    textAlign: 'center',
    color: '#fff',
  }
});
