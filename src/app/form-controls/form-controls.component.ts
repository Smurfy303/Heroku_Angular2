import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.css']
})
export class FormControlsComponent implements OnInit {

  cityCtrl: FormControl;
  filteredCities: any; 

  ngOnInit() {
  }
   cities = [
    'Mumbai',
    'Pune',
    'Nagpur',
    'Nashik',
    'Vasai-Virar',
    'Aurangabad',
    'Solapur',
    'Bhiwandi',
    'Amravati',
    'Malegaon',
    'Jalgaon',
    'Akola',
    'Latur',
    'Ahmadnagar',
    'Dhule',
    'Ichalkaranji',
    'Chandrapur',
    'Parbhani',
    'Jalna',
    'Bhusawal',
    'Navi Mumbai',
    'Panvel'
  ];

 
  constructor() {
    this.cityCtrl = new FormControl();
    this.filteredCities = this.cityCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterCity(name),console.log('Seleccted city',this.cities));
  }

  filterCity(val: string) {
    return val ? this.cities.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.cities;
  }

}
