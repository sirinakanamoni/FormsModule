import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeCls } from '../Model/EmpClass';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit {
  public ecls;
  public countryForm: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {
    this.ecls = new EmployeeCls();
    this.countryForm = this.formInIt();
  }
  ngOnInit(): void {
    console.log(this.countryForm.get('country')!.value)
    
  }
  formInIt() {
    return this.fb.group({
      employeeName: [''],
      dob: [new Date()],
      email: [''],
      mobile: [''],
      gender: [''],
      country: ['']
    
    })
    

  }

  public employeeName: string = "";
  public dob: Date = new Date();
  public email: string = "";
  public mobile: string="";
  public gender: string = "";
  public country: string = "";

  Done() {
    console.log(this.countryForm.value);
    // const this. = this.countryForm.value;
    this.ecls.employeeName = this.employeeName;
    this.ecls.email = this.email;
    this.ecls.dob = this.dob;
    this.ecls.mobile = this.mobile;
    this.ecls.gender = this.gender;
    this.ecls.country = this.country;

    console.log(this.ecls)
    
    // this.ecls.employeeName=this.employeeName;
    // this.ecls.email=this.email;
    // this.ecls.dob=this.dob;
    // this.ecls.mobile=this.mobile;
    // this.ecls.gender=this.gender;
    // this.ecls.country=this.country;
    // console.log(this.ecls)

    // this.ecls.employeeName=this.countryForm.get('employeeName')!.value;
    // this.ecls.dob=this.countryForm.get('dob')!.value;
    // this.ecls.email=this.countryForm.get('email')!.value;
    // this.ecls.mobile=this.countryForm.get('mobile')!.value;
    // this.ecls.gender=this.countryForm.get('gender')!.value;
    // this.ecls.country=this.countryForm.get('country')!.value;
  }

  changeCountry(event: any) {
    console.log(event!.target.value)
  }
  bind() {
    this.countryForm.get("country")!.patchValue("IND");
    // this.countryForm.controls["country"].patchValue("IND");
  }

  Clear() {
    this.employeeName = "";
    this.email = "";
    this.gender = "";
    this.mobile ="";
    this.country = "";
  }
  Navigate() {
    this.router.navigateByUrl('/si')
  }
  FControl() {
    this.router.navigateByUrl('/fcontrol')
  }
  FBuilder() {
    this.router.navigateByUrl('/fbuilder')
  }

}

