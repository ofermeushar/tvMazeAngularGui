import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-drop-down',
  templateUrl: './auth-drop-down.component.html',
  styleUrls: ['./auth-drop-down.component.css']
})
export class AuthDropDownComponent implements OnInit {

  username: String = '';
  user: any;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.getUser().subscribe(
        data => {console.log('auth constructor data')
          this.addName(data)
        },
        error => {console.log('auth constructor error')
        console.error(error);
        
          this.router.navigate(['/login'])
        }
      );
  }

  ngOnInit() {
  }

  addName(user): any {
    this.user = user;
  }

  onActionClick() {
   console.log(this.user);
  }

  onLogoutClick() {
    this.authService.logout()
      .subscribe(
        data => {
           console.log(data); 
           this.user=null;
           this.router.navigate(['/login']) },
        error => console.error(error)
      )
  }
}
