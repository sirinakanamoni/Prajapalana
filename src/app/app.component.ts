import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Ppaform} from './Models/Ppaform';

import { FormBuilder,FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prajapalana';
  aNumber: boolean=false;
  public msg!:string;
  Ppaform!:FormGroup;
  PCls!:Ppaform;
  constructor(private fb:FormBuilder){
  this.formInIt();
  this.PCls=new Ppaform(); 
  }
   formInIt(){
    this.Ppaform=this.fb.group({
      applicationNumber:['',Validators.required],
      applicantName:[""],
      gender:[""],
      age:[""],
      mobileNumber:[""],
      dob:[""],
      aadharNumber:[""],
      rationCardNumber:[""],
      category:[""]
    })
   }
   submit(){
    console.log(this.Ppaform);
    if(this.Ppaform.invalid){
      this.aNumber=true
      this.msg='Form is'+this.Ppaform.status;
      return;
    }
    else{
      const frmValue=this.Ppaform.value;
      this.PCls.applicationNumber=frmValue.aadharNumber;
      this.PCls.applicantName=frmValue.applicantName;
      this.PCls.gender=frmValue.gender;
      this.PCls.age=frmValue.age;
      this.PCls.mobileNumber=frmValue.mobileNumber;
      this.PCls.dob=frmValue.dob;
      this.PCls.aadharNumber=frmValue.aadharNumber;
      this.PCls.rationCardNumber=frmValue.rationCardNumber;
      this.PCls.catedory=frmValue.catedory;
      console.log(this.PCls)
    }
   }
}
