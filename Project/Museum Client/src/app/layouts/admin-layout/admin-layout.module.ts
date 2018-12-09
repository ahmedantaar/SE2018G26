import { SigninComponent } from './../../signin/signin.component';
import { PicCommunityComponent } from './../../pic-community/pic-community.component';
import { CommunityComponent } from './../../community/community.component';
import { ArtMuseumComponent } from './../../art-museum/art-museum.component';
import { PicdescriptionexhibitComponent } from './../../picdescriptionexhibit/picdescriptionexhibit.component';
import { AuctionComponent } from './../../auction/auction.component';
import { ExhibitsComponent } from './../../exhibits/exhibits.component';
import { MainPageComponent } from './../../main-page/main-page.component';
import { MainComponent } from './../../main/main.component';
import { ArtExhibitsComponent } from './../../art-exhibits/art-exhibits.component';
import { PicDescriptionComponent } from './../../pic-description/pic-description.component';
import { RegisterComponent } from './../../register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { DataService } from '../../data.service'
import {ButtonModule} from 'primeng/button';
import {GrowlModule} from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {AccordionModule} from 'primeng/accordion';  
import {MenuItem} from 'primeng/primeng'; 
import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/primeng';
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/contextmenu';

import {RadioButtonModule} from 'primeng/primeng';
import {CardModule} from 'primeng/card';

import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MatDialogModule } from '@angular/material';
import {
  
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { MuseumsComponent } from '../../museums/museums.component';







@NgModule({
  imports: [
    
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    RadioButtonModule,
    AccordionModule,
		TableModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		GrowlModule,
		InputTextModule,
		TabViewModule,
    CodeHighlighterModule,
    MatDialogModule,
    CardModule,
      
  ],
  
  declarations: [
    
    DashboardComponent,
    ArtExhibitsComponent,
    PicDescriptionComponent,
    MuseumsComponent,
    MainComponent,
    RegisterComponent,
    MainPageComponent,
    ExhibitsComponent,
    AuctionComponent,
    PicdescriptionexhibitComponent,
    ArtMuseumComponent,
    CommunityComponent,
    PicCommunityComponent,
    SigninComponent
    
  
    
   
  ],
 
})

export class AdminLayoutModule {}
