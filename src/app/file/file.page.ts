import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  data_users: any = [];
  showDetails : boolean[] = new Array(1000).fill(false);
  dataUrl = "https://api.jsonbin.io/v3/b/646683cc9d312622a360b190";
  loading : any;
  m  : any = 0;
  
  constructor(public loadingController: LoadingController) { }
  async load(m:any){
    this.m=parseInt(m);
    this.loading = await this.loadingController.create({
      spinner: "bubbles",
      message: "loading..."
    });

    await this.loading.present();
    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;
        console.log(this.data[1]);
        while (this.data[i] != undefined) {
          this.data_users.push(this.data[i][0]);
          i++;
        }
        this.loading.dismiss();
      });
  }
    toggleDetails(i:number)
    {
      if (this.showDetails[i])
      {
        this.showDetails[i]=false;
      }
      else
      {
        this.showDetails[i]=true;
      }
    }
    getGreenColor(j:number){

      return (j > this.m) ? 'green' : 'black';
    }

  ngOnInit() {
  }

}

