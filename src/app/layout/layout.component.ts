import { Component } from '@angular/core';
import { FormModelServiceService } from '../services/form-model-service.service';

@Component({
  selector: 'd4b-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(
    private formModelService: FormModelServiceService
  ) {

  }
  model = this.formModelService.get('formA');
}
