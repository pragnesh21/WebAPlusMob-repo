import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateUserDto, UpdateUserDto } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = `${environment.apiBaseUrl}/Users`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/getuserslist`);
  }

  createUser(user: CreateUserDto): Observable<any> {
    debugger
    return this.http.post<any>(`${this.apiUrl}/createUser`, user);
  }

  updateUser(id: string, user: UpdateUserDto): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/updateUser/${id}`, user);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteUser/${id}`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUserById/${id}`);
  }
}
