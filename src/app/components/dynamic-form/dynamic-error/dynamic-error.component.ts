import { Component, inject, Input, OnInit } from '@angular/core';
import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'd4b-dynamic-error',
  templateUrl: './dynamic-error.component.html',
  styleUrls: ['./dynamic-error.component.scss'],
})
export class DynamicErrorComponent implements OnInit {
  private formgroupDirective = inject(FormGroupDirective);

  public formName!: UntypedFormGroup;

  @Input()
  public fieldName!: string;

  public get getErrorMessage() {
    if (this.formName.controls[this.fieldName].hasError('required')) {
      return 'Campo obrigatório.';
    }
    return JSON.stringify(this.formName.controls[this.fieldName]?.errors);
  }
  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
