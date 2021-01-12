import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-ngfor-demo',
  templateUrl: './ngfor-demo.component.html',
  styleUrls: ['./ngfor-demo.component.scss']
})
export class NgforDemoComponent implements OnInit {
  
  countryIndex=0;
  showData = false;
  tableHeaders: any = [];
  stateTableHeaders: any = [];
  countries :any = [];

 // constructor(private dataService : DataServiceService) { }              // If calling Service's Method only from this Class

  constructor(public dataService : DataServiceService) { }                 // If calling Service's Method directly from template

  ngOnInit(): void {
    console.log(this.dataService.getCountries());
    this.tableHeaders = this.dataService.getCountriesHeaders();
    this.stateTableHeaders = this.dataService.getStateHeaders();
    this.countries = this.dataService.getCountries();
    }

  public toggle(event: any,index:number)
  {
    console.log('event id is'+event);
    this.showData = !this.showData;
  this.countryIndex=index
  }
  }