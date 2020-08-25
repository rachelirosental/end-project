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
import { NgModule,enableProdMode  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap'
import { FusionChartsModule } from 'angular-fusioncharts';
 
// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

import * as chartspower from "fusioncharts/fusioncharts.powercharts";
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as ExcelExport from "fusioncharts/fusioncharts.excelexport";

// import * as FusionMaps from "fusioncharts/fusioncharts.maps";
// import * as Israel from "fusionmaps/maps/fusioncharts.israel";
// import World from 'fusioncharts/maps/es/fusioncharts.world';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme, chartspower, ExcelExport);
// import { DemoComponent } from './component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormRefComponent } from './form-ref/form-ref.component';
import { NewdairyComponent } from './newdairy/newdairy.component';
import { DairylistComponent } from './dairylist/dairylist.component';
import { SetdetailRoomComponent } from './setdetail-room/setdetail-room.component';
import { ChartComponent } from './chart/chart.component';
import { GragchartComponent } from './gragchart/gragchart.component';
import { ReferencemodalComponent } from './referencemodal/referencemodal.component';
import { OpinionmaodalComponent } from './opinionmaodal/opinionmaodal.component';
import { OpinionlistmodalComponent } from './opinionlistmodal/opinionlistmodal.component';
import { MeetmodalComponent } from './meetmodal/meetmodal.component';
import { CounselorComponent } from './counselor/counselor.component';
import { MeetcounselerComponent } from './meetcounseler/meetcounseler.component';
import { ModalmeetsComponent } from './modalmeets/modalmeets.component';
import { ChartbuttonsComponent } from './chartbuttons/chartbuttons.component';

FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)
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
    ChartComponent,
    GragchartComponent,
    ReferencemodalComponent,
    OpinionmaodalComponent,
    OpinionlistmodalComponent,
    MeetmodalComponent,
    CounselorComponent,
    MeetcounselerComponent,
    ModalmeetsComponent,
    ChartbuttonsComponent,

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
    NgbModalModule
    ,FusionChartsModule,
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
    ReferenceComponent,
    RoomsComponent,
    SetdetailRoomComponent,
    OpinionmaodalComponent,
    OpinionlistmodalComponent,
    ReferencemodalComponent,
    MeetmodalComponent,
    MeetcounselerComponent,
    ModalmeetsComponent
  ]
})
export class AppModule { }
