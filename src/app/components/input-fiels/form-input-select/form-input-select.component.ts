import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-form-input-select',
  standalone: true,
  imports: [DropdownModule,
    FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './form-input-select.component.html',
  styleUrl: './form-input-select.component.scss'
})
export class FormInputSelectComponent {
  @Input() element: any;
  @Input() formGroup!: FormGroup;
  cities: any;

  selectedCity: any;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
