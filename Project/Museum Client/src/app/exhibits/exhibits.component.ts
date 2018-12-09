import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'exhibits',
    templateUrl: 'exhibits.component.html',
    styleUrls: ['exhibits.component.scss']
})
export class ExhibitsComponent {
    cols=[];
    menuItems: any[];
    
        ngOnInit(){
          
        this.cols = [
            { url: '..\\..\\assets\\img\\angular2-logo-red.png', header:"artist1", path: '../art' , class:""  },
            { url: "..\\..\\assets\\img\\cover.jpeg" , header:"artist2" , path: '../art' , class:"" },
            { url: "..\\..\\assets\\img\\sidebar-3.jpg", header:"artist3" , path: '../art' , class:""},
            { url: '..\\..\\assets\\img\\faces\\marc.jpg', header:"artist4", path: '../art' , class:""},
            { url: '..\\..\\assets\\img\\faces\\marc.jpg', header:"artist5", path: '../art' , class:""},
            { url: "..\\..\\assets\\img\\sidebar-3.jpg", header:"artist6" , path: '../art' , class:""},
        ];

}
}