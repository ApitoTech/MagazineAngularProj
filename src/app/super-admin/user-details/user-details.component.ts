import { Component, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild,AfterViewInit } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  userId: string;
  userName: string;
  designation: string;
  contact: string;
  read: string;
  edit: string;
  add:string;
  superAdmin:string;
 }

 const ELEMENT_DATA: PeriodicElement[] = [
  {userId: '001', userName: 'suhas', designation:'Class 1 Officer', contact: '9803985', read:'Yes', edit: 'Yes', add:'Yes', superAdmin: 'Yes' },
  {userId: '002', userName: 'Vinay', designation:'Class 2 Officer', contact: '345345', read:'Yes', edit: 'Yes', add:'No', superAdmin: 'NO' },
  {userId: '003', userName: 'Sundhar', designation:'Class 2 Officer', contact: '4654353453', read:'Yes', edit: 'No', add:'NO', superAdmin: 'NO' },
];
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  displayedColumns: string[] = ['userId', 'userName', 'designation', 'contact','read','edit','add','superAdmin'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  dtOptions: DataTables.Settings = {};
  ngOnInit() {
  this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    lengthMenu : [5, 10, 25],
      processing: true
    };
}
}
