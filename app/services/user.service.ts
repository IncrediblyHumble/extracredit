import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "./api";
import {User} from "../models/user.model";


@Injectable()
export class UserService {
  private baseUrl: string = "localhost:4567/";
  user: User;

  constructor(private _http: Http, private _api: ApiService) {
  }

  login(u: User) {
    return this._api.post('login', u).then((res:User)=> {
      this.user = res;
      return res.email != undefined;
    })
  }

  register(u: User) {
    return this._api.post('addUser', u).then((res:User)=> {
      this.user = res;
      return res.email != undefined;
    })
  }

  isLoggedIn() {
    return this.user != undefined;
  }

  logout() {
    this.user = undefined;
  }

  getUser() {
    return this.user
  }
  update(u:User){
    return this._api.post('updateUser', u).then((res:User)=> {
      this.user = res;
      return true;
    });
  }
}
