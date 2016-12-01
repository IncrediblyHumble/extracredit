import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";
import {Router} from '@angular/router';
import {WaterSourceReportService} from "../services/water_source_report.service";

@Component({
  selector: 'home',
  templateUrl: 'app/home/home.html',
  styleUrls: [
    'app/home/home.css'
  ]
})
export class HomeComponent implements OnInit {
  user: User;
  alert: string;
  viewProfile:boolean;
  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this.user = this._userService.getUser();
  }

  logout() {
    this._userService.logout();
    this._router.navigate(['']);
  }

  updateInfo(){
    this._userService.update(this.user);
  }

  gotoCSR(){
    this._router.navigate(['csr']);
  }
  gotoVSR(){
    this._router.navigate(['vsr']);
  }
}
