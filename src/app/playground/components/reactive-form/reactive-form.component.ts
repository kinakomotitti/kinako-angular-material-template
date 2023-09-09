import { FormControlErrormessageService } from 'src/app/shared/services/form-control-errormessage.service';
import { HeroService } from 'src/app/tutorial/services/hero.service';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormControlStatus } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormSampleComponent {
  formattedMessage: string[] = [];

  @Input() field1 = new FormControl<string>('', { nonNullable: true });
  @Output()
  field1Change: EventEmitter<FormControl<string>> = new EventEmitter();

  constructor(
    private _heroService: HeroService,
    private _formErrorMessageServ: FormControlErrormessageService
  ) {}

  statusChanged(val: FormControlStatus) {
    if (this.field1.pending) {
      this.field1.disable();
    } else {
      this.field1.enable();
    }
    this.formattedMessage.push(`Status: ${val}`);
    this.field1Change.emit(this.field1);
  }

  getErrorMessage(): string[] {
    return this._formErrorMessageServ.getErrorMessages(this.field1);
  }
}
