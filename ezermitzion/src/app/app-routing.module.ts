import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretaryComponent } from './secretary/secretary.component';
import { DairyComponent } from './dairy/dairy.component';
import { ReferenceComponent } from './reference/reference.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ProfessionsComponent } from './professions/professions.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { FormuserComponent } from './formuser/formuser.component';
import { UsersbuttonsComponent } from './usersbuttons/usersbuttons.component';
import { ProfessioListComponent } from './professio-list/professio-list.component';
import { CreateProfessionComponent } from './create-profession/create-profession.component';
import { ProfessionDetialsComponent } from './profession-detials/profession-detials.component';
import { SetdetailuserComponent } from './setdetailuser/setdetailuser.component';
const routes: Routes = [
{path:'secretary',component:SecretaryComponent},
{path:'dairy',component:DairyComponent},
{path:'rooms',component:RoomsComponent},
{path:'reference',component:ReferenceComponent},
{path:'professions',component:ProfessionsComponent},
{path:'user',component:UserComponent},
{path:'formuser',component:FormuserComponent},
{path:'usersbuttons',component:UsersbuttonsComponent},
{path:'proflist',component:ProfessioListComponent},
{path:'createnew',component: CreateProfessionComponent},
{path:'detail/:id',component: ProfessionDetialsComponent},
{path:'setdetailuser/:id',component:SetdetailuserComponent},
{path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }