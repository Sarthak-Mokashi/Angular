import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //        OR
 // template: '<h1> Hii Angular </h1>',

 // styleUrls: ['./app.component.scss']
  styles : [`h1 {color : red}`]
 
})
export class AppComponent {
  title = 'new-angular-app';
}
