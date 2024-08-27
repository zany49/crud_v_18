import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './common/home-page/home-page.component';
import { CustomerComponent } from './common/customer/customer.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'homepage',
        canActivate:[authGuard],
        component: HomePageComponent
    },
    {
        path:'customer',
        canActivate:[authGuard],
        component: CustomerComponent
    }
];
