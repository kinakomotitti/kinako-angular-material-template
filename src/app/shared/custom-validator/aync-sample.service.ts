import { catchError, delay, map, Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AyncSampleService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return of(control.value === 'test').pipe(
      delay(10000),
      map((isTaken) => {
        return isTaken
          ? { asyncValidatorSample: { accepted: true, expected: 'test' } }
          : null;
      }),
      catchError(() => of(null))
    );
  }
}
