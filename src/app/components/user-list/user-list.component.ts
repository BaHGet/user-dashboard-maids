import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent  implements OnInit {
  constructor(private userService : UsersService) { }

  users: User[] = [];
  ngOnInit(): void {
    if (this.users.length > 0) {
      return;
    } else {
      this.userService.getAllUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    }
  }
}

