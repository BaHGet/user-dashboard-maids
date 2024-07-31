import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  loading: boolean = false;
  error: string | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers(this.page).subscribe(
      (data) => {
        console.log('User data received:', data);
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading users:', error);
        this.error = 'Failed to load users';
        this.loading = false;
      },
      () => {
        console.log('User data loading complete');
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
    console.log(id)
  }
}