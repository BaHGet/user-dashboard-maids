import { createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface State {
  users: any[];
  user: any;
  error: any;
  loading: boolean;
}

const initialState: State = {
  users: [],
  user: null,
  error: null,
  loading: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserActions.loadUser, (state) => ({ ...state, loading: true })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
    loading: false,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
