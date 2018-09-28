import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { IPerson } from '../../models/IPerson';

@Component({
  selector: 'app-show-crew',
  templateUrl: './show-crew.component.html',
  styleUrls: ['./show-crew.component.css']
})
export class ShowCrewComponent implements OnInit {
  @Input() showId;
  isDataAvaible: Boolean = false;
  crew: { type: String, person: IPerson }[];

  constructor(private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.tvMazeService.getCrewByShowId(this.showId).subscribe((crew: { type: String, person: IPerson }[]) => {
      this.crew = crew;
      console.log(crew);

      this.isDataAvaible = true;
    });
  }

}
