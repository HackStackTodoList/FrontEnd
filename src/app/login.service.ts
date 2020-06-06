import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  loginUrl: string = "http://localhost:3000/api/login";
  registerUrl: string = "http://localhost:3000/api/register";
  nameUrl:string="http://localhost:3000/api/user-name"
  login(user: User): Observable<any> {
    return this.http.post<any>(this.loginUrl, user);
  }
  register(user: User): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token')
  }
  getUsername(){
    return this.http.get<any>(this.nameUrl)
  }
}
