import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; 
import { Subject } from '../myform/class/subject';
import { ValidatorCreditsService } from '../myform/service/ValidatorCredits.service';
import { ValidatorTermService } from '../myform/service/ValidatorTerm.service';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.scss'],
})
export class UpdateformComponent implements OnInit { 
  //властивість для редагування
  @Input() subject!: Subject;
  @Input() show: boolean = true;
  @Output() subjectChange: EventEmitter<Subject> = new EventEmitter<Subject>(); 
  @Output() showChange = new EventEmitter();
  
  constructor() { }
  
  validateNumberOfCredits(c: number): boolean {
    let validator = new ValidatorCreditsService();
    if (c) {
      return validator.validateNumberOfCredits(c);
    }
    else return true;
  }

  save(a: any, b:any, c: any, m: any, sn: any) {
    this.show = false;
    if (this.validateNumberOfCredits(c)) {
      let valid = new ValidatorTermService();
      if ((sn) && !valid.validateTerm(sn)) {
        throw Error("Student number error")
      }
    } else throw Error("Course error");
    this.subject = new Subject(a,b, c, m, sn, this.subject.group);
    this.showChange.emit(this.show);
    this.subjectChange.emit(this.subject);
  }
  ngOnInit() { }
}
