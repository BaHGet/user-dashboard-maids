import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  preUsers: User[] = []
  preUser: User;
  preTotalPages: number;
  currnetPage: number = 1;
  constructor(private http: HttpClient) { }
  
  getAllUsers(pageNumber: number): Observable<User[]> {
    if (this.preUsers.length > 1 && this.currnetPage === pageNumber) {
      return new Observable<User[]>((observer) => {
        observer.next(this.preUsers);
      });
    } else {
      this.currnetPage = pageNumber
      return this.http
        .get<any>(`https://reqres.in/api/users?page=${pageNumber}`)
        .pipe(
          map((data) => {
            this.preUsers = data.data;
            return data.data;
          })
        );
    }
  }
  
  getUser(id: number): Observable<User> {
    let user = this.preUsers.filter((user) => user.id == id)[0];
    if (user) {
      return new Observable<any>((observer) => {
        const user = this.preUsers.filter((user) => user.id == id)[0];
        observer.next(user)
      });
    } else {
      return this.http
        .get<{data:User, support:any}>('https://reqres.in/api/users/' + id)
        .pipe(
          map((data) => {
            return data.data;
          })
        );
    }
  }

  getTotalPages(): Observable<number> {
    if (this.preTotalPages) {
      return new Observable<number>((observer) => {
        observer.next(this.preTotalPages);});
    } 
    return this.http
      .get<any>('https://reqres.in/api/users')
      .pipe(
        map((data) => {
          this.preTotalPages = data.total_pages
          return data.total_pages;
        })
      ); 
  }
}
