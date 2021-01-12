import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-demo',
  templateUrl: './ngif-demo.component.html',
  styleUrls: ['./ngif-demo.component.scss']
})
export class NgifDemoComponent implements OnInit {

//  success_msg = true;           // Can see msg in ngIf                             // Normal ngIf
//  success_msg = false;          // Cannot see msg in ngIf

//  success_msg = true;           // If both are False then False , else True        // ngIf Using Operators
//  success_flag = true;

//  success_msg = true;                                                              // ngIf Using OR-Operator      

//  success_msg = false;                                                             // ngIf with else

  success_msg = true;                                                                // ngIf with Then & Else

  constructor() { }

  ngOnInit(): void {
  }

}
