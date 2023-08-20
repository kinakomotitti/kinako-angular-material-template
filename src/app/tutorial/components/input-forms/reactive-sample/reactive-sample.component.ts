import { HeroService } from 'src/app/tutorial/services/hero.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlStatus, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-sample',
  templateUrl: './reactive-sample.component.html',
  styleUrls: ['./reactive-sample.component.scss'],
})
export class ReactiveSampleComponent implements OnInit {
  formattedMessage: string[] = [];

  field1 = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this.field1.valueChanges.subscribe((val: string) => {
      if (val !== undefined) {
        this.formattedMessage.push(`Hello, field1 is ${val}`);
        this._heroService.getHeroes().subscribe((result) => {
          console.info(result.filter((i) => i.name.includes(val)));
        });
      }
    });
    this.field1.statusChanges.subscribe((val: FormControlStatus) =>
      this.statusChanged(val)
    );
  }

  statusChanged(val: FormControlStatus) {
    this.formattedMessage.push(`Status: ${val}`);
  }

  editTesxt() {
    this.field1.setValue(Date());
  }
}
