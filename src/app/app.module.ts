import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { TestEncapsulationComponent } from './test-encapsulation/test-encapsulation.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { PipesComponent } from './pipes/pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { TableComponent } from './table/table.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//  import {HashLocationStrategy , LocationStrategy} from '@angular/common';           // For HashLocation Routing Strategy



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    TestEncapsulationComponent,
    NgifDemoComponent,
    NgforDemoComponent,
    PipesComponent,
    DataBindingComponent,
    TableComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
   // { provide: LocationStrategy , useClass: HashLocationStrategy}                         // For HashLocation Routing Strategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
