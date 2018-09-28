import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TvMazeService } from '../../services/tv-maze.service';
import { Show } from '../../models/IShow';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})

  
export class ShowPageComponent implements OnInit {
   isDataAvaible: Boolean = false;
  private show: Show;
  public toDisplay :String = "Seasons";

  constructor(private tvMazeServics: TvMazeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.tvMazeServics.getShowById(id).subscribe((show: Show) => {
        this.show = show;
        this.isDataAvaible = true;
      });
    });
  }

  onDisplayClick(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.toDisplay= target.textContent;   
  }
}

