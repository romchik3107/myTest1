import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Subject } from './class/subject';
import { Validators } from '@angular/forms';
import { validatorTerm } from './service/ValidatorTerm';

import { AlertController } from '@ionic/angular';
import { validatorCredits } from './service/ValidatorCredits';
import { ValidatorTermService } from './service/ValidatorTerm.service';
import { ValidatorCreditsService } from './service/ValidatorCredits.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent implements OnInit {
  SubjectForm!:FormGroup;
  Subject!: Subject;

  @Output() subjectAdd: EventEmitter<Subject> = new EventEmitter<Subject>();
  constructor(private fb:FormBuilder, private alertController: AlertController) {
    this.SubjectForm = this.fb.group({
      SubjectName: ['', [Validators.required]],
      SubjectNumberOfCredits: ['', [Validators.required]],
      SubjectTeacherName:['', [Validators.required]],
      SubjectRank:['', [Validators.required]],
      SubjectTerm:['', [validatorTerm()]],
        groups: new FormArray([new FormControl()]),
      })
   }

  // Додавання предмета
  addGroup() {
    console.log("Add"); 
    (this.SubjectForm.controls['groups'] as FormArray).push(
      new FormControl()
      )
  }
  // Видалення предмета
  deleteGroup(i: any) {
    console.log('Delete');
    (this.SubjectForm.controls['groups'] as FormArray).removeAt(i)
  }
  // Повертаємо список контролів як FormArray
  getControls() { return (this.SubjectForm.get('groups') as FormArray).controls; }
  // Збереження форми
  onSubmit() { 
    // let d1 = this.GroupForm.value.GroupTerm;

    // let valid_01 = new ValidatorTermService(); 
    // if (valid_01.validateTerm(d1)) 
    //   console.log("Submit"); 
    // else
    //   this.presentAlert("Неправильно!!!");



    let name = this.SubjectForm.value.SubjectName;
    let n = this.SubjectForm.value.SubjectNumberOfCredits;
    let t = this.SubjectForm.value.SubjectTeacherName;
    let r = this.SubjectForm.value.SubjectRank;
    let tr = this.SubjectForm.value.SubjectTerm;
    let g = this.SubjectForm.value.groups;
    
    let valid = new ValidatorCreditsService();
    console.log("onSubmit: num_of_creds: ", n);

    if (valid.validateNumberOfCredits(n)) {
      this.Subject = new Subject(name, n, t, r, tr,g);
      console.log("Submit: ", this.Subject);
      this.subjectAdd.emit(this.Subject);
    }
    else {
      this.presentAlert("ВРРОООНГ!!!!!!")
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      subHeader: '',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {}
}
