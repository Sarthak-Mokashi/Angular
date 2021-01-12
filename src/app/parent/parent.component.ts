import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
 
  enterName = "Sarthak";
  parentData = "";
  TransferData() {
  this.parentData = this.enterName;         //Static Property
  }


  // value = "";

  // sendChildData(value: string){
  //    this.value = value;
  // }
    
   
  constructor() { }

  ngOnInit(): void {
    console.log('Inside Parent OnInit !!');
  }

}
