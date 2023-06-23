import { TestBed } from '@angular/core/testing';
import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({}); 
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення x=-3.14 y=-3.6551', () => {
    let x = -3.14;
    let y = -3.6551
    let y1=service.getSeries(x);
    
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});