import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ValidatorTermService {

validateTerm(term: string): boolean {
    const validTerms = ["Перший", "Другий"];
    const regex = /^\d{4}$/;
  
    const [season, year] = term.split(" ");
    if (!validTerms.includes(season) || !regex.test(year)) {
      return false;
    }
    const currentYear = new Date().getFullYear();
    if (Number(year) < currentYear - 10 || Number(year) > currentYear + 10) {
      return false;
    }
    return true;
  }
constructor() { }
}