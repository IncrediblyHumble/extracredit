import {Injectable, OnInit} from '@angular/core';
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {ApiService} from "./api";
import {User} from "../models/user.model";


@Injectable()
export class UserService implements OnInit {
  private baseUrl: string = "localhost:4567/";
  user:User;
  constructor(private _http: Http, private _api:ApiService) {
  }

  login(u:User) {
    return this._api.post('login',u).then(res=>{
      this.user = res;
      return true;
    })
  }
  register(u:User){
    return this._api.post('addUser',u).then(res=>{
      this.user = res;
        console.log(res);
    })
  }
  isLoggedIn(){
    return this.user != undefined;
  }
  logout(){
    this.user=undefined;
  }
}
