import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { AfterViewInit } from '@angular/core';

export interface Student {
  FirstName: string;
  LastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  title = 'form-app';
  url = "http://localhost:7071/api/students";
  displayedColumns: string[] = ['firstName', 'lastName'];
  dataSource: Student[] = [];

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this.loadData();
  }

  form = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required)
  });

  submit() {
    this._httpClient.post<Student>(this.url, this.form.value).subscribe(response => {
      this.loadData()
    });
  }

  loadData() {
    this._httpClient.get<Student[]>(this.url).subscribe(response => {
      this.dataSource = response;
    });
  }

}
