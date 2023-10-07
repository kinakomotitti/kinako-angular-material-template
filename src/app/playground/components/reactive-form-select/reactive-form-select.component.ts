import { FormControlErrormessageService } from 'src/app/shared/services/form-control-errormessage.service';

import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-select',
  templateUrl: './reactive-form-select.component.html',
  styleUrls: ['./reactive-form-select.component.scss'],
})
export class ReactiveFormSelectComponent {
  constructor(
    private readonly _builder: FormBuilder,
    private readonly _errorMessage: FormControlErrormessageService
  ) {
    this.field1.markAsTouched();
  }
  options = ['Value1', 'Value2', 'Value3'];
  //single
  field1 = new FormControl('', [Validators.required]);
  //malti
  field2 = new FormControl('', [Validators.required]);
  field3 = new FormControl('', [Validators.required]);
  group = this._builder.group(
    {
      field2: this.field2,
      field3: this.field3,
    },
    { validators: [Validators.required, reactiveFormMultipleSelectValidator] }
  );

  getError(): string[] {
    return this._errorMessage.getErrorMessages(this.group);
  }
}

const reactiveFormMultipleSelectValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const field2Val = control.get('field2');
  const field3Val = control.get('field3');
  console.log('aaa');
  if (field2Val && field3Val) {
    if (field2Val.value !== field3Val.value) {
      return { CorrelationCheck: true };
    } else {
      return null;
    }
  }
  return { CorrelationCheck: true };
};
