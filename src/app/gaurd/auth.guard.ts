import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let service = inject(AuthService)

  if(service.isLoggedIn()){
    return true;
  }else{
    alert('Unauthorized access.')
    router.navigateByUrl('/login');
    return false
  }
};
