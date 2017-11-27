import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { observer } from 'mobx-react';

@observer
export default class THCell extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.thcell}
        onPress={ () => this.props.colN !== 0 ? this.props.tableStore.removeColumn(this.props.colN) : false }
      >
        <Text style={styles.thcell__text}>
          {this.props.val}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  thcell: {
    padding: 10,
    paddingBottom: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  thcell__text: {
    color: '#fff'
  }
});
