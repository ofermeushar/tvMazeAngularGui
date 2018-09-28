import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// import { DisplayTypeEnum } from '../models/display-type-enum.enum';
import { IEpisode } from '../models/IEpisode';
import { IPerson } from '../models/IPerson';
import { ICastCredits } from '../models/ICastCredits';
import { ICrewCredits } from '../models/ICrewCredits';
import { Person } from '../models/Person';

@Injectable()
export class TvMazeService {

  contentObs: Observable<Object>;
  toDisplay: Array<Object>;
  content: Object;

  constructor(private http: HttpClient) { }

  getShowByName(name: String) {
    return this.http.get(" http://api.tvmaze.com/search/shows?q=" + name);
  }
  getShowById(id: String) {
    return this.http.get(" http://api.tvmaze.com/shows/" + id);
  }
  getByUrl(url: String) {
    return this.http.get(url.toString());
  }
  getSeasonsByShowId(id: String) {
    return this.http.get("http://api.tvmaze.com/shows/" + id + "/seasons");
  }
  getCastByShowId(id: String) {
    return this.http.get("http://api.tvmaze.com/shows/" + id + "/cast");
  }
  getCrewByShowId(id: String) {
    return this.http.get("http://api.tvmaze.com/shows/" + id + "/crew");
  }

  getSeasonById(id:String){
    return this.http.get("http://api.tvmaze.com/seasons/" + id);
  }
  getSeasonEpisodesBySeasonId(id:String){
    return this.http.get("http://api.tvmaze.com/seasons/" + id+"/episodes");
  }
  getEpisodeById(id:String){
    return this.http.get("http://api.tvmaze.com/episodes/" + id);
  }
  getEpisode(showId:String,seasonNumber:String,episodeNumber:String){
    return this.http.get(" http://api.tvmaze.com/shows/"+showId+"/episodebynumber?season="+seasonNumber+"&number="+episodeNumber);

  }
getScheduleEpisodesListByDate(date:string){
  return this.http.get("http://api.tvmaze.com/schedule?date="+date);

}
  getCompletePersonById(id: String) {
    let personInfo: IPerson;
    let castcredits: ICastCredits[];
    let crewcredits: ICrewCredits[];
    let person: Person;
    this.getPersonInfoById(id).subscribe((pi: IPerson) => {
      personInfo = pi;

      this.getPersonCastCreditsByPersonId(id).subscribe((castc: ICastCredits[]) => {
        castcredits = castc;

        this.getPersonCrewCreditsByPersonId(id).subscribe((crewc: ICrewCredits[]) => {
          crewcredits = crewc;

          person = new Person(personInfo, castcredits, crewcredits);
          console.log(person);
        });
      });

    });
  }

  getPersonInfoById(id: String) {
    return this.http.get("http://api.tvmaze.com/people/" + id);
  }
  getPersonCastCreditsByPersonId(id: String) {
    return this.http.get("http://api.tvmaze.com/people/" + id + "/castcredits");
  }
  getPersonCrewCreditsByPersonId(id: String) {
    return this.http.get("http://api.tvmaze.com/people/" + id + "/crewcredits");
  }



  // getSeasonEpisodesById(id: number): Observable<IEpisode[]> {

  //   this.http.get(" http://api.tvmaze.com/seasons/" + id + "/episodes").subscribe((res: Array<Object>) => {
  //     this.toDisplay = res;
  //     console.log("getSeasonEpisodesById: ");
  //     console.log(this.toDisplay);

  //   });
  //   return this.http.get<IEpisode[]>(" http://api.tvmaze.com/seasons/" + id + "/episodes");

  // }

  
  // getShowSeasonsByName(name: String) {
  //   this.http.get(" http://api.tvmaze.com/singlesearch/shows?q=" + name + "&embed=seasons").subscribe((res: Array<Object>) => {
  //     this.toDisplay = res;
  //     // this.displayType=DisplayTypeEnum.ShowPage;
  //     console.log("getShowSeasonsByName: ");
  //     console.log(this.toDisplay);
  //   });
  //   //return this.http.get(" http://api.tvmaze.com/singlesearch/shows?q="+name+"&embed=seasons");
  // }
}
