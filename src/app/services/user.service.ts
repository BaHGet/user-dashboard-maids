import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  // Fetch paginated users
  getUsers(page: number): Observable<any> {
    console.log(page)
    return this.http.get<{ data: User[] }>(`${this.apiUrl}?page=${page}`).pipe(
      map(response => response.data), // Extract the data array from the response
      catchError(this.handleError<User[]>('getUsers', []))
    );
  }

  // Fetch single user details
  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data),
      catchError(this.handleError<any>('getUser', null))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
