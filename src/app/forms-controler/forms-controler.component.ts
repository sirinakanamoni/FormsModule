import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, FormsModule, FormBuilder } from '@angular/forms';
import {EmployeeCls}from '../Model/EmpClass';
@Component({
  selector: 'app-forms-controler',
  standalone: true,
  imports: [FormsControlerComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './forms-controler.component.html',
  styleUrl: './forms-controler.component.css'
})
export class FormsControlerComponent {
  
empForm:FormGroup;
private empClass:EmployeeCls;
constructor(private fb:FormBuilder){
   this.empClass=new EmployeeCls();
   this.empForm=this.formInIt();
}
formInIt(){
  return this.fb.group({
    employeeName:[''],
    email:[''],
    dob:[''],
    mobile:[''],
    gender:[''],
    country:['']
  })
}
 public employeeName:string="";
 public email:string="";
 public dob!:Date;
 public mobile:string="";
 public gender:string="";
 public country:string="";
 Done(){
console.log(this.empClass);
this.empClass.employeeName=this.empForm.get('employeeName')!.value;
this.empClass.email=this.empForm.get('email')!.value;
this.empClass.dob=this.empForm.get('dob')!.value;
this.empClass.mobile=this.empForm.get('mobile')!.value;
this.empClass.gender=this.empForm.get('gender')!.value;
this.empClass.country=this.empForm.get('country')!.value;


  // const formvalue=this.empForm.value;
  // this.employeeName=this.employeeName;
  // this.email=this.email;
  // this.dob=this.dob;
  // this.mobile=this.mobile;
  // this.gender=this.gender;
  // this.country=this.country;

  // this.empClass.employeeName=this.employeeName;
  // this.empClass.email=this.email;
  // this.empClass.mobile=this.mobile;
  // this.empClass.dob=this.dob;
  // this.empClass.gender=this.gender;
  // this.empClass.country=this.country;
 }

}