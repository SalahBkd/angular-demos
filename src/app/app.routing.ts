import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {PersonsComponent} from './persons/persons.component';
import {HomeComponent} from './home/home.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {PersonComponent} from './persons/person-details/person.component';
import {UserDetailsComponent} from './users/user-details/user-details.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailsComponent},
  {path: 'persons', component: PersonsComponent},
  {path: 'notfound', component: NotfoundComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'notfound'}
];

export const routing = RouterModule.forRoot(appRoutes);
