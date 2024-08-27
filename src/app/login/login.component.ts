import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../models/commonModules';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginData : Login = {
    email: '',
    password:''
  }
  constructor(
    private authService:AuthService,
    private router:Router
  ){}
  ngOnInit(): void {
    localStorage.clear()
  }

  LoginUser(form:any){
    console.log("form valid-->",form.valid)
    if(form.valid){
      this.authService.LoginUserApi(form.value).subscribe(
        data=>{
          console.log(data)
        if(data.length>0){
          localStorage.setItem('userName',data?.[0]?.userName as string)
          localStorage.setItem('userData',JSON.stringify(data?.[0]))

          this.router.navigateByUrl('/homepage')
        }
        }

      )
    }
  }
}
