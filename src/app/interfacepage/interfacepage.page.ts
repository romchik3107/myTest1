import { Component, OnInit } from '@angular/core';
import { Show_Console } from './class/show_console';
import { Show_Desktop } from './class/show_desktop';
import { Metropolis } from './class/metropolis';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {
  }

  result(){
    let show_con = new Show_Console();
    let show_desk = new Show_Desktop();
    let metropolis = new Metropolis("Київ","50°27′00″ пн. ш.", "30°31′25″ сх. д.", 2952301, show_desk);
    this.show = show_desk.info;
    console.log(metropolis.info());
 
 

  }
}
