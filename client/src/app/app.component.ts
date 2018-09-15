import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// Import rxjs map operator
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of people
  people: any[] = [];

  constructor(private http: HttpClient) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllPeople();
  }

  // Add one person to the API
  addPerson(name, age) {
    this.http.post(`${this.API}/users`, {name, age})
      .pipe(map(res => res))
      .subscribe(() => {
        this.getAllPeople();
      })
  }

  // Get all users from the API
  getAllPeople() {
    this.http.get<any>(`${this.API}/users`)
      .pipe(map(res => res))
      .subscribe(people => {
        console.log(people)
        this.people = people
      })
  }
}