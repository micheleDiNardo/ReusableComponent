import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginatedUsers, UserApi, UserCreatedRequest } from "../user-api-model/user-api.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class UserApiRepository {
    private apiUrl = 'https://reqres.in/api/users';
  
    constructor(private http: HttpClient) {}
  
    getUsers(page: number): Observable<PaginatedUsers> {
      return this.http.get<PaginatedUsers>(`${this.apiUrl}?page=${page}`);
    }

    getUserById(id: number): Observable<UserApi> {
      return this.http.get<UserApi>(`${this.apiUrl}/${id}`);
    }

    deleteUserById(id: number): Observable<any> {
      return this.http.delete<any>(`${this.apiUrl}/${id}`);
    }

    addUser(body: UserCreatedRequest): Observable<UserCreatedRequest> {
      return this.http.post<UserCreatedRequest>(`${this.apiUrl}`, body);
    }
  }