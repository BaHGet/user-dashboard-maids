import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/user.reducer';

export const selectUserState = createFeatureSelector<State>('user');

export const selectUsers = createSelector(
  selectUserState,
  (state: State) => state.users
);

export const selectUser = createSelector(
  selectUserState,
  (state: State) => state.user
);

export const selectLoading = createSelector(
  selectUserState,
  (state: State) => state.loading
);

export const selectError = createSelector(
  selectUserState,
  (state: State) => state.error
);
