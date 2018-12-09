import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pic-description',
    templateUrl: 'pic-description.component.html',
    styleUrls: ['pic-description.component.scss']
})
export class PicDescriptionComponent  implements OnInit {
    
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
