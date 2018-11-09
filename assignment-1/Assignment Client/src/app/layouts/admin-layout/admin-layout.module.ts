import { DetailsComponent } from './../../details/details.component';
import { StudytracksComponent } from './../../studytracks/studytracks.component';
import { CoursesComponent } from './../../courses/courses.component';
import { FieldsComponent } from './../../fields/fields.component';
import { QuestionsComponent } from './../../questions/questions.component';
import { RegisterComponent } from './../../register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {UsersComponent} from '../../users/users.component';

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
    MatDialogModule
   
      
  ],
  
  declarations: [
    
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    UsersComponent,
    RegisterComponent,
    QuestionsComponent,
    FieldsComponent,
    CoursesComponent,
    StudytracksComponent,
    
   
  ],
 
})

export class AdminLayoutModule {}
