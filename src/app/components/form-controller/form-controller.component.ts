import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormInputTextComponent } from '../input-fiels/form-input-text/form-input-text.component';
import { FormInputRadioComponent } from '../input-fiels/form-input-radio/form-input-radio.component';
import { FormInputTextareaComponent } from '../input-fiels/form-input-textarea/form-input-textarea.component';
import { FormInputSelectComponent } from '../input-fiels/form-input-select/form-input-select.component';
import { FormInputCheckboxComponent } from '../input-fiels/form-input-checkbox/form-input-checkbox.component';

@Component({
  selector: 'app-form-controller',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    CheckboxModule,
    CommonModule,
    RadioButtonModule,
    FormInputTextComponent,
    FormInputRadioComponent,
    FormInputTextareaComponent,
    FormInputSelectComponent,
    FormInputCheckboxComponent
  ],
  templateUrl: './form-controller.component.html',
  styleUrl: './form-controller.component.scss'
})
export class FormControllerComponent {
  @Input() elements: any[] = [];
  @Input() formGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['elements'] && this.elements) {
      this.createFormControls();
    }
  }

  private createFormControls(): void {
    this.elements.forEach(element => {
      const validators = [];
      if (element.isRequired) validators.push(Validators.required);
      if (element.maxLength) validators.push(Validators.maxLength(element.maxLength));
      this.formGroup.addControl(element.name, this.fb.control('', validators));
    });
  }

  onSubmit(): void {
    if (this.formGroup.invalid) {
      this.markFormGroupDirty(this.formGroup, true);
    } else {
      alert(JSON.stringify(this.formGroup.value, null, 2));
    }
  }

  markFormGroupDirty(formGroup: FormGroup, scrollToInvalid?: boolean) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty();
        control.updateValueAndValidity();
        if (control.invalid && scrollToInvalid) {
          const invalidControlElement = document.querySelector(`[formcontrolname="${field}"]`);
          invalidControlElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if (control instanceof FormGroup) {
        this.markFormGroupDirty(control, scrollToInvalid);
      } else if (control instanceof FormArray) {
        control.controls.forEach(subFormGroup =>
          this.markFormGroupDirty(subFormGroup as FormGroup, scrollToInvalid)
        );
      }
    });
  }
}
