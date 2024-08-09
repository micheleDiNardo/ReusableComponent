import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  loginFailed: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.createForm()
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl("eve.holt@reqres.in", [Validators.required]),
      password: new FormControl("cityslicka", [Validators.required])
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      this.authService.login(email, password).subscribe({
        next: (data: any) => {
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.loginFailed = true; 
        }
      });
    }
  }
  

}
