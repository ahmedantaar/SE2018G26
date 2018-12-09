import { ArtMuseumComponent } from './../../art-museum/art-museum.component';
import { AuctionComponent } from './../../auction/auction.component';
import { ExhibitsComponent } from './../../exhibits/exhibits.component';
import { MainPageComponent } from './../../main-page/main-page.component';
import { MainComponent } from './../../main/main.component';
import { ArtExhibitsComponent } from './../../art-exhibits/art-exhibits.component';

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { RegisterComponent } from '../../register/register.component';
import { MuseumsComponent } from '../../museums/museums.component';
import { PicDescriptionComponent } from '../../pic-description/pic-description.component';
import { PicdescriptionexhibitComponent } from '../../picdescriptionexhibit/picdescriptionexhibit.component';
import { CommunityComponent } from '../../community/community.component';
import { PicCommunityComponent } from '../../pic-community/pic-community.component';
import { SigninComponent } from '../../signin/signin.component';


NgModule({
    imports: [
RouterModule.forChild([
  //  { path: 'register', component: RegisterComponent},
  ])
],
exports: [
  RouterModule
]})

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',        component: MainPageComponent },
    { path: 'main',        component: MainPageComponent },
    { path: 'museum',        component: MuseumsComponent },
    { path: 'museum/art',        component: ArtMuseumComponent },
    { path: 'museum/art/picture',        component: PicDescriptionComponent },
    { path: 'artexhibit',        component: ExhibitsComponent },
    { path: 'artexhibit/art',        component: ArtExhibitsComponent },
    { path: 'artexhibit/art/picture',        component: PicdescriptionexhibitComponent },
    { path: 'community',        component: CommunityComponent },
    { path: 'community/picture',        component: PicCommunityComponent },
    { path: 'auction',        component: AuctionComponent },
    { path: 'register',        component: RegisterComponent },
    { path: 'signin',        component: SigninComponent }
    
    
    
    
   
    
];

