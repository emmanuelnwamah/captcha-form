import { Component } from '@angular/core';

export interface PeriodicElement {
  FirstName: string;
  LastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {FirstName: 'Emmanuel', LastName: 'Nwamah'},
  {FirstName: '1', LastName: '2'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form-app';
  displayedColumns: string[] = ['FirstName', 'LastName'];
  dataSource = ELEMENT_DATA;


}
