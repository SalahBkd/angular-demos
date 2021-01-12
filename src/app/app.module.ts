import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person-details/person.component';
import {EmployedDirective} from './persons/emplyed.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    EmployedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
