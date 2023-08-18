import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutorial-reactive-hero',
  templateUrl: './reactive-hero.component.html',
  styleUrls: ['./reactive-hero.component.scss'],
})
export class ReactiveHeroComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  hero = this.fb.group({
    id: [18, Validators.required],
    name: [
      'Dr. IQ',
      [
        Validators.required,
        Validators.pattern('^D.*$'),
        Validators.maxLength(10),
      ],
    ],
    power: [this.powers[0], Validators.required],
    alterEgo: ['Chuck Overstreet'],
  });

  submitted = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.hero = this.fb.group({
      id: [42, Validators.required],
      name: ['Nancy', Validators.required],
      power: ['', Validators.required],
      alterEgo: [''],
    });
  }
}
