import { Injectable } from "@angular/core";
import { UserApiRepository } from "../user-api-repository/user-api.repository";
import { Observable } from "rxjs";
import { PaginatedUsers, UserApi, UserCreatedRequest } from "../user-api-model/user-api.model";

@Injectable({
    providedIn: 'root'
  })
  export class UserApiService {

    constructor(
        private userApiRepository: UserApiRepository
    ){}

    getUsers(page: number): Observable<PaginatedUsers> {
        return this.userApiRepository.getUsers(page)
    }

    getUserById(id: number): Observable<UserApi> {
      return this.userApiRepository.getUserById(id);
    }

    deleteUserById(id: number): Observable<UserApi> {
      return this.userApiRepository.deleteUserById(id);
    }

    addUser(body: UserCreatedRequest): Observable<UserCreatedRequest> {
      return this.userApiRepository.addUser(body);
    }

    updateUser(body: UserCreatedRequest, id: number): Observable<UserCreatedRequest> {
      return this.userApiRepository.updateUser(body, id);
    }

  }