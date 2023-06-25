import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class ValidatorCreditsService {

    validateNumberOfCredits(numberOfCredits: number): boolean {
        const minCredits = 3;
        const maxCredits = 6;
        if (numberOfCredits < minCredits || numberOfCredits > maxCredits) {
          return false;
        }
        return true;
      }
constructor() {}
}