import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';
import { Component, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'd4b-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent implements OnInit {
  private formgroupDirective = inject(FormGroupDirective);

  @Input() field: any;
  formName!: UntypedFormGroup;

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
