import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-interest',
  standalone: true,
  imports: [SimpleInterestComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './simple-interest.component.html',
  styleUrl: './simple-interest.component.css'
})
export class SimpleInterestComponent {
  principalAmount:number=0;
  time:number=0;
  rateOfInterest:number=0;
  total:number=0;
  errorMsg:string="";
  successMsg:string="";
  simpleInt:FormGroup
  constructor(private fb:FormBuilder){
    this.simpleInt=this.formInIt();
  }
  formInIt(){
    return this.fb.group({
      principalAmount:[0],
      time:[0],
      rateOfInterest:[0],
      total:[0]
    })
  }
  Calculate(){
    this.errorMsg="";
    this.successMsg="";
       
    if(this.simpleInt.get('principalAmount')!.value){
        this.principalAmount=this.simpleInt.get('principalAmount')!.value;}
        else{this.errorMsg="Enter Principal Amount";
        return;
       }
       if(this.simpleInt.get('time')!.value){
        this.time=this.simpleInt.get('time')!.value;}
        else{this.errorMsg="Please Enter Time";
        return;
       }
       if(this.simpleInt.get('rateOfInterest')!.value){
        this.rateOfInterest=this.simpleInt.get('rateOfInterest')!.value;}
        else{this.errorMsg="Enter Rate Of Interest";
        return;
       }
       this.total=(this.principalAmount*this.time*this.rateOfInterest)/100+this.principalAmount;
       this.successMsg="Simple Interest Calculated Successfully";
       
  }
      ChangePa(){
        this.Calculate();
      }
      ChangeTime(){
        this.Calculate();
      }
      ChangeRoi(){
        this.Calculate();
      }

     
  Clear(){
    // this.principalAmount=0;
    // this.rateOfInterest=0;
    // this.time=0;
    // this.error="";
   this.simpleInt=this.formInIt();
    this.successMsg="";
    this.errorMsg="";
    this.total=0;
  }

}
