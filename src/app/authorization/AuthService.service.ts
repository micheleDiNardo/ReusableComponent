import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthRepositoryService } from "./AuthService.repository";

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

    constructor(
        private authRepo: AuthRepositoryService
    ) {}

    login(email: string, password: string): Observable<any> {
        return this.authRepo.login(email, password).pipe(
          tap((response: any) => {
            if (response.token) {
              localStorage.setItem("token", response.token);
            }
          })
        );
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem("token");
    }

    logout() {
        localStorage.clear();
    }

}