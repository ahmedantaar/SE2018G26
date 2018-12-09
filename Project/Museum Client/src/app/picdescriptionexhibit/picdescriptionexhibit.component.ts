import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'picdescriptionexhibit',
    templateUrl: 'picdescriptionexhibit.component.html',
    styleUrls: ['picdescriptionexhibit.component.scss']
})
export class PicdescriptionexhibitComponent implements OnInit {
    
    likes;
    cols=[];
    ngOnInit(){
        this.likes = 5 ;

        this.cols = [
            { Name: 'ahmed', Comment:"Comment"  },
            { Name: 'mohamed', Comment:"Comment"  },
            { Name: 'atef', Comment:"Comment"  },
        ];
    }

}