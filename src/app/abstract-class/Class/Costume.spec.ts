import { Costume } from "./Costume";

describe('Costume Testing', () =>{
    let costume:Costume;
    beforeEach(()=>
    {
        costume = new Costume ("Costume",10);
    }
    )
    it("Створення екземпляру класу", ()=>{
        expect(costume).toBeTruthy();
    })
    it("Розрахунок кількості матеріалу для костюма з зростом 10", () =>{
        costume.S();
        let s= costume.mat;
        let p = (2*10)+0.3;
        expect(s.toFixed(2)).toBe(p.toFixed(2));
    })

});