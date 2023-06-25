export class Subject {
    name:string = "";
    number_of_credits: number=0;
    teacher_name:string="";
    rank:string = "";
    term:string = "";
    group: string[]=[];
    constructor(name: string, n: number, tn:string, r:string, t:string, g:string[]){
        this.name=name;
        this.number_of_credits=n;
        this.rank =r;
        this.teacher_name=tn;
        this.term=t;
        this.group =g;
    }
}