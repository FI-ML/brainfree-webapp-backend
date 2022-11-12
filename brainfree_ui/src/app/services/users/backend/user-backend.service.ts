import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {AppSettings} from "../../../app-settings";
import {User} from "../../../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserBackendService {

  url = `${AppSettings.URL}users`;

  constructor(private readonly http: HttpClient) {
  }


  getUser = (): Observable<User> => {
    return this.http.get<User>(this.url);
  }
}
