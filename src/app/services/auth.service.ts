import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import {LoginRequest,LoginResponse}  from '../models/login.model'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private apiUrl = `${environment.apiBaseUrl}/Account`;
  constructor(private http: HttpClient, private router: Router) {}

  login(model: LoginRequest): Observable<LoginResponse> {
    debugger
    return this.http.post<LoginResponse>(`${this.apiUrl}/SignIn`, model).pipe(
      tap((res: LoginResponse) => {
        // store token in sessionStorage (auto-clears when browser closed)
        // sessionStorage.setItem('token', res.Token);
        // sessionStorage.setItem('userName', res.UserName);
        // sessionStorage.setItem('roles', JSON.stringify(res.Roles));

  const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + 720); //
  localStorage.setItem('expiresAt', expiresAt.toISOString());
      // store token persistently
      localStorage.setItem('token', res.token);
      localStorage.setItem('userName', res.userName);
      localStorage.setItem('email', res.email);
      localStorage.setItem('roles', JSON.stringify(res.roles));

      // mark that session is active
     // sessionStorage.setItem('sessionActive', 'true');

      })
    );
  }

  logout() {
   // sessionStorage.clear();
  // localStorage.clear();


      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('email');
      localStorage.removeItem('roles');

    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    //return sessionStorage.getItem('token');
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
