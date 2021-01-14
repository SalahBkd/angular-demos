import {Component, OnInit} from '@angular/core';
import {PersonService} from './person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit() {
    this.persons = this.personService.get();
  }

  onPersonDelete(person) {
    this.personService.delete(person);
  }
}
