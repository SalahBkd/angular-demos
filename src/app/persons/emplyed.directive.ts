import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[MpEmployed]'
})
export class EmployedDirective {
  @HostBinding('class.is-employed') isEmployed = false;
  @Input() set MpEmployed(value) {
    this.isEmployed = value;
  }
}
