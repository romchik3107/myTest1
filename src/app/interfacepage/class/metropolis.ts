import { IPlace } from "../interface/iplace";
import { IShow } from "../interface/ishow";
import { IInfo } from "../interface/iinfo";

export class Metropolis  implements IPlace, IInfo {
    name:string;
    latitude: string;
    longitude: string;
    population: number;

    constructor(name:string, latitude: string, longitude: string, population: number, shower: IShow){
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.name=name;
        shower.show("Назва: " + this.name + " ,Широта мегаполісу: " + this.latitude + " ,Довгота мегаполісу: " + this.longitude + 
        " ,Кількість населення: " + this.population);
    }

    info() {
        return "Я велике густонаселене місто";
    }
}