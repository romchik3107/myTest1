import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  a: number[][] = [];
  n: number = 0;
  m: number = 0;
  constructor() { }

  arrayras(n:any, m:any){
    function getRandomArbitrary(min:number, max:number) {
      return Math.random() * (max - min) + min;
    }
    try{
      this.n=parseInt(n);
      this.m=parseInt(m);
      if((isNaN(this.n) == true)){
        throw new Error('Parametrs is not a number!');
      }
      if(n <= 0){
        throw new Error ('Parametrs less than zero');
      }
      let i: number = 0, j: number = 0;
      this.a = Array(this.n);
      console.log('Array created');
      for(i = 0; i < this.n; i++){
        this.a[i] = Array(this.n);
        for(j= 0; j < this.n; j++){
          let aa: number = (getRandomArbitrary(-10 ,11));
          this.a[i][j] = parseFloat(aa.toFixed(0));
        }
      }
    }
    catch (error) {
      console.log(error);
      
    }
  }
  getColor(j:number){

    return ((j==this.m) || (j==this.m/-1)) ? 'green' : 'red';
  }
  ngOnInit(){

  }
}