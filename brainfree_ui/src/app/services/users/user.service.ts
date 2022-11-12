import {Injectable} from '@angular/core';
import {UserBackendService} from "./backend/user-backend.service";
import {Observable} from "rxjs";
import {User} from "../../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly backendService: UserBackendService) {
  }

  public getUser = (): Observable<User> => {
    return this.backendService.getUser();
  }

}
