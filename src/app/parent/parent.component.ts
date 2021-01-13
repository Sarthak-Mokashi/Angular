import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 
  // enterName = "Sarthak";
  // parentData = "";
  // TransferData() {
  // this.parentData = this.enterName;         //Static Property
  // }


  // value = "";

  // sendChildData(value: string){
  //    this.value = value;
  // }

  // ------------------------------------------------------------------------- // 

  // data ='';
  // passValue(event: any){                                                        // New Demo
  //   const value = event.target.value;
  //   this.data = value;
  // }

  // ------------------------------------------------------------------------- // 

  nameList: string[] = [];

  passValue(event: any){                                                        
       const value = event.target.value;
       this.nameList.push(value);
  }
}
