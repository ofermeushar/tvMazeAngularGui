import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { ICrewCredits } from '../../models/ICrewCredits';
import { Show } from '../../models/IShow';

@Component({
  selector: 'app-person-crew',
  templateUrl: './person-crew.component.html',
  styleUrls: ['./person-crew.component.css']
})
export class PersonCrewComponent implements OnInit {
  @Input() personId;
  isDataAvaible: Boolean = false;
  crewCredits = new Array<{ type: String, show: Show }>();

  constructor(private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.tvMazeService.getPersonCrewCreditsByPersonId(this.personId).subscribe((crewCreditsResults: ICrewCredits[]) => {

      crewCreditsResults.forEach(entery => {
        this.tvMazeService.getByUrl(entery._links.show.href).subscribe((s: Show) => {
          this.crewCredits.push({ 'type': entery.type, 'show': s });
        });
      });
      this.isDataAvaible = true;
      console.log(this.crewCredits);

    });
  }

}
