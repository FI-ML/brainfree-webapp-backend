import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as UserActions from "./user.actions";
import {of} from "rxjs";
import {UserService} from "../../../services/users/user.service";


@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUser),

      switchMap(() => this.userService.getUser().pipe(
        map(user => UserActions.loadUserSuccess({user: user})),
        catchError(error =>
          of(UserActions.loadUserFailure({error})))
      )))
  })

  constructor(private readonly actions$: Actions,
              private readonly userService: UserService) {
  }

}
