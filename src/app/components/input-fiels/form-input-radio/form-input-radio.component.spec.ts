import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputRadioComponent } from './form-input-radio.component';

describe('FormInputRadioComponent', () => {
  let component: FormInputRadioComponent;
  let fixture: ComponentFixture<FormInputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInputRadioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
