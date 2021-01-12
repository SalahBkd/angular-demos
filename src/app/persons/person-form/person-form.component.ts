import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl('Male')
    });

  }

  onSubmit(person) {
    console.log(person);
  }
}
