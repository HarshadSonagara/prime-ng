import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-form-input-textarea',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule,
    FormsModule,
    ReactiveFormsModule, CommonModule, InputTextareaModule],
  templateUrl: './form-input-textarea.component.html',
  styleUrl: './form-input-textarea.component.scss'
})
export class FormInputTextareaComponent {
  @Input() element: any;
  @Input() formGroup!: FormGroup;
}
