import { Component, OnInit, Input } from '@angular/core';
import { TvMazeService } from '../../services/tv-maze.service';
import { ICastCredits } from '../../models/ICastCredits';
import { IShow, Show } from '../../models/IShow';
import { IPerson } from '../../models/IPerson';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-person-cast',
  templateUrl: './person-cast.component.html',
  styleUrls: ['./person-cast.component.css']
})
export class PersonCastComponent implements OnInit {
  @Input() personId;
  castcredits: Array<{ show: Show; character: IPerson }>;
  isDataAvaible: Boolean = false;

  constructor(private tvMazeService: TvMazeService) {
    this.castcredits = new Array<{ show: Show; character: IPerson }>();
  }

  ngOnInit() {
    this.tvMazeService.getPersonCastCreditsByPersonId(this.personId).subscribe((castCreditsResults: ICastCredits[]) => {

      castCreditsResults.forEach(entery => {
        this.tvMazeService.getByUrl(entery._links.show.href).subscribe((s: Show) => {
          this.tvMazeService.getByUrl(entery._links.character.href).subscribe((character: IPerson) => {
            this.castcredits.push({ 'show': s, 'character': character });
          });
        });
      });
      this.isDataAvaible = true;
      console.log(this.castcredits);
      
    });
    
  }

}
