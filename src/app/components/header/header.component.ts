import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { Router } from '@angular/router';
import { IShow } from '../../models/IShow';
import { AuthService } from '../../services/auth.service';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchValue = "girls";
  user: any;

  constructor(private tvMazeService: TvMazeService,
    private authService: AuthService,
    private router: Router,
    private ngFlashMessageService: NgFlashMessageService
  ) {
    console.log('constructor');

   
  }

  ngOnInit() {
    console.log('ngOnInit');
    // this.authService.getUser()
    // .subscribe(
    //   data=>this.user=data,
    //   error=>this.router.navigate(['/login'])
    // )
    
    // this.user = this.getCurrUserfromAuthService();
  }
  onSearchClick() {
    this.tvMazeService.getShowByName(this.searchValue).subscribe((shows: Array<IShow>) => {
      let showsIds = new Array();
      shows.forEach(show => {
        showsIds.push(show.show.id);
      });
      console.log(shows);
      console.log(showsIds);

      this.router.navigate(['/searchResultsPage', { showsIds: showsIds }]);
    });
  }
  // onLogoutClick() {
  //   this.authService.logout()
  //   .subscribe(
  //     data=>{console.log(data);this.router.navigate(['/login'])},
  //     error=>console.error(error)
  //   )
  // }

 

  getUserNameFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user'));
  }
  // getCurrUserfromAuthService() {
  //   this.authService.getUser().subscribe(data => {
  //     this.user = data;
  //   });
  // }

  isLogged() {
    return this.user !== undefined ? true : false;
  }
}

