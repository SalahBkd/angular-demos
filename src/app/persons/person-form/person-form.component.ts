import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../person.service';
import {lookupListsToken} from '../providers';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private personService: PersonService,
              @Inject(lookupListsToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      email: this.formBuilder.control(''),
      gender: this.formBuilder.control('Male'),
      age: this.formBuilder.control('', this.ageValidator),
    });

  }

  ageValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const age = parseInt(control.value, 10);
    const minAge = 15;
    const maxYear = 100;
    if (age >= minAge && age <= maxYear) {
      return null;
    } else {
      return {
        year: {
          min: minAge,
          max: maxYear
        }
      };
    }
  }

  onSubmit(person) {
    //console.log(person);
    this.personService.add(person);
  }
}
