import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-input-checkbox',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule,
    FormsModule,
    ReactiveFormsModule, CommonModule, CheckboxModule],
  templateUrl: './form-input-checkbox.component.html',
  styleUrl: './form-input-checkbox.component.scss'
})
export class FormInputCheckboxComponent {
  @Input() element: any;
  @Input() formGroup!: FormGroup;
}
