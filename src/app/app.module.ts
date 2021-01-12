import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person-details/person.component';
import {EmployedDirective} from './persons/emplyed.directive';
import {GenderListPipe} from './persons/genderList.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    EmployedDirective,
    GenderListPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
