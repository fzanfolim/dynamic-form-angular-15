import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicErrorComponent } from './dynamic-form/dynamic-error/dynamic-error.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicInputComponent } from './dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from './dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from './dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxsComponent } from './dynamic-field/dynamic-checkboxs/dynamic-checkboxs.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicErrorComponent, DynamicFieldComponent, DynamicInputComponent, DynamicSelectComponent, DynamicRadioComponent, DynamicCheckboxsComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [DynamicFormComponent],
})
export class ComponentsModule {}
