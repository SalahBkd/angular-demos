import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonComponent } from './persons/person-details/person.component';
import {EmployedDirective} from './persons/emplyed.directive';
import {GenderListPipe} from './persons/genderList.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import { PersonFormComponent } from './persons/person-form/person-form.component';
import {lookupLists, lookupListsToken} from './persons/providers';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {UsersService} from './users/users.service';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    EmployedDirective,
    GenderListPipe,
    PersonFormComponent,
    UsersComponent,
    HomeComponent,
    NotfoundComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    {provide: lookupListsToken, useValue: lookupLists},
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
