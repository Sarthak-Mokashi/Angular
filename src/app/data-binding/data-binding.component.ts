import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
