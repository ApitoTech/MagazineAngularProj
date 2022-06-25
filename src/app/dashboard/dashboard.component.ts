import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild,AfterViewInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  invoice: string;
  firstname: string;
  lastname: string;
  district: string;
  phoneno: string;
  enddate: string;
  // editAction: string 
  // renewAction: string 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invoice: '006-3629', firstname: 'suhas', lastname:'chanra', district: 'tumkur', phoneno:'979879879', enddate: '2022-12-01' },
    {invoice: '006-3543', firstname: 'Praveen', lastname:'Sangati', district: 'Belgaum', phoneno:'798432342', enddate: '2022-12-01' },
    {invoice: '006-8862', firstname: 'Arun', lastname:'Devaraj', district: 'Bangalore', phoneno:'35345345', enddate: '2022-12-01' },
    {invoice: '006-3554', firstname: 'Sidhu', lastname:'M', district: 'Bangalore', phoneno:'999822433', enddate: '2022-12-01' }

];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['invoice', 'firstname', 'lastname', 'district','phoneno','enddate'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public dataa = [
    {invoice: '006-3629', firstname: 'suhas', lastname:'chanra', district: 'tumkur', phoneno:'979879879', enddate: '2022-12-01' },
    {invoice: '006-3543', firstname: 'Praveen', lastname:'Sangati', district: 'Belgaum', phoneno:'798432342', enddate: '2022-12-01' },
    {invoice: '006-8862', firstname: 'Arun', lastname:'Devaraj', district: 'Bangalore', phoneno:'35345345', enddate: '2022-12-01' },
    {invoice: '006-3554', firstname: 'Sidhu', lastname:'M', district: 'Bangalore', phoneno:'999822433', enddate: '2022-12-01' },
	
  ];

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}



applyFilter(fliterValue : string) {
  this.dataSource.filter = fliterValue.trim().toLowerCase();
}

}
