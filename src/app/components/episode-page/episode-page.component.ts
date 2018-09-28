import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IEpisode } from '../../models/IEpisode';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.css']
})
export class EpisodePageComponent implements OnInit {
  isDataAvaible: Boolean = false;
  episode: IEpisode;
  seasonId: string;

  constructor(private tvMazeService: TvMazeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params);
      let episodeId = params.get("episodeId");
      this.seasonId = params.get("seasonId");
      this.tvMazeService.getEpisodeById(episodeId).subscribe((episode: IEpisode) => {
        this.episode = episode;
        this.isDataAvaible = true;
      });
      // this.tvMazeService.getSeasonEpisodesBySeasonId(this.seasonId)
      //   .subscribe((episodes: IEpisode[]) => {

      //   });
    });

  }
  onPreviousEpisodeClick() {
    
  }
  onNextEpisodeClick() { }
}
