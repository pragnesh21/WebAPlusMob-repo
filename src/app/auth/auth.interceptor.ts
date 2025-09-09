import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError,finalize  } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service'; 
import { LoaderService } from '../shared/loader/loader.service';


export const AuthInterceptorFn: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
   const authService = inject(AuthService);
    const loader = inject(LoaderService);

  const token = localStorage.getItem('token');

  console.log("Interceptor token:", token); // ✅ Debug

  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
 loader.show(); 
  return next(authReq).pipe(
    catchError(err => {
      if (err.status === 401) {
        authService.logout();
        //  localStorage.clear();
        // sessionStorage.clear();
        // router.navigate(['/login']);
      }
      return throwError(() => err);
    }),
    finalize(() => loader.hide()) 
  );
};
