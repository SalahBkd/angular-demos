import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent  {
  @Input() person = {name: '', email: '', age: 0, isEmployed: false};
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('deleted');
    this.delete.emit(this.person);
  }

}
