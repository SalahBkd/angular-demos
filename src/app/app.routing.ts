import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PersonsComponent} from './persons/persons.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'persons', component: PersonsComponent},
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
