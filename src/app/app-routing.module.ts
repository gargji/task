import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './component/createuser/createuser.component';
import { DataComponent } from './component/data/data.component';
import { EdituserComponent } from './component/edituser/edituser.component';

const routes: Routes = [
  {
    path:"",
    component:DataComponent
  },
  {
    path:"createuser",
    component:CreateuserComponent
  },
  {
    path:"edituser/:id",
    component:EdituserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
