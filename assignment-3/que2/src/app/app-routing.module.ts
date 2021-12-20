import { UserComponent } from './user/user.component';
import { DataComponent } from './data/data.component';
import { ComboComponent } from './combo/combo.component';
import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './array/array.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'array',component:ArrayComponent},
  {path:'combo',component:ComboComponent},
  {path:'data',component:DataComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
