import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {User} from './User';
import {catchError} from 'rxjs/operators';

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
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError(this.handlError)
      );
  }

  handlError(error: HttpErrorResponse): Observable<any> {
    // console.log(error.message);
    return throwError(' a data error occured please try again later.');
  }
}
