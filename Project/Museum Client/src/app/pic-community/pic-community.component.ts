import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pic-community',
    templateUrl: 'pic-community.component.html',
    styleUrls: ['pic-community.component.scss']
})
export class PicCommunityComponent  implements OnInit {
    
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
