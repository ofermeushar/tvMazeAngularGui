import { IPerson } from "./IPerson";
import { ICastCredits } from "./ICastCredits";
import { ICrewCredits } from "./ICrewCredits";

export class Person {
    iperson:IPerson;
    castCredits:ICastCredits[];
    crewCredits:ICrewCredits[];
    constructor(iPerson,castCredits,crewCredits) {
        this.iperson=iPerson;
        this.castCredits=castCredits;
        this.crewCredits=crewCredits;
    }
}