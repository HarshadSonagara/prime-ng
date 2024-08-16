import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-form-input-radio',
  standalone: true,
  imports: [RadioButtonModule, InputTextModule,
    FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './form-input-radio.component.html',
  styleUrl: './form-input-radio.component.scss'
})
export class FormInputRadioComponent {
  @Input() element: any;
  @Input() formGroup!: FormGroup;
}
