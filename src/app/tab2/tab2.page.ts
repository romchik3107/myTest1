import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor() {}
  a: number = 0;
  b: number = 0;
  c: number = 0;
  y: number = 0;
  i: number = 0;
  ras(a:any, b:any,){
    try{
      this.a=parseFloat(a);
      this.b=parseFloat(b);
      this.c=0;
      this.y = this.b - this.a;
      if((isNaN(this.a) == true) || (isNaN(this.b) == true) || (isNaN(this.c) == true)){
        throw new Error('Parametrs is not a number!');
      }
      for(this.i=1; this.i<=this.y; this.i++){
        this.a++;
        if((this.a % 44 ==0) && (this.a % 5 == 3)){
          this.c++;
        }

      }

    }
    catch (error) {
      console.log(error);
      
    }
  }
}