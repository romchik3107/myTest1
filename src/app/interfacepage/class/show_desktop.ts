import { IShow } from "../interface/ishow";
export class Show_Desktop implements IShow{
    info: string = "";
    show(s:string){
        this.info = "  "+s;
    }
}