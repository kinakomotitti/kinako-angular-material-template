import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss'],
})
export class HomeDashboardComponent {
  options: any = [];

  showError = false;
  errorMessage = '';
  selected: string[] = [];

  constructor() {
    for (let index = 0; index < 1000; index++) {
      this.options.push({ display: index, value: index });
    }
  }

  getSelectedOptions(selected: string[]) {
    console.log('Home:' + selected);
    this.selected = selected;
  }
}
