import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from '../model/jwRequest';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {}

  login(request: JwtRequest){
    return this.http.post('http://localhost:8080/authenticate', request);
  }

  verificar() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      let token = sessionStorage.getItem('token');
      return token != null;
    }
    return false;
  }


  showRole() {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      let token = sessionStorage.getItem('token');
      if (!token) {
        return null;
      }
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      return decodedToken?.role;
    }
    return null;
  }
}

