import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../../services/user.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [NgIf, NgFor]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  page: number = 1;
  loading: boolean = false;
  error: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers(this.page).subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to load users';
        this.loading = false;
      }
    );
  }

  nextPage() {
    this.page++;
    this.loadUsers();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadUsers();
    }
  }

  viewUser(id: number) {
    this.router.navigate(['/user', id]);
  }
}