import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { Show } from '../../models/IShow';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {
  @Input('showId') id: String;
  show: Show;
  isDataAvaible: Boolean =false;

  constructor(private tvMazeService: TvMazeService, private router:Router) { }

  ngOnInit() {
    this.tvMazeService.getShowById(this.id).subscribe((show: Show) => {
      this.show = show;
      this.isDataAvaible=true;
    });
  }

  onShowCardClick(){
      this.router.navigate(['/showPage',this.show.id])
  }
}
