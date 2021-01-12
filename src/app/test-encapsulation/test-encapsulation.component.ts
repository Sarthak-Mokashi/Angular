import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-encapsulation',
  templateUrl: './test-encapsulation.component.html',
  styleUrls: ['./test-encapsulation.component.scss'] ,
//  encapsulation: ViewEncapsulation.Emulated ,    // (By Default) -- Style-Tag seen in Head Tag

// encapsulation: ViewEncapsulation.None ,     // Removes the encapsulation -- Applies to all Divs , Style-Tag seen in Head Tag

 encapsulation: ViewEncapsulation.ShadowDom ,  // Applies to only Div in this Component -- Style-Tag seen in Body inside app-test-component Tag  
})
export class TestEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
