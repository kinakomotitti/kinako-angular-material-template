import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-forms-sample',
  templateUrl: './input-forms-sample.component.html',
  styleUrls: ['./input-forms-sample.component.scss'],
})
export class InputFormsSampleComponent {
  playgroundField = new FormControl<string>('', { nonNullable: true });
}
