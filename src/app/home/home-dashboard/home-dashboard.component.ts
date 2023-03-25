import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.scss']
})
export class HomeDashboardComponent implements OnInit {

  options = [
    {
      display: 'One',
      value: '1'
    }, {
      display: 'Two',
      value: '2'
    }, {
      display: 'Three',
      value: '3'
    }, {
      display: 'Four',
      value: '4'
    }, {
      display: 'Five',
      value: '5'
    }, {
      display: 'Six',
      value: '6'
    }, {
      display: 'Six',
      value: '7'
    }
    , {
      display: 'Six',
      value: '8'
    }
    , {
      display: 'Six',
      value: '9'
    }, {
      display: 'Six',
      value: '10'
    }
  ];

  showError = false;
  errorMessage = '';
  selected :string[]=[];

  constructor() { 
  }

  ngOnInit(): void {
  }

  getSelectedOptions(selected:string[]) {
    console.log("Home:"+selected);
    this.selected = selected;
  }

}
