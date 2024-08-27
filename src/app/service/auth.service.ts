import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, user } from '../models/commonModules';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseurl = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  isLoggedIn() {
    return localStorage.getItem('userName') != null;
  }

  RegisterUserApi(data: user) {
    return this.http.post(this.baseurl+'/users',data);
  }
  LoginUserApi(data: Login) {
    return this.http.get<user[]>(this.baseurl+'/users?email=' + data.email + '&&password=' + data.password)
  }
}
