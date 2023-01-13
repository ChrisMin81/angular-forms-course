import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  val = {
    email: 'christian@minatti.tirol',
    password: '123456'
  }

  constructor() {


  }

  ngOnInit() {

  }

  logLogin(loginForm: NgForm, $event: any) {
    console.log(loginForm.value, loginForm.valid, $event)
    console.log(this.val)
  }
}
