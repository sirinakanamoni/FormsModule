import { Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { FormsControlerComponent } from './forms-controler/forms-controler.component';
import { FormsBuilderComponent } from './forms-builder/forms-builder.component';

export const routes: Routes = [
    {path:'si',component:SimpleInterestComponent},
    {path:'fcontrol',component:FormsControlerComponent},
    {path:'fbuilder',component:FormsBuilderComponent},
    {path:'',component:EmployeesComponent}
];
