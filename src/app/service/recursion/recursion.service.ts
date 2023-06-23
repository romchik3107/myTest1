import { LogService } from './../logger/log.service';
import { Injectable, Optional } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  yy: number = 0; 
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { } 
  getRecursion(x: number, n: number, sum: number, term: number, sign: number) {
    let maxIterations = 1000;
    let tolerance = 1e-10;

    sum += sign * term;
    sign = -sign;
    term *= 4 / ((2*n-1) * (2*n+1));
    term *= Math.cos((2*n-1) * x);
    n++;
    if (Math.abs(term) >= tolerance || n <= maxIterations) {
      this.getRecursion(x, n, sum, term, sign);
    }
    else{
      this.yy=sum;
    }
  } 
  
  getTab(xn: number = -3.14, xk: number = 3.14, h: number = 0.1) {
  console.log("hi");
  let x = xn,
    y = 1.0; 
    while (x < xk) {
      this.getRecursion(x, 2, y, 1, -1);
      this.xy.set(x, this.yy); 
      if (this.logService){
      this.logService.write("x=" + x.toFixed(2) + "y="+this.yy.toFixed(4));
      }
      x = x + h;
      
  }
  return this.xy;
}

}