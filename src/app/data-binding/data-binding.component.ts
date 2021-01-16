import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';       // For Parameterised Routes

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  heading = 'This is a Page-Heading';                                    // String

  page_count = 154;                                                      // Integer

  user_object = { firstName : "Sarthak" , lastName : "Mokashi"};         // Object

  names = [                                                              // Array
    {
      firstName : "Sarthak" , 
      lastName : "Mokashi",
    },
  
    {
      firstName : "Amey" , 
      lastName : "Patil",
    },

    {
      firstName : "Vaibhav" , 
      lastName : "Aher",
    },

    {
      firstName : "Abhishek" , 
      lastName : "Satpute",
    }
  
  ];

  imgURL = 'img.png';
  imgALT = "This is the image missing Text";

  txtColor = "blue";

  colVal ="5";

  eventCall(){
      alert("Event Binding executed Successfully !!");
  }

  alertMe(){
    alert("On MouseOver !!");
  }

  inputBox(){
    alert("Am being focused !!");
  }

  username = " Initial Temp Value ";

  // For Parameterised Routes
  DataId = 0;
  BindingId = 0;

  constructor(private activatedRoute : ActivatedRoute ) {           // For Parameterised Routes

    // First check path in 'app-routing.module.ts' file
    this.activatedRoute.params.subscribe((params => {
      const paramValue = params;
      this.DataId = paramValue.dataId;
      this.BindingId = paramValue.bindingId;
    }))
  }

  ngOnInit(): void {
  }

}
