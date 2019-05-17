import { PersonInterface as Person } from '@interfaces/person';

class PersonController implements Person {

    public fullName: string;

    constructor(private name: string) {}

    getName() {
        return this.name;
    }

    getFullName() {
        this.fullName;
    }
}
export { PersonController };