import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
  styleUrls: ['./dynamic-radio.component.scss'],
})
export class DynamicRadioComponent {
  private formgroupDirective = inject(FormGroupDirective);

  @Input() field: any;
  formName!: UntypedFormGroup;

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
