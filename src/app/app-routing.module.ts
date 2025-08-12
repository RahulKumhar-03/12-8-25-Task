import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'table'},
  {path:'table',component: TableComponent},
  {path:'tabs', component:TabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
