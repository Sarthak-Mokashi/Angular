import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // closeResult: string | undefined;                                 // Modal
  // modalService: any;
  // openVerticallyCentered(content: any) {
  //   this.modalService.open(content, { centered: true });
  // }

  countryIndex=0;
  showData = false;
  showForm = false;
  tableHeaders: any = [];
  stateTableHeaders: any = [];
  countries :any = [];

  constructor(public dataService : DataServiceService) { }

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


   public setForm(event: any) 
   {
    this.showForm = !this.showForm;

   }
}
