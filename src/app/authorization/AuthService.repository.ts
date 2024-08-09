import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthRepositoryService {
    private apiUrl = 'https://reqres.in/api/login';
  
    constructor(private http: HttpClient) {}
  
    login(email: string, password: string): Observable<any> {
      const body = { email, password };
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
      const token = this.http.post(this.apiUrl, body, { headers });
      return token;
    }
  }