import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CommonService } from '../container/common-service/common.service';
import { IUser } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar,
    public commonService: CommonService
  ) {
    this.loadForm();
  }
  loadForm() {
    this.loginForm = this.fb.group({
      userName: ['123456', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      password: ['12345678', [Validators.required, Validators.minLength(8)]]
    })
  }
  loginData(data: IUser) {
    let user: IUser = {
      userName: data.userName,
      password: data.password
    }
    console.log(user);
    this.commonService.login(user)
      .subscribe(res => this.loginSuccess(res),
        err => this.errorHandle(err))

  }
  loginSuccess(data) {
    if (data.code === "200") {
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('currentUser', JSON.stringify(data))
      this.router.navigate(['/post-list']);
      this.snackBar.open(data.message, 'Dismiss', { duration: 3000 });
    }
  }

  errorHandle(error) {
    console.log(error.error.message)
    this.snackBar.open(error.error.message, 'Dismiss', { duration: 3000 });
  }
  get f() { return this.loginForm.controls; }
  ngOnInit() {
  }

}
