import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-ngfor-demo',
  templateUrl: './ngfor-demo.component.html',
  styleUrls: ['./ngfor-demo.component.scss']
})
export class NgforDemoComponent implements OnInit {
  
 // constructor(private dataService : DataServiceService) { }              // If calling Service's Method only from this Class

  constructor() { }                 // If calling Service's Method directly from template

  ngOnInit(): void { }

    countries: any = [                                                              // Array
      {
        name : "INDIA" , 
        national_language : "Hindi",
        currency : "INR"
      },
    
      {
        name : "USA" , 
        national_language : "English-US",
        currency : "USD"
      },
  
      {
        name : "GERMANY" , 
        national_language : "German",
        currency : "EURO"
      },
  
      {
        name : "UAE" , 
        national_language : "Arabic",
        currency : "DIRHAM"
      }
    
    ];

}