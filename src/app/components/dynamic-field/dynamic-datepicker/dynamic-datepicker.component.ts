import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-datepicker',
  templateUrl: './dynamic-datepicker.component.html',
  styleUrls: ['./dynamic-datepicker.component.scss'],
})
export class DynamicDatepickerComponent {
  private formgroupDirective = inject(FormGroupDirective);

  @Input() field: any;
  formName!: UntypedFormGroup;

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
