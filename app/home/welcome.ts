import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'home',
  templateUrl: 'app/welcome/welcome.html',
  styleUrls: [
    'app/welcome/welcome.css'
  ]
})
export class WelcomeComponent implements OnInit {
  showLogin = false;
  showRegister = false;
  user: User;
  alert: string;

  constructor(private _userService:UserService) {
  }

  ngOnInit() {
    this.user = new User();
    console.log(this.user);
  }

  login() {
    alert = undefined;
    console.log(this.user);
    if (this.user.email && this.user.password) {
        this._userService.login(this.user);
    } else {
      this.alert = "Please fill out all fields."
    }
  }

  register(){
    if(!this.showRegister){
      this.showRegister = true;
    } else {
      if(this.user.email && this.user.password && this.user.type){
        this._userService.register(this.user);
      }else {
        this.alert = "Please fill out all fields."
      }
    }
  }
}
