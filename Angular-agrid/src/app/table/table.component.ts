import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClient) {}
  columnDefs;
  rowData;

  ngOnInit() {
    const  params = new  HttpParams().set('category', 'global').set('type', 'accountcode');
    // For Using Params
    // this.http.get('http://localhost:5000/api/values', {params});
    this.http.get('http://localhost:5000/api/values/referentials', {params}).subscribe(
      res => {
        // this.values = res.json();
        this.rowData = res;
        // Make sure data is available or the generateColumns will throw errors
        if (this.rowData) {
          this.columnDefs = this.generateColumns(this.rowData);
        }
      },
      error => {
        console.log(error);
      }
    );
    // fetch('https://api.myjson.com/bins/15psn9')
    //   .then(result => result.json())
    //   .then(rowData => (this.rowData = rowData));
  }
  generateColumns(data: any[]) {
    let columnDefinitions = [];

    data.map(object => {
      Object.keys(object).map(key => {
        const mappedColumn = {
          headerName: key.toUpperCase(),
          field: key
        };

        columnDefinitions.push(mappedColumn);
      });
    });
    // Remove duplicate columns
    columnDefinitions = columnDefinitions.filter(
      (column, index, self) =>
        index ===
        self.findIndex(colAtIndex => colAtIndex.field === column.field)
    );
    return columnDefinitions;
  }
}
