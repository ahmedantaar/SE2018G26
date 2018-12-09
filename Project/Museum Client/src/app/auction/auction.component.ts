import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'auction',
    templateUrl: 'auction.component.html',
    styleUrls: ['auction.component.scss']
})
export class AuctionComponent implements OnInit {
    
    likes;
   
    ngOnInit(){
        this.likes = 5 ;

      
    }

}
