import { Component, Input, OnInit } from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  UntypedFormControl,
  UntypedFormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'd4b-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  public model: any = {};
  public dynamicFormGroup!: UntypedFormGroup;
  public fields: any = [];

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new UntypedFormGroup(formGroupFields);
  }

  private getFormControlsFields() {
    const formGroupFields: any = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);

      formGroupFields[field] = new UntypedFormControl(
        fieldProps.value,
        validators
      );
      this.fields.push({ ...fieldProps, fieldName: field });
    }

    return formGroupFields;
  }

  private addValidator(
    rules: any
  ): ValidatorFn | ValidatorFn[] | FormControlOptions | null | undefined {
    if (!rules) {
      return [];
    }
    console.log(rules);
    const validators: any = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        //add more case for future.
        default:
          return;
      }
    });
    return validators;
  }
}
