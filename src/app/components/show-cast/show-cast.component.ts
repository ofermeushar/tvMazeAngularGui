import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { IActor } from '../../models/IActor';

@Component({
  selector: 'app-show-cast',
  templateUrl: './show-cast.component.html',
  styleUrls: ['./show-cast.component.css']
})
export class ShowCastComponent implements OnInit {
  @Input() showId;
  isDataAvaible: Boolean = false;
  cast: IActor[];
  constructor(private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.tvMazeService.getCastByShowId(this.showId).subscribe((cast: IActor[]) => {
      this.cast = cast;
      this.isDataAvaible=true;
    });
  }
 
}
