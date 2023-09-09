import { AyncSampleService } from 'src/app/shared/custom-validator/aync-sample.service';
import { forbiddenNameValidator } from 'src/app/shared/custom-validator/forbidden-name.service';

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-forms-sample',
  templateUrl: './input-forms-sample.component.html',
  styleUrls: ['./input-forms-sample.component.scss'],
})
export class InputFormsSampleComponent {}
