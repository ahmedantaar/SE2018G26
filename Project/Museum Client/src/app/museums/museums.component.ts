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
            { url: '..\\..\\assets\\img\\museums\\1.jpg', header:"Egyption Museum", path: 'art' , class:""  },
            { url: "..\\..\\assets\\img\\museums\\photos.medleyphoto.2369092.jpg" , header:"The Louvre" , path: 'art' , class:"" },
            { url: "..\\..\\assets\\img\\museums\\Rijksmuseum-Amsterdam.jpg", header:"Rijksmuseum" , path: 'art' , class:""},
            { url: '..\\..\\assets\\img\\museums\\image-1 (1).jpg', header:"Cambodia", path: 'art' , class:""},
            { url: "..\\..\\assets\\img\\arts\\worlds-best-museums-02.jpg", header:"Musée D'Orsay" , path: 'art' , class:""},
        ];

}
}
