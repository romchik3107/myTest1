import { Cloth } from "./Cloth";

export class Coat extends Cloth {
    constructor(override name: string, override parameter:number)
    {
        super();
    }
    S(){
        this.mat= (this.parameter / 6.5)+0.5;
    }
}