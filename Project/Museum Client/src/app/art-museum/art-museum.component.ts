import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'art-museum',
    templateUrl: 'art-museum.component.html',
    styleUrls: ['art-museum.component.scss']
})
export class ArtMuseumComponent implements OnInit {
    cols=[];
    cols1=[];
    cols2=[];
    cols3=[];
    
        ngOnInit(){
        this.cols = [
            { field: "..\\..\\assets\\img\\sidebar-1.jpg" , path:"picture" , class:""},
            { field: "..\\..\\assets\\img\\cover.jpeg" , path:"picture" , class:""  },
            { field: "..\\..\\assets\\img\\sidebar-3.jpg" , path:"picture" , class:"" },
            { field: '..\\..\\assets\\img\\faces\\marc.jpg' , path:"picture" , class:""}
        ];
        this.cols1 = [
            { field: '..\\..\\assets\\img\\arts\\51WAV1JasFL.jpg', path:"picture" , class:"" },
            { field: "..\\..\\assets\\img\\sidebar-3.jpg" , path:"picture" , class:""},
            { field: '..\\..\\assets\\img\\3.jpg', path:"picture" , class:"" },
            { field: "..\\..\\assets\\img\\cover.jpeg" , path:"picture" , class:""  }
        ];
        this.cols2 = [
            { field: "..\\..\\assets\\img\\sidebar-4.jpg", path:"picture" , class:"" },
            { field: '..\\..\\assets\\img\\3.jpg', path:"picture" , class:"" },
            { field: "..\\..\\assets\\img\\sidebar-3.jpg", path:"picture" , class:"" },
            { field: '..\\..\\assets\\img\\faces\\marc.jpg ' , path:"picture" , class:""}
        ];
        this.cols3 = [
            { field: "..\\..\\assets\\img\\cover.jpeg", path:"picture" , class:"" },
            { field: '..\\..\\assets\\img\\faces\\marc.jpg ', path:"picture" , class:"" },
            { field: '..\\..\\assets\\img\\3.jpg', path:"picture" , class:""},
            { field: '..\\..\\assets\\img\\sidebar-1.jpg', path:"picture" , class:"" }
        ];
    
        }
    
    }