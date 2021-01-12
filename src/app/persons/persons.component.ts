import { Component } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent {
  persons = [
    {name: 'salah eddine boukadi', email: 'salahbkd@gmail.com', age: 18, isEmployed: true, gender: 'male'},
    {name: 'ousama attouch', email: 'ousama@gmail.com', age: 20, isEmployed: false, gender: 'male'},
    {name: 'hanan attouch', email: 'yusuf@gmail.com', age: 15, isEmployed: true, gender: 'female'},
  ];

  onPersonDelete(person) {
    console.log(person);
  }
}
