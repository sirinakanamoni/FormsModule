import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {EmployeeCls} from '../Model/EmpClass';
@Component({
  selector: 'app-forms-builder',
  standalone: true,
  imports: [FormsBuilderComponent,ReactiveFormsModule],
  templateUrl: './forms-builder.component.html',
  styleUrl: './forms-builder.component.css'
})
export class FormsBuilderComponent {
    private empcls:EmployeeCls;
    myForm:FormGroup;
    constructor(private fb:FormBuilder){
      this.empcls=new EmployeeCls();
      this.myForm=this.fb.group({
      })
    }
    public employeeName:string="";
    public dob!:Date;
    public email:string="";
    public mobile:string="";
    public gender:string="";
    public country:string="";
    Done(){
      console.log(this.empcls)
      this.empcls.employeeName=this.employeeName;
      this.empcls.dob=this.dob;
      this.empcls.email=this.email;
      this.empcls.mobile=this.mobile;
      this.empcls.gender=this.gender;
      this.empcls.country=this.country;
    }
}
