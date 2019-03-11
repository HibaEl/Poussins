import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirmesComponent } from './firmes/firmes.component';
import { FirmeCreateComponent } from './firmes/firme-create/firme-create.component';
import { FirmeListComponent } from './firmes/firme-list/firme-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FirmesComponent,
    FirmeCreateComponent,
    FirmeListComponent,
    FirmeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
