import { UntypedFormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.scss'],
})
export class DynamicSelectComponent {
  private formgroupDirective = inject(FormGroupDirective);

  @Input() public field: any;
  public formName!: UntypedFormGroup;

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
