import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {WaterSourceReportService} from "../services/water_source_report.service";

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

  constructor(private _userService: UserService, private _router: Router, private _waterSourceReporrtsService:WaterSourceReportService) {
  }

  ngOnInit() {
    this.user = new User();
    this._waterSourceReporrtsService.getAll().then(res=>{
      console.log(res);
    });
  }

  login() {
    this.alert = undefined;
    console.log(this.user);
    if (this.user.email && this.user.password) {
      this._userService.login(this.user).then((res)=>{
        if(res){
          this._router.navigate(['home']);
        } else {
          this.alert = this._userService.getUser().name;
        }
      });
    } else {
      this.alert = "Please fill out all fields."
    }
  }

  register() {
    if (!this.showRegister) {
      this.showRegister = true;
    } else {
      if (this.user.email && this.user.password && this.user.type) {
        this._userService.register(this.user).then((res)=>{
          if(res){
            this._router.navigate(['home']);
          } else {
            this.alert =  this._userService.getUser().name;
          }
        });
      } else {
        this.alert = "Please fill out all fields."
      }
    }
  }
}
