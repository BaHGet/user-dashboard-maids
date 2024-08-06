import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import { UsersService } from '../../services/users/user.service';
import { User } from '../../models/user';
import { SearchService } from '../../services/Search/search.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent  implements OnInit {
  mode: ProgressSpinnerMode = 'indeterminate';
  users: User[] = [];
  filteredUsers: User[] = [];
  page: number = 1;
  totalPages: Array<number>= [];
  userFound: boolean = true;

  constructor(
    private userService : UsersService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.userService.getTotalPages().subscribe((data) => {
      for (let i = 1; i <= data; i++) {
        this.totalPages.push(i);
      }
    });

    this.getusers(this.page)

    this.searchService.currentSearchTerm.subscribe(term => {
      this.filterUsers(term);
    });
  }

  getusers(pageNumber: number) {
    if(this.users.length!= 0) {
      this.users = [];
      this.filteredUsers = [];
    }
    this.userService.getAllUsers(pageNumber).subscribe((data) => {
      this.users = data;
      this.filteredUsers = this.users;
    });
  }
  filterUsers(searchTerm: string) {
    if (!searchTerm) {
      this.filteredUsers = this.users;
      this.userFound = true;
    } else {
      this.filteredUsers = this.users.filter(user =>{
        if(user.id === Number(searchTerm)){
          this.userFound = false;
          return true;
        }else{
          this.userFound = true;
          return false;
        }
      }
      );
    }
  }
  prevPage() {
    if (this.page >=1){
      this.page--;
      this.getusers(this.page);
    }
  }
  nextPage() {
    this.page++;
    this.getusers(this.page);
  }
}

