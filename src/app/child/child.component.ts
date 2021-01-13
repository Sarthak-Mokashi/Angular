import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() parentData: string | undefined;
  // @Output() public sendData = new EventEmitter<string>();

  // ------------------------------------------------------------------------- //

  // @Input() name : String | undefined ;                                            // New Demo

  // ------------------------------------------------------------------------- //


  @Input() list: string[] | undefined ;


  constructor() { }

  ngOnInit(){

      // console.log('Inside Child OnInit !!');
      // console.log('Parent Data Received');
      // this.sendData.emit('Child Data Received !!');
    
  // ------------------------------------------------------------------------- //

  


  }
  
}
