import { Show } from "./IShow";

export interface IEpisode{
    id:number;
    url:String;
    name: String;
    season:number;
    number:number;
    airdate:String;
    airtime:String;
    runtime:number;
    image:{
        medium:String;
        original:String;
    };
    summary:String;
    _links:Object;
    show:Show;
}