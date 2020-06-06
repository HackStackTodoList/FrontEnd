import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/shared/warning/warning.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user;
  password;
  hide: boolean = true;
  constructor(private service: LoginService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar) {
    this.user = new User();
  }

  ngOnInit(): void {

  }
  onSubmit() {
    this.service.register(this.user).subscribe(
      result => {
        if (!!result) {
          console.log(result);
          localStorage.setItem('token', result.token)
          this.snackbar.open("Registration done successfully", "Dismiss", { duration: 2000 })
          this.router.navigate(['../task/list'])
        }

      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            const dialogRef = this.dialog.open(WarningComponent, {
              data: err.error
            });

          }
        }
      }
    )
  }
}
