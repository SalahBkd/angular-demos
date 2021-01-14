import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons = [
    {name: 'salah eddine boukadi', email: 'salahbkd@gmail.com', age: 18, isEmployed: true, gender: 'male'},
    {name: 'ousama attouch', email: 'ousama@gmail.com', age: 20, isEmployed: false, gender: 'male'},
    {name: 'hanan attouch', email: 'yusuf@gmail.com', age: 15, isEmployed: true, gender: 'female'},
  ];

  get() {
    return this.persons;
  }

  add(person) {
    this.persons.push(person);
  }

  delete(person) {
    const index = this.persons.indexOf(person);
    if(index >= 0) {
      this.persons.splice(index, 1);
    }
  }
}
