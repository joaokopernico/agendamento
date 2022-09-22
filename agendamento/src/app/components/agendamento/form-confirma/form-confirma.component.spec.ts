import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmaComponent } from './form-confirma.component';

describe('FormConfirmaComponent', () => {
  let component: FormConfirmaComponent;
  let fixture: ComponentFixture<FormConfirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfirmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
