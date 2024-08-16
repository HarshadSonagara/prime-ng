import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-form-input-text',
  standalone: true,
  imports: [FloatLabelModule, InputTextModule,
    FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './form-input-text.component.html',
  styleUrl: './form-input-text.component.scss'
})
export class FormInputTextComponent {
  @Input() element: any;
  @Input() formGroup!: FormGroup;
}
