import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-dynamic-checkboxs',
  templateUrl: './dynamic-checkboxs.component.html',
  styleUrls: ['./dynamic-checkboxs.component.scss'],
})
export class DynamicCheckboxsComponent {
  private formgroupDirective = inject(FormGroupDirective);

  @Input() field: any;
  formName!: UntypedFormGroup;

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
