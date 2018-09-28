import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });
  constructor(private authService: AuthService, private router: Router, private ngFlashMessageService: NgFlashMessageService) { }

  ngOnInit() {

  }

  login() {
    if (!this.loginForm.valid) {
      console.log('Invalid Form');
      return;
    }

    this.authService.autenticateUser(JSON.stringify(this.loginForm.value))
      .subscribe((data) => {
        console.log('after login');
        console.log(data);
        this.router.navigate(['/'])
      });

  }
}
