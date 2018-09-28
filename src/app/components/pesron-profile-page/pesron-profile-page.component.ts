import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPerson } from '../../models/IPerson';
import { TvMazeService } from '../../services/tv-maze.service';
import { Person } from '../../models/Person';
import { ICastCredits } from '../../models/ICastCredits';
import { ICrewCredits } from '../../models/ICrewCredits';

@Component({
  selector: 'app-pesron-profile-page',
  templateUrl: './pesron-profile-page.component.html',
  styleUrls: ['./pesron-profile-page.component.css']
})
export class PesronProfilePageComponent implements OnInit {
  isDataAvaible: Boolean = false;
  person: Person;
  toDisplay: String = "Cast";
  constructor(private route: ActivatedRoute, private tvMazeService: TvMazeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');

      let personInfo: IPerson;
      let castcredits: ICastCredits[];
      let crewcredits: ICrewCredits[];
      this.tvMazeService.getPersonInfoById(id).subscribe((pi: IPerson) => {
        personInfo = pi;

        this.tvMazeService.getPersonCastCreditsByPersonId(id).subscribe((castc: ICastCredits[]) => {
          castcredits = castc;
          if (castc.length==0) {
            this.toDisplay="Crew";
          }

          this.tvMazeService.getPersonCrewCreditsByPersonId(id).subscribe((crewc: ICrewCredits[]) => {
            crewcredits = crewc;
              

            this.person = new Person(personInfo, castcredits, crewcredits);

            this.isDataAvaible = true;
          });
        });
      });
    });
  }

  onDisplayClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    this.toDisplay = target.textContent;
  }
}
