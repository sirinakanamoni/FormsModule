import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsControlerComponent } from './forms-controler.component';

describe('FormsControlerComponent', () => {
  let component: FormsControlerComponent;
  let fixture: ComponentFixture<FormsControlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsControlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsControlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
