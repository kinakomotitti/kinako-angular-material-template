import { HeroService } from 'src/app/tutorial/services/hero.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormControlStatus, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.scss'],
})
export class ReactiveSampleComponent implements OnInit {
  formattedMessage: string[] = [];

  @Input() field1 = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });
  @Output()
  field1Change: EventEmitter<FormControl<string>> = new EventEmitter();

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this.formattedMessage.push(`on-init`);
  }

  statusChanged(val: FormControlStatus) {
    this.formattedMessage.push(`Status: ${val}`);
    this.field1Change.emit(this.field1);
  }
}
