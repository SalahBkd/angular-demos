import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      email: new FormControl(''),
      gender: new FormControl('Male'),
      age: new FormControl('', this.ageValidator),
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
    console.log(person);
  }
}
