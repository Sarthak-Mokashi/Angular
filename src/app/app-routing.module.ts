import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { TableComponent } from './table/table.component';
import { TestEncapsulationComponent } from './test-encapsulation/test-encapsulation.component';



const routes: Routes = [

 // <!-- -------------- PARAMETERISED ROUTES(Dynamic URL Parameters) /:id ------------------ -->
 
   { path: 'data-binding/:id',  component: DataBindingComponent },
   { path: 'data-binding/:dataId/binding/:bindingId',  component: DataBindingComponent },

  // <!------------------------------------------------------------>

  {
    path: 'child',
    component: ChildComponent,
    outlet: 'childroute'
  },


  // {  
  //   path: 'parent',                                                            // Children Option
  //   children: [{
  //     path: 'child', component: ChildComponent,
  //   }]

  // },

  {
    path: 'new-data-binding',
    redirectTo: 'data-binding'
  },

  {
    path: 'data-binding',
    component: DataBindingComponent
  },

  {
    path: 'ngfor-demo',
    component: NgforDemoComponent
  },

  {
    path: 'ngif-demo',
    component: NgifDemoComponent
  },

  {
    path: 'parent',
    component: ParentComponent
  },

  {
    path: 'pipes',
    component: PipesComponent
  },

  {
    path: 'test-encapsulation',
    component: TestEncapsulationComponent
  },

  {
    path: 'app-table',
    component: TableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
