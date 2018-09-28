export interface IActor {
    person: {
        id: number;
        name: String;
        birthday: String;
        image: {
            medium: String;
            original: String;
        };
    };
    character: {
        id: number;
        name: String;
        image: {
            medium: String;
            original: String;
        };
    };
}