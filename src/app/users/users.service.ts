import {HttpClient} from '@angular/common/http';
import {Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getSingleUser(username): Observable<User[]> {
    const getOptions = {
      params: { username }
    };

    return this.http.get<User[]>(this.url, getOptions);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

}
