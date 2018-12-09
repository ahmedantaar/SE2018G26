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
    { path: 'art',        component: ArtExhibitsComponent },
    { path: 'main',        component: MainPageComponent },
    { path: 'museum',        component: MuseumsComponent },
    { path: 'picture',        component: PicDescriptionComponent },
    { path: 'artexhibit',        component: ExhibitsComponent },
    { path: 'auction',        component: AuctionComponent },
];

