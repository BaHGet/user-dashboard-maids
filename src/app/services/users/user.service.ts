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
  constructor(private http: HttpClient) { }
  
  getAllUsers(): Observable<User[]> {
    // console.log({preUsers:this.preUsers, preUser:this.preUser})
    if (this.preUsers.length > 1) {
      return new Observable<User[]>((observer) => {
        observer.next(this.preUsers);
      });
    } else {
      return this.http
        .get<any>('https://reqres.in/api/users')
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
}
