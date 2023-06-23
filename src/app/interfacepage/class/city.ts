import { IShow } from "../interface/ishow";
import { Region } from "./region";
import { Random } from "./random";
import { IInfo } from "../interface/iinfo";

export class City extends Region implements IInfo{
    get region(){
        let rnd = new Random();
        let t = rnd.getRandomInt(3);
        if(t == 0){
            return "Адміністрація: муніципалітет";
        }
        else if(t == 1){
            return "Адміністрація: міська рада";
        }
        else{
            return "Адміністрація: ратуша";
        }

    }
    constructor(name:string, latitude: string,longitude:string, shower: IShow){
        super(name,latitude, longitude);
        shower.show("Назва: " + this.name + " ,Широта: " + this.latitude + " ,Довгота: " + this.longitude
        + " " + this.region);
    }
    info() {
        return "Я місто";
    }
}