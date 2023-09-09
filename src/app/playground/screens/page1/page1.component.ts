import { AyncSampleService } from 'src/app/shared/custom-validator/aync-sample.service';
import { forbiddenNameValidator } from 'src/app/shared/custom-validator/forbidden-name.service';

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component {
  constructor(private _asyncSample: AyncSampleService) {}

  playgroundField = new FormControl<string>('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(1),
      forbiddenNameValidator(/bob/i),
    ],
    asyncValidators: [this._asyncSample.validate.bind(this._asyncSample)],
    updateOn: 'blur',
  });
}
