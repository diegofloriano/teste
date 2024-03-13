import {Animal} from "./Animal"

export class Leao implements Animal{
    name: string;

    constructor(name:string){
        this.name = name;
    }
    mamifero(): boolean {
        return true;

    }
    ave(): boolean {
        return false;

    }

}