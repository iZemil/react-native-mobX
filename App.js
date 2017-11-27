import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Table from './components/Table';
import TableStore from './stores/TableStore';
import { observer } from 'mobx-react';

var tableStore = new TableStore;

@observer
export default class App extends Component {
  render() {

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'>
          <Table tableStore={tableStore} />
        </ScrollView>
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
