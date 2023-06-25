import { ValidatorTermService } from "../service/ValidatorTerm.service";

describe("ValidatorTermService", () => {
  let validator: ValidatorTermService;

  beforeEach(() => {
    validator = new ValidatorTermService();
  });

  fit("should be created", () => {
    expect(validator).toBeTruthy();
  });

  fit("should validate first term correctly", () => {
    const term = "First 2022";
    const result = validator.validateTerm(term);
    expect(result).toBe(false);
  });

  fit("should validate second term correctly", () => {
    const term = "Second 2023";
    const result = validator.validateTerm(term);
    expect(result).toBe(true);
  });

  fit("should return false for invalid term format", () => {
    const term = "Third 2024";
    const result = validator.validateTerm(term);
    expect(result).toBe(false);
  });

  fit("should return false for invalid year", () => {
    const term = "First 1900";
    const result = validator.validateTerm(term);
    expect(result).toBe(false);
  });
});
