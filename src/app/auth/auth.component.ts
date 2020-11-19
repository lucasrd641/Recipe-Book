import { HttpErrorResponse } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoading = false;
  isLoginMode = true;
  error: string = null;
  authForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(): void {
    let authObs: Observable<AuthResponseData>;
    if (this.authForm.invalid) {
      return;
    }
    const formValue = this.authForm.value;
    const email = formValue.email;
    const password = formValue.password;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.auth.login(email, password);
    } else {
      authObs = this.auth.signup(email, password);
    }
    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      (errorResponse) => {
        this.error = errorResponse;
        this.isLoading = false;
      }
    );
    console.log(this.authForm.value);
    this.authForm.reset();
  }
}
