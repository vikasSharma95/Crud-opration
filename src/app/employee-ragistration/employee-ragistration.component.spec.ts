import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRagistrationComponent } from './employee-ragistration.component';

describe('EmployeeRagistrationComponent', () => {
  let component: EmployeeRagistrationComponent;
  let fixture: ComponentFixture<EmployeeRagistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRagistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRagistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
