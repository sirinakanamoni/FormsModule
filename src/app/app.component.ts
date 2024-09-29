import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { SimpleInterestComponent } from './simple-interest/simple-interest.component';
import { FormsControlerComponent } from './forms-controler/forms-controler.component';
import { FormsBuilderComponent } from './forms-builder/forms-builder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,EmployeesComponent,SimpleInterestComponent,FormsControlerComponent,FormsBuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormsModule';
}
