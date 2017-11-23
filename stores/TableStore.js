import {observable, computed, reaction} from 'mobx';
import { Alert } from 'react-native';

export default class TableStore {
  @observable tableData = [
      {
        id: 0,
        name: 'Литры',
        data: [100, 80, 60, 40, 20, 0]
      }
  ];

  addColumn() {
    this.tableData.push({
      id: Math.random(),
      name: `Датчик ${this.tableData.length} (N)`,
      data: [100, 80, 60, 40, 20, 0]
    });
  }

  removeColumn(id) {
    this.tableData = this.tableData.filter(col => col.id !== id);
  }

  addRow() {

  }
  removRow(index) {

  }


}
