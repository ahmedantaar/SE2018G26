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
            { url: '..\\..\\assets\\img\\artists\\download (1).jpg', header:"picasso", path: 'art' , class:""  },
            { url: "..\\..\\assets\\img\\artists\\Hiller_Carlos_2-1024x683.jpg" , header:"artist" , path: 'art' , class:"" },
            { url: "..\\..\\assets\\img\\artists\\artyork.jpg", header:"artist3" , path: 'art' , class:""},
            { url: '..\\..\\assets\\img\\faces\\marc.jpg', header:"artist4", path: '.art' , class:""},
            { url: '..\\..\\assets\\img\\artists\\download.jpg', header:"van gogh", path: 'art' , class:""},
           
        ];

}
}