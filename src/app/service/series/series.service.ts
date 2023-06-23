import { LogService } from './../logger/log.service';
import { Injectable, Optional,ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  private xy = new Map();
  constructor(@Optional() private logService: LogService) { } 


  getSeries(x: number) {
    const MAX_ITERATIONS = 1000;
    const TOLERANCE = 1e-10;
  
    let sum = 0;
    let sign = 1;
    let term = 1;
    let n = 1;
  
    while (Math.abs(term) > TOLERANCE && n <= MAX_ITERATIONS) {
      sum += sign * term;
      sign = -sign;
      term *= 4 / ((2*n-1) * (2*n+1));
      term *= Math.cos((2*n-1) * x);
      n++;
    }
  
    return 2/Math.PI - sum*Math.PI/2;
  }

  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {

    let x = xn, y = 0.0; 
    while (x < xk) {
      this.xy.set(x, y);
      y = this.getSeries(x); 
      if (this.logService) {
      this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      }
      x = x + h;
    }

    return this.xy;
  }
}
