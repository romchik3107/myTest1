import { Component, OnInit } from '@angular/core';
import { Cloth } from './Class/Cloth';
import { Costume } from './Class/Costume';
import { Coat } from './Class/Coat';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  Clth: Cloth[] = [];
  max: number = 0;
  sum: number = 0;
  constructor() { }

  getRandomInt(max:number){
    return Math.floor(Math.random() * Math.floor(max) +1);
  }
  ras(nn:any){
    this.sum =0;
    this.Clth = new Array();
    let n = parseInt (nn);
    for (let i =0; i<n; i++){
      this.Clth.push(new Coat ("Пальто", this.getRandomInt(100) ));
      this.Clth.push(new Costume ("Костюм", this.getRandomInt(100) ));
      console.log("++++++++");
    }
    this.max;
    this.Clth.forEach((element) =>{
      element.S();
      this.sum += + element.mat
      console.log(element.show())
    });
    
  }
  ngOnInit() {
  }

}
