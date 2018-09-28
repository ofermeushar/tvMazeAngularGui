import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    username: new FormControl(null, Validators.required),
    name: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    cpass: new FormControl(null, Validators.required)
  });
  isValidPass:boolean =false;
  constructor(private authService: AuthService,
    private ngFlashMessageService: NgFlashMessageService,
    private router: Router) { }

  ngOnInit() {
  }

  onPasswordChange(pass,cpass){
    this.isValidPass =this.registerForm.controls.password.value==this.registerForm.controls.cpass.value;
    console.log(this.isValidPass);
  }

  moveToLogin() {
    this.router.navigate(['/login']);
  }

  register() {
    if (!this.registerForm.valid ||
      (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)) {
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Invalid form"],
        dismissible: false,
        timeout: 1000,
        type: 'danger'
      });
      return;
    }
    this.authService.registerUser(this.registerForm.value).subscribe(
      (data) => {
        if (data) {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["You are now registered."],
            dismissible: false,
            timeout: 1000,
            type: 'success'
          });
          this.router.navigate(['/login']);
        } else {
          this.ngFlashMessageService.showFlashMessage({
            messages: ["somthing went worng"],
            dismissible: false,
            timeout: 1000,
            type: 'danger'
          });
        }
      }
    );
    // console.log(this.registerForm.value);

    // this.userService.register(JSON.stringify(this.registerForm.value)).subscribe(data=>{
    //   console.log(data); this.router.navigate(['/login']);
    //   error=>console.error(error);

    // })
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
