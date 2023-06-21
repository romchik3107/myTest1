import { Cloth } from "./Cloth";

export class Costume extends Cloth {
    constructor(override name: string, override parameter:number)
    {
        super();
    }
    S(){
        this.mat= (2*this.parameter)+0.3;
    }
}