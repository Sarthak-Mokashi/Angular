import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  // lowercaseExample = "HELLO ANGULAR";
  // uppercaseExample = "hello angular";
  // dateExample = Date.now();                                                        
  // jsonExample = { name :'Sarthak' , age : "22" , skills : "C/C++/JAVA/JavaScript"};
  // currencyExample = 125;                   // By Default currency is '$' 
  // percentExample = 0.6767;                                                           



  //  currencyExample = 125;
  //  dateExample = Date.now();
  //  percentExample = 0.6767;



  dateExample = Date.now();
  currencyExample = 125;
  constructor() { }

  ngOnInit(): void {
  }

}
