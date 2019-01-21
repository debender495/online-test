import { Component, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JsonpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import {
  Http,
  HttpModule,
  RequestOptions,
  XHRBackend,

} from "@angular/http";


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { OnlineTestComponent } from "./online-test/online-test.component";
import { RegistrationService } from "./services/registration.service";
import { OnlineTestService } from "./services/online-test.service";
import { ResultComponent } from "./result/result.component";

var appRoutes: Routes = [
  {
    path: "",
    redirectTo: "register",
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegistrationComponent
  },
   {
    path: "onlineTest",
    component: OnlineTestComponent
  },
  {
    path: "result",
    component: ResultComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    HttpModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{ useHash: true }),

  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
    OnlineTestComponent,
    ResultComponent
  ],
  providers: [RegistrationService, OnlineTestService],

  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
