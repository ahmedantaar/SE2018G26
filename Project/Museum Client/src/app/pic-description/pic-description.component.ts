import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { DataService } from '../data.service';


@Component({
    moduleId: module.id,
    selector: 'pic-description',
    templateUrl: 'pic-description.component.html',
    styleUrls: ['pic-description.component.scss']
})
export class PicDescriptionComponent implements OnInit {
    selectedCar: Car;
    selectedComment: Comment;
    comments:Comment[];
    comment: any = new Comment();
    mode: boolean = false;

    newCar: boolean;
    cars: Car[];
    
    cols = [];
    car: any = new Car();
  
    label;
    first;
    seconed;
    inputHeader;
    grad;
    detailip = [];
    list = [];
    cols1;
    index;
    answer1;
    try = [];
    unique_array = [];
    controller;
    answerEntry;
    showAnswer1;
    rightAnswer;
    finalAnswer;
    Grade;
    rateControl;
    menuItems: any[];
    displayDialog2: boolean;
    selectedfile: File = null;
    name;
    id;
    cols2 = [];
    cols3 = [];
    imageUrl : string = "http://127.0.0.1:8000/storage/museumsArt/";
    imgUrl2;
    constructor(private DataService: DataService, private route: ActivatedRoute) {


    }
    likes;
    comment1; 
    userId = localStorage.getItem("id")
    start(){
        this.route.queryParams
        .filter(params => params.id)
        .subscribe(params => {
         // console.log(params); // {order: "popular"}
  
         
          this.id = params.id;
         //console.log(this.id); // popular
        });
        this.DataService.getArtDes(this.id, "museumsArt").subscribe(items => {
            
            this.cars = items;
            this.imgUrl2 = this.cars[0]["image"]
           // console.log(this.cars)
        },
            err => {
                console.log("error");
            });
           // console.log(this.id)
            this.DataService.getmuseumComment(this.id, "museumCommentView").subscribe(items1 => {
            
              
                this.comments = items1;
               // console.log(items1)
            },
                err => {
                    console.log("error");
                });
            
    }
    ngOnInit() {
       
        
       this.start()
    }

    addComment(){
        this.DataService.addMuseumComment(this.userId, this.id , this.comment1 ,"museumComment").subscribe(items => {
            
           
        },
            err => {
                console.log("error");
            });
            this.comment1 = null;
            this.start()
    }
    }


class Car {

    constructor(public name?, public artist?, public description?, public likes? , public image?  ) { }
}
class Comment {

    constructor(public museums_arts_id?, public name?, public comment? ) { }
}