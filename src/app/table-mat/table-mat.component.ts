import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableMatDataSource } from './table-mat-datasource';

@Component({
  selector: 'app-table-mat',
  templateUrl: './table-mat.component.html',
  styleUrls: ['./table-mat.component.css']
})
export class TableMatComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableMatDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new TableMatDataSource(this.paginator, this.sort);
  }
}
