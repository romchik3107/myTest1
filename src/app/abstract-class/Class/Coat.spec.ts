import { Coat } from "./Coat";

describe('Coat Testing', () =>{
    let coat:Coat;
    beforeEach(()=>
    {
        coat = new Coat ("Coat",10);
    }
    )
    it("Створення екземпляру класу", ()=>{
        expect(coat).toBeTruthy();
    })
    it("Розрахунок кількості матеріалу для пальто з розміром 10", () =>{
        coat.S();
        let s= coat.mat;
        let p = (10 / 6.5)+0.5;
        expect(s.toFixed(2)).toBe(p.toFixed(2));
    })

});