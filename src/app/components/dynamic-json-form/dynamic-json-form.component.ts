import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { FormControllerComponent } from '../form-controller/form-controller.component';

@Component({
  selector: 'app-dynamic-json-form',
  standalone: true,
  imports: [TabViewModule, PanelModule, ReactiveFormsModule, CommonModule, FormControllerComponent],
  templateUrl: './dynamic-json-form.component.html',
  styleUrl: './dynamic-json-form.component.scss'
})
export class DynamicJsonFormComponent {
  formConfig = {
    title: "Patient Past Medical, Social & Family History",
    logoPosition: "right",
    pages: [
      {
        name: "introduction",
        title: "Introduction",
        sections: [
          {
            type: "panel",
            name: "Panel 1",
            questionTitleLocation: "bottom",
            title: "Patient Name",
            elements: [
              {
                type: "text",
                name: "patientLastName",
                title: "Patient lastname",
                isRequired: true,
                maxLength: 25
              },
              {
                type: "text",
                name: "patienFirstName",
                startWithNewLine: false,
                title: "Patient firstname",
                isRequired: true,
                maxLength: 25
              },
              {
                type: "dropdown",
                name: "SelectCity",
                title: "Select city",
                isRequired: true,
                choices: [
                  { name: 'New York', code: 'NY' },
                  { name: 'Rome', code: 'RM' },
                  { name: 'London', code: 'LDN' },
                  { name: 'Istanbul', code: 'IST' },
                  { name: 'Paris', code: 'PRS' }
                ],
              }
            ]
          },
          {
            type: "panel",
            name: "Panel 2",
            questionTitleLocation: "left",
            title: "Social Security & Birth Date",
            elements: [
              {
                type: "text",
                name: "socialsecurity",
                title: "Social Security",
                isRequired: true
              },
              {
                type: "text",
                name: "birthDate",
                startWithNewLine: false,
                title: "Date of birth",
                isRequired: true,
                inputType: "date"
              },
              {
                type: "radiogroup",
                name: "sex",
                title: "Sex:",
                isRequired: true,
                choices: [
                  {
                    value: "male",
                    text: "Male"
                  },
                  {
                    value: "female",
                    text: "Female"
                  }
                ],
                colCount: 0
              }
            ]
          },
          {
            type: "panel",
            name: "Panel 3",
            title: "Completed By",
            elements: [
              {
                type: "text",
                name: "completedByOtherName",
                startWithNewLine: false,
                title: "Name (if other than patient):",
                isRequired: true
              },
              {
                type: "textarea",
                name: "textarea",
                startWithNewLine: false,
                title: "Textarea input",
                isRequired: true
              },
              {
                type: "checkbox",
                name: "categories",
                title: "Select your preferred categories:",
                choices: [
                  { name: 'Accounting', key: 'A' },
                  { name: 'Marketing', key: 'M' },
                  { name: 'Production', key: 'P' },
                  { name: 'Research', key: 'R' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  formGroups: FormGroup[][] = []; // Array to hold form groups for each section within each page
  activeIndex = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formGroups = this.formConfig.pages.map(page => {
      return page.sections.map(section => {
        const group = this.fb.group({});
        section.elements.forEach((element: any) => {
          const validators = [];
          if (element.isRequired) validators.push(Validators.required);
          if (element.maxLength) validators.push(Validators.maxLength(element.maxLength));
          group.addControl(element.name, this.fb.control('', validators));
        });
        return group;
      });
    });
  }
}
