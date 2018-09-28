import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { ISeason } from '../../models/ISeason';
import { IEpisode } from '../../models/IEpisode';

@Component({
  selector: 'app-show-seasons',
  templateUrl: './show-seasons.component.html',
  styleUrls: ['./show-seasons.component.css']
})
export class ShowSeasonsComponent implements OnInit {
  @Input() showId;
   isDataAvaible: Boolean = false;
  private seasons: ISeason[];
  constructor(private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.tvMazeService.getSeasonsByShowId(this.showId).subscribe((seasons: ISeason[]) => {
      this.seasons = seasons;
      this.seasons.forEach((season:ISeason)=>{
        this.tvMazeService.getSeasonEpisodesBySeasonId(season.id.toString())
        .subscribe((episodes:IEpisode[])=>{
          season.episodes=episodes;
        });
      });
      console.log(this.seasons);
      
      this.isDataAvaible=true;
    });
  }

}
