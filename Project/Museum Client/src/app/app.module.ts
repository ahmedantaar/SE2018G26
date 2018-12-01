import { RegisterComponent } from './register/register.component';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {DialogModule} from 'primeng/dialog';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import {  Title }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RadioButtonModule} from 'primeng/primeng';
import { DashboardComponent } from './dashboard/dashboard.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatDialogModule } from '@angular/material';





@NgModule({
  imports: [
   
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    RadioButtonModule,
    DialogModule,
   MatDialogModule,
  
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  entryComponents: [

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    
    //RegisterComponent
 
   
    

  ],
  providers: [DataService , Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
