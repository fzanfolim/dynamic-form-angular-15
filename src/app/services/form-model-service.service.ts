import { Injectable } from '@angular/core';
import MockFormModel from 'src/mock/forms.mock';

@Injectable({
  providedIn: 'root'
})
export class FormModelServiceService {

  constructor() { }

  get(formName: string): any {
    return MockFormModel['formA'];
  }
}
