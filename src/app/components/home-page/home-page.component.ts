import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { IEpisode } from '../../models/IEpisode';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  user;
  constructor(private tvMazeService: TvMazeService
    , private router: Router
    , public authService: AuthService) {

    this.authService.getUser().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error(error);
      }
    );
  }

  ngOnInit() {

    // this.redirectToLastEpisodesSearchResaults();
  }
  onActionClick() {
    console.log(this.authService.isLogged());
    this.authService.getUser().subscribe(
      data => console.log(data),
      error => console.error(error)
    );
  }
  addUser(user) {
    this.user = user;
  }
  isLogged() {
    return this.user !== undefined ? true : false;
  }
  redirectToLastEpisodesSearchResaults(): any {
    let today = new Date().toISOString().split("T")[0];
    this.tvMazeService.getScheduleEpisodesListByDate(today).subscribe((episodes: IEpisode[]) => {
      let episodesSorted: IEpisode[] = episodes.sort((a, b) => {
        if (a.show.rating.average < b.show.rating.average) {
          return 1;
        }
        if (a.show.rating.average > b.show.rating.average) {
          return -1;
        }
        return 0;
      });
      let idsList = new Array();
      episodesSorted.forEach((episode: IEpisode) => {
        idsList.push(episode.show.id);
      });
      idsList = Array.from(new Set(idsList));
      console.log(idsList);

      this.router.navigate(['/searchResultsPage', { showsIds: idsList }])
    });
  }
}
