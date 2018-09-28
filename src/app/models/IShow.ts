import { INetwork } from "./INetWork";

export class Show {

    id: number;
    name:String;
    url: String;
    language: String;
    genres: String[];
    status: String;
    runtime: number;
    premiered: String;
    officialSite: String;
    schedule: {
        time: String;
        days: String[];
    };
    rating: { average: number; };
    netWork: INetwork;
    image: {
        medium: String;
        original: String;
    };
    summary: String;
}

export class IShow {
    score: number;
    show: {
        id: number;
        url: String;
        language: String;
        genres: String[];
        status: String;
        runtime: number;
        premiered: String;
        officialSite: String;
        schedule: {
            time: String;
            days: String[];
        };
        rating: { average: number; };
        netWork: INetwork;
        image: {
            medium: String;
            original: String;
        };
        summary: String;
    }
}