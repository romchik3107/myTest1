import { IPlace } from "../interface/iplace";

export abstract class Region implements IPlace{
    latitude: string;
    longitude:string;
    name: string;
    abstract readonly region:string;
    constructor(name:string, latitude: string,longitude:string){
        this.latitude=latitude;
        this.longitude=longitude;
        this.name =name;
    }
}