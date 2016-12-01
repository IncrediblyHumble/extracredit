import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "./api";
import {User} from "../models/user.model";


@Injectable()
export class UserService {
  user: User;

  constructor(private _http: Http, private _api: ApiService) {
  }

  login(u: User) {
    return this._api.post('login', u).then((res: User)=> {
      this.user = res;
      console.log(res);
      localStorage.setItem('ihu', JSON.stringify(this.user));
      return res.email != undefined;
    })
  }

  register(u: User) {
    return this._api.post('addUser', u).then((res: User)=> {
      this.user = res;
      localStorage.setItem('ihu', JSON.stringify(this.user));
      return res.email != undefined;
    })
  }

  localLogin() {
    let user = JSON.parse(localStorage.getItem('ihu'));
    if (user) {
      this.user = user;
    }
  }

  isLoggedIn() {
    return this.user != undefined;
  }

  logout() {
    localStorage.removeItem('ihu');
    this.user = undefined;
  }

  getUser() {
    return this.user
  }

  update(u: User) {
    return this._api.post('updateUser', u).then((res: User)=> {
      this.user = res;
      return true;
    });
  }
}
