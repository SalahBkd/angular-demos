import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[MpEmployed]'
})
export class EmployedDirective {
  @HostBinding('class.is-employed') isEmployed = false;
  @HostBinding('class.is-mouse-hovering') isHovering = false;

  @Input() set MpEmployed(value) {
    this.isEmployed = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
  }

}
