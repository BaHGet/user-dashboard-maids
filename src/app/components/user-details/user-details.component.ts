import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/user.service';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserComponent implements OnInit {
  user: User;
  
  constructor(private router : ActivatedRoute,private userService : UsersService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id: number = params['id'];
      this.userService.getUser(id).subscribe((data: User) => {
        // console.log(data);
        this.user = data;
      });
    })
  }
}
