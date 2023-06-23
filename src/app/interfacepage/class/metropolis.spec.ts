import { Show_Console } from "./show_console";
import { Show_Desktop } from "./show_desktop";
import { City } from "./city";
import { Metropolis } from "./metropolis";

describe('City and Metropolis Testing', () => { 
    let shower: Show_Console;
    let shower1: Show_Desktop;
    let city: City;
    let metropolis: Metropolis; 
    // Перед виконанням усіх тестів створимо екземляр класу
    beforeEach(() => {
    shower = new Show_Console();
    shower1 = new Show_Desktop(); 
    city = new City("Львів", "49°50′33″ пн. ш.", "24°01′56″ сх. д.", shower); 
    metropolis = new Metropolis("Київ","50°27′00″ пн. ш.", "30°31′25″ сх. д.", 2952301, shower1);
    })

    // тестуємо чи створили екземпляр класу 
    it("Створення екземляру класу shower", () => {
         expect(shower).toBeTruthy();
    })

    // тестуємо чи створили екземпляр класу 
    it("Створення екземляру класу Shower Desktop", () => {
        expect(shower1).toBeTruthy();
    })

    // тестуємо чи створили екземпляр класу 
    it("Створення екземляру класу Steamer", () => {
        expect(city).toBeTruthy();
    }) 
    
    //тестуємо чи створили екземпляр класу
    it("Створення екземляру класу corvette", () => {
        expect(metropolis).toBeTruthy();
    })
});