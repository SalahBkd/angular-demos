import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  persons = [
    {name: 'salah', email: 'salahbkd@gmail.com', age: 18, isEmployed: true},
    {name: 'ousama', email: 'ousama@gmail.com', age: 20, isEmployed: false},
    {name: 'yusuf', email: 'yusuf@gmail.com', age: 15, isEmployed: true},
  ];

  onPersonDelete(person) {
    console.log(person);
  }
}
