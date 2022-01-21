import { Injectable } from '@angular/core';
import {CredentialsDto} from "../../dtos/auth/credentials.dto";
import {Observable} from "rxjs";
import {LoginResponseDto} from "../../dtos/auth/login.response.dto";
import {API} from "../../config/api.config";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(API.login, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    return !! localStorage.getItem('token');
  }
}
