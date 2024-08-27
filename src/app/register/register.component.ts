import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Roles, user } from '../models/commonModules';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AuthService } from '../service/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatCardModule,
    ReactiveFormsModule,
    FormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {


  rolesList:Roles[]=[
    {value:'admin',viewValue:'Admin'},
    {value:'customer',viewValue:'Customer'}

  ]
  registerForm = new FormGroup({
    userName: new FormControl('',Validators.compose([Validators.required, Validators.max(50)])),
    email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
    gender:new FormControl('male',Validators.compose([Validators.required])),
    password:new FormControl('',Validators.compose([Validators.required, Validators.min(8),Validators.max(16)])),
    role:new FormControl('',Validators.compose([Validators.required])),
    term:new FormControl('')
  })

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  ngOnInit(): void {
    localStorage.clear()
  }

  RegisterUser():void{
    if(this.registerForm.valid){
      console.log("Register--->",this.registerForm.value)
      if(this.registerForm.value.term){
        let data:user = {
          userName:this.registerForm.value.userName as string ,
          email: this.registerForm.value.email  as string,
          gender:this.registerForm.value.gender  as string,
          password:this.registerForm.value.password  as string ,
          role:this.registerForm.value.role  as string,
          // term:this.registerForm.value.term
        }
        this.authService.RegisterUserApi(data).subscribe(item=>{
          alert("User registration Sucessful")
          this.router.navigateByUrl('/login')
        })
      }else{
        alert("Terms and Conditions Required")
      }
    }
  }

}
