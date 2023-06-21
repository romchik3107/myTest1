export abstract class Cloth {
    name! : string;
    mat! : number;
    parameter!: number;
    constructor() {}
    show() {
        return "Назва = " + this.name + ". Всього матеріалу= " + this.mat.toFixed(2);
    }
    abstract S(): any;
}