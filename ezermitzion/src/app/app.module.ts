import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecretaryComponent } from './secretary/secretary.component';
import { LoginComponent } from './login/login.component';
import {DairyComponent } from './dairy/dairy.component';
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
import { RoomlistComponent } from './roomlist/roomlist.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
// import { DemoComponent } from './component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormRefComponent } from './form-ref/form-ref.component';
import { NewdairyComponent } from './newdairy/newdairy.component';
import { DairylistComponent } from './dairylist/dairylist.component';
import { SetdetailRoomComponent } from './setdetail-room/setdetail-room.component';
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
    FormreferenceComponent,
    RoomlistComponent,
    FormRefComponent,
    NewdairyComponent,
    DairylistComponent,
    SetdetailRoomComponent,
    // [DemoComponent],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    // CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProfessionDetialsComponent,
    CreateProfessionComponent,
    NewdairyComponent,

  ]
})
export class AppModule { }
