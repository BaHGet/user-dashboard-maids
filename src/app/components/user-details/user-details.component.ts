import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../../store/actions/user.actions';
import { selectUser, selectLoading } from '../../store/selectors/user.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router) {
    this.user$ = this.store.pipe(select(selectUser));
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.store.dispatch(UserActions.loadUser({ id: +userId }));
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
