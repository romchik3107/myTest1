import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorCreditsService } from './ValidatorCredits.service';

export function validatorCredits(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {

        let validator = new ValidatorCreditsService()
        
        let valid = !control.value || validator.validateNumberOfCredits(control.value) 
        return valid ? null : { course: true }
    }
}