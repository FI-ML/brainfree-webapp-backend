import {createAction, props} from '@ngrx/store';
import {Update} from '@ngrx/entity';

import {User} from '../../../models/user.model';
import {HttpErrorResponse} from '@angular/common/http';

export const loadUser = createAction(
  '[User/API] Load User',
);


export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: HttpErrorResponse }>()
);


export const addUser = createAction(
  '[User/API] Add User',
  props<{ user: User }>()
);

export const upsertUser = createAction(
  '[User/API] Upsert User',
  props<{ user: User }>()
);

export const updateUser = createAction(
  '[User/API] Update User',
  props<{ user: Update<User> }>()
);


export const deleteUser = createAction(
  '[User/API] Delete User',
  props<{ id: string }>()
);

