import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'museums',
    templateUrl: 'museums.component.html',
    styleUrls: ['museums.component.scss']
})
export class MuseumsComponent  implements OnInit {
    cols=[];
    menuItems: any[];
    
        ngOnInit(){
          
        this.cols = [
            { url: '..\\..\\assets\\img\\angular2-logo-red.png', header:"museum1", path: '../art' , class:""  },
            { url: "..\\..\\assets\\img\\cover.jpeg" , header:"museum2" , path: '../art' , class:"" },
            { url: "..\\..\\assets\\img\\sidebar-3.jpg", header:"museum3" , path: '../art' , class:""},
            { url: '..\\..\\assets\\img\\faces\\marc.jpg', header:"museum4", path: '../art' , class:""},
            { url: '..\\..\\assets\\img\\faces\\marc.jpg', header:"museum4", path: '../art' , class:""},
            { url: "..\\..\\assets\\img\\sidebar-3.jpg", header:"museum3" , path: '../art' , class:""},
        ];

}
}
