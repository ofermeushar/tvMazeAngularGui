import { INetwork } from "./INetWork";
import { IEpisode } from "./IEpisode";

export interface ISeason{
    id:number;
    url:String;
    number:number;
    name:String;
    episodeOrder:number;
    premiereDate:String;
    endDate:String;
    network:INetwork;
    image: {
        medium: String;
        original: String;
    };
    summary: String;
    episodes:IEpisode[];
}