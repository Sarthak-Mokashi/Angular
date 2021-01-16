import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router , ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  countryIndex=0;
  showData = false;
  showForm = false;
  newState: any[] = [];
  submitted = false;
  registerForm: any;
  name = '';
 
  constructor(private formBuilder: FormBuilder ,private route: ActivatedRoute , private router: Router) 
  { 
    this.registerForm= FormGroup;
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
     console.log(params);
    });

    this.registerForm = this.formBuilder.group({
      Name: [''],
      Code: [''],
      Cities: [''],
      Capital: ['']
     });
  
  }
    
     tableHeaders = [ "Name" , "National Language" , "Currency" , "No. of States" ];
     stateTableHeaders = [ "Name" , "Code" , "Cities" , "Capital" ];
  
     countries: any = [
  
      { 
        "Name" : 'India' ,
        "National Language" : 'Hindi' ,
        "Currency" : 'INR' ,
        "No. of States" : '36',
        "State" : [  { "Name" : 'Maharashtra', "Code" : 'MH', "Cities" : 43 , "Capital" : 'Mumbai'},
                     { "Name" : 'Gujarat',  "Code" : 'GJ', "Cities" : 32 , "Capital" : 'Ahmedabad'} 
                  ]
      },
  
      {
        "Name" : 'USA' ,
        "National Language" : 'English-US' ,
        "Currency" : 'USD' ,
        "No. of States" : '50',
        "State" : [  { "Name" : 'New York', "Code" : 'NY', "Cities" : 62 , "Capital" : 'Albany'},
                     { "Name" : 'Washington DC', "Code" : 'WC', "Cities" : 34 , "Capital" : 'Olympia'} 
                  ]
      },
  
      {
         "Name" : 'Germany' ,
         "National Language" : 'German' ,
         "Currency" : 'Euro' ,
         "No. of States" : '39',
         "State" : [  { "Name" : 'Hamburg', "Code" : 'HM', "Cities" : 18 , "Capital" : 'Hamburg'},
                     { "Name" : 'Berlin', "Code" : 'Br', "Cities" : 27 , "Capital" : 'Berlin'} 
                  ]
      },
  
      {
        "Name" : 'Australia' ,
        "National Language" : 'Australian-English' ,
        "Currency" : 'AUD' ,
        "No. of States" : '16',
        "State" : [  { "Name" : 'Queensland', "Code" : 'QL', "Cities" : 5 , "Capital" : 'Brisbane'},
                     { "Name" : 'Victoria', "Code" : 'VT', "Cities" : 3 , "Capital" : 'Melbourne'} 
                  ]
      },
      
      {
        "Name" : 'Japan' ,
        "National Language" : 'Japanese' ,
        "Currency" : 'Yen' ,
        "No. of States" : '47',
        "State" : [  { "Name" : 'Yokohama', "Code" : 'YH', "Cities" : 43 , "Capital" : 'Kanagawa'},
                     { "Name" : 'Hiroshima', "Code" : 'GJ', "Cities" : 22 , "Capital" : 'Hiroshima'} 
                  ]
      },
  
      {
        "Name" : 'UAE' ,
        "National Language" : 'Arabic' ,
        "Currency" : 'UAE Dirham' ,
        "No. of States" : '7',
        "State" : [  { "Name" : 'Dubai', "Code" : 'DB', "Cities" : 9 , "Capital" : 'Dubai City'},
                     { "Name" : 'Abu Dhabi', "Code" : 'AB', "Cities" : 23 , "Capital" : 'Abu Dhabi'} 
                  ]
      },
  
      {
        "Name" : 'Russia' ,
        "National Language" : 'Russian' ,
        "Currency" : 'RUB' ,
        "No. of States" : '21',
        "State" : [  { "Name" : 'Moscow', "Code" : 'MW', "Cities" : 54 , "Capital" : 'Moscow(federal city)'},
                     { "Name" : 'Yalta', "Code" : 'YT', "Cities" : 14 , "Capital" : 'Republic of Crimea'} 
                  ]
      },
  
      {
        "Name" : 'South Africa' ,
        "National Language" : 'Afrikaans' ,
        "Currency" : 'ZAR' ,
        "No. of States" : '9',
        "State" : [  { "Name" : 'Western Cape', "Code" : 'WT', "Cities" : 38 , "Capital" : 'Cape Town'},
                     { "Name" : 'Gauteng', "Code" : 'GT', "Cities" : 21 , "Capital" : 'Johannesburg'} 
                  ]
      },
  
      {
        "Name" : 'South Korea' ,
        "National Language" : 'Korean' ,
        "Currency" : 'KRW' ,
        "No. of States" : '22',
        "State" : [  { "Name" : 'Seoul', "Code" : 'SU', "Cities" : 38 , "Capital" : 'Seoul (Jung)'},
                     { "Name" : 'Gangwon', "Code" : 'GW', "Cities" : 42 , "Capital" : 'Chuncheon'} 
                  ]
      },
  
      {
        "Name" : 'United Kingdom' ,
        "National Language" : 'English-UK' ,
        "Currency" : 'GBP' ,
        "No. of States" : '4',
        "State" : [  { "Name" : 'England', "Code" : 'EN', "Cities" : 23 , "Capital" : 'London'},
                     { "Name" : 'Scotland', "Code" : 'SC', "Cities" : 26 , "Capital" : 'Edinburg'} 
                  ]
      },
    ];
      
  

  public toggle(event: any,index:number)
  {
     console.log('event id is'+event);
     this.showData = !this.showData;
     this.countryIndex=index;
    // this.router.navigate(['/app-table', this.countryIndex]);
    this.router.navigate(['/app-table', this.countries[this.countryIndex].Name]);  // To Display Country Name in URL
  }


 public setForm(event: any) 
 {
     this.showForm = !this.showForm;
 }


 public onSubmit()
 {
     this.submitted = true;
     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
     this.newState = this.registerForm.value;
    // alert(JSON.stringify(this.newState));
     this.countries[this.countryIndex].State.push(this.newState);
 }


 public onReset()
 {
     this.submitted = false;
     this.registerForm.reset();
 }

}
