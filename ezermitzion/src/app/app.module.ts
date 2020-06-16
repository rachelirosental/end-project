import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { LoginComponent } from './login/login.component';
import { DairyComponent } from './dairy/dairy.component';
import { ReferenceComponent } from './reference/reference.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ProfessionsComponent } from './professions/professions.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerComponent } from './manager/manager.component';
import { FormuserComponent } from './formuser/formuser.component';
import { UsersbuttonsComponent } from './usersbuttons/usersbuttons.component';
import { ProfessioListComponent } from './professio-list/professio-list.component';
import { CreateProfessionComponent } from './create-profession/create-profession.component';
import { ProfessionDetialsComponent } from './profession-detials/profession-detials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetdetailuserComponent } from './setdetailuser/setdetailuser.component';
import { SetdetailreferenceComponent } from './setdetailreference/setdetailreference.component';
import { ReferencebuttonsComponent } from './referencebuttons/referencebuttons.component';
import { FormreferenceComponent } from './formreference/formreference.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SecretaryComponent,
    LoginComponent,
    DairyComponent,
    ReferenceComponent,
    RoomsComponent,
    ProfessionsComponent,
    UserComponent,
    ManagerComponent,
    FormuserComponent,
    UsersbuttonsComponent,
    ProfessioListComponent,
    CreateProfessionComponent,
    ProfessionDetialsComponent,
    SetdetailuserComponent,
    SetdetailreferenceComponent,
    ReferencebuttonsComponent,
    FormreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProfessionDetialsComponent,
    CreateProfessionComponent,

  ]
})
export class AppModule { }
