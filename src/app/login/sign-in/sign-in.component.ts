import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user;
  hide: boolean = true;
  flag: boolean;
  constructor(private service: LoginService, private router: Router) {
    this.user = new User();
    this.flag = false
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.login(this.user).subscribe(result => {
      if (!!result) {
        console.log(result);
        localStorage.setItem('token', result.token)
        this.router.navigate(['../task/list'])
      }

    }, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) { this.flag = true }
      }
    })
  }
}
