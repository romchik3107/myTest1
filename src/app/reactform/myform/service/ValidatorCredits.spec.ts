import { ValidatorCreditsService } from "./ValidatorCredits.service";
import { TestBed } from '@angular/core/testing';
describe('ValidatorNumberOfCreditsService', () => {
  let service: ValidatorCreditsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorCreditsService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return true for valid number of credits', () => {
    const validCredits = [3, 4, 5, 6];
    validCredits.forEach((credits) => {
      expect(service.validateNumberOfCredits(credits)).toBeTrue();
    });
  });

  fit('should return false for invalid number of credits', () => {
    const invalidCredits = [-1, 0, 2, 7, 8];
    invalidCredits.forEach((credits) => {
      expect(service.validateNumberOfCredits(credits)).toBeFalse();
    });
  });
});
