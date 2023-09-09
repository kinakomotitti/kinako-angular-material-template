import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormControlErrormessageService {
  public getErrorMessages(target: FormControl): string[] {
    const message = [];

    if (target.hasError('required')) message.push('The value is required.');

    if (target.hasError('maxlength')) {
      const requireLength = target.getError('maxlength').requiredLength;
      const actualLength = target.getError('maxlength').actualLength;
      message.push(
        `The MaxLength is ${requireLength} but inputted ${actualLength}.`
      );
    }

    if (target.hasError('forbiddenName')) {
      message.push(`forbiden ${target.getError('forbiddenName').regExp}`);
    }

    if (target.hasError('asyncValidatorSample')) {
      message.push(
        `${
          target.getError('asyncValidatorSample').expected
        } is prohibited by Async Validator.`
      );
    }
    return message;
  }
}
