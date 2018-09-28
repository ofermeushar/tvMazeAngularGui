import { Component, OnInit } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ISeason } from '../../models/ISeason';

@Component({
  selector: 'app-season-page',
  templateUrl: './season-page.component.html',
  styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent implements OnInit {
  isDataAvaible: Boolean = false;
  seasonInfo: ISeason;
  constructor(private route: ActivatedRoute, private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let seasonId = params.get('id');
      this.tvMazeService.getSeasonById(seasonId).subscribe((season: ISeason) => {
        this.seasonInfo = season;
        
      });
    });
    this.isDataAvaible=true;
  }

}
