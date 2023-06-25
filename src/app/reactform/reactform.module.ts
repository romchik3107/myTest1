import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactformPageRoutingModule } from './reactform-routing.module';
import { MyformComponent } from './myform/myform.component';
import { ReactformPage } from './reactform.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { UpdateformComponent } from './updateform/updateform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactformPageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [ReactformPage,MyformComponent, UpdateformComponent]
})
export class ReactformPageModule {}
