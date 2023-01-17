import { DynamicCheckboxsComponent } from './dynamic-checkboxs/dynamic-checkboxs.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import {
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { UntypedFormGroup, FormGroupDirective } from '@angular/forms';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';

@Component({
  selector: 'd4b-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.scss'],
})
export class DynamicFieldComponent {
  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent,
    },
    {
      name: 'number',
      component: DynamicInputComponent,
    },
    {
      name: 'select',
      component: DynamicSelectComponent,
    },
    {
      name: 'radio',
      component: DynamicRadioComponent,
    },
    {
      name: 'date',
      component: DynamicInputComponent,
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxsComponent,
    },
  ];

  @ViewChild('dynamicInputContainer', { read: ViewContainerRef })
  dynamicInputContainer!: ViewContainerRef;
  @Input()
  public field: any;
  public formName!: UntypedFormGroup;

  constructor(
    // private formgroupDirective: FormGroupDirective,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  private registerDynamicField() {
    this.dynamicInputContainer.clear();
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent =
      this.dynamicInputContainer.createComponent(componentInstance);
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  getComponentByType(type: string): any {
    let componentDynamic: any = this.supportedDynamicComponents.find(
      (c) => c.name === type
    );
    console.log(componentDynamic);
    return componentDynamic?.component || DynamicInputComponent;
  }
}
