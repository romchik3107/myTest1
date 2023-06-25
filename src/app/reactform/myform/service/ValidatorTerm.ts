import { AbstractControl, ValidatorFn } from '@angular/forms';
import { ValidatorTermService } from './ValidatorTerm.service';

export function validatorTerm(): ValidatorFn {
    return (
        control: AbstractControl
    ): { [key: string]: boolean } | null => {

        let validator = new ValidatorTermService()
        
        let valid = !control.value || validator.validateTerm(control.value) 
        return valid ? null : { course: true }
    }
}