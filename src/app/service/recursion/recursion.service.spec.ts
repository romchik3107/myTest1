import { TestBed } from '@angular/core/testing';
import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;
  beforeEach(() => {
    TestBed.configureTestingModule({}); service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Сума ряду за допомогою рекурсії значення x=-3.14 y=-3.6551', () => {
    let x = -3.14;
    let y = -3.6551;
    let y1 = -3.66;
    service.getRecursion(x, -2, y, 1, -1);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});