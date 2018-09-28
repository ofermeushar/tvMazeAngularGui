export interface IPerson {
    id: number;
    name: String;
    birthday: Date;
    deathday:String;
    gender:String;
    image: {
        medium: String;
        original: String;
    };
    country:{
        name:String;
        code:String;
        timezone:String;
    };
}