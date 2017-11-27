import {observable, computed, reaction} from 'mobx';
import { Alert } from 'react-native';

export default class TableStore {

  // Table data State
  @observable tableData = [
      {
        id: 0,
        name: 'Литры',
        data: [
          {
            val: '100',
            selected: false
          },
          {
            val: '80',
            selected: false
          },
          {
            val: '60',
            selected: false
          },
          {
            val: '40',
            selected: false
          },
          {
            val: '20',
            selected: false
          },
          {
            val: '0',
            selected: false
          },
          {
            val: 'Сумма'
          }
        ]
      }
  ];

  // Table styles State
  @observable tableView = {
    tRowBgC_selected: '#009acd',
    tRowBgC: 'transparent',
    selectedRowNum: null
  };

  // Add new column
  addColumn() {
    let dataArr = [];
  
    this.tableData[0].data.forEach(_ => dataArr.push(
      {
        val: '0'
      }
    ));

    // Move new column to table
    this.tableData.push({
      id: Math.random(),
      name: `Датчик ${this.tableData.length} (N)`,
      data: dataArr
    });
  }

  // Remove column
  removeColumn(colN) {
    this.tableData = this.tableData.filter((_, column) => column !== colN);
  }

  // Select row
  selectRow(y) {
    this.tableView.selectedRowNum = y;
    this.tableData[0].data[y].selected = !this.tableData[0].data[y].selected;
  }

  // Copy selected row
  addRow() {
    this.tableData.forEach(column => column.data.splice(-1, 0, {val: '0'}) );
  }

  // Remove selected row
  removeRow() {
    // Alert.alert(`removeRow ${this.tableView.selectedRowNum}`);
    this.tableData.forEach(column => { return column.data = column.data.filter((_, row) => row !== this.tableView.selectedRowNum)} )
  }

  changeCellVal(text, x, y) {
    // text.preventDefault();
    this.tableData[x].data[y].val = text;
  }

}
