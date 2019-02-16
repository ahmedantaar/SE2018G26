import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import { DataService } from '../data.service';
@Component({
    moduleId: module.id,
    selector: 'pic-community',
    templateUrl: 'pic-community.component.html',
    styleUrls: ['pic-community.component.scss']
})
export class PicCommunityComponent  implements OnInit {
    
    selectedCar: Car;
<<<<<<< HEAD
    selectedComment: Comment;
    comments:Comment[];
    comment: any = new Comment();
=======

>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
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
    imageUrl : string = "http://127.0.0.1:8000/storage/communityArt/";
    imgUrl2;
    constructor(private DataService: DataService, private route: ActivatedRoute) {


    }
    likes;
<<<<<<< HEAD
    comment1; 
    userId = localStorage.getItem("id");
start(){
    this.route.queryParams
    .filter(params => params.id)
    .subscribe(params => {
     // console.log(params); // {order: "popular"}

     
      this.id = params.id;
     //console.log(this.id); // popular
    });
    this.DataService.getArtDes(this.id, "community").subscribe(items => {
        
        this.cars = items;
        this.imgUrl2 = this.cars[0]["image"]
        //console.log(this.cars)
    },
        err => {
            console.log("error");
        });

      //  console.log(this.id)
        this.DataService.getmuseumComment(this.id, "communityCommentView").subscribe(items1 => {
        
          
            this.comments = items1;
            //console.log(items1)
        },
            err => {
                console.log("error");
            });

}
    ngOnInit() {
     
        this.start();
       
    }
    addComment(){
        this.DataService.addCommunityComment(this.userId, this.id , this.comment1 ,"communityComment").subscribe(items => {
            
           
=======

    ngOnInit() {
        this.route.queryParams
        .filter(params => params.id)
        .subscribe(params => {
         // console.log(params); // {order: "popular"}
  
         
          this.id = params.id;
         //console.log(this.id); // popular
        });
        this.DataService.getArtDes(this.id, "community").subscribe(items => {
            
            this.cars = items;
            this.imgUrl2 = this.cars[0]["image"]
            console.log(this.cars)
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
        },
            err => {
                console.log("error");
            });
<<<<<<< HEAD
            this.comment1 = null;
            this.start()
=======
        
       
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
    }
    }

class Car {

    constructor(public name?, public artist?, public description?, public likes? , public image? ) { }
}
<<<<<<< HEAD
class Comment {

    constructor(public museums_arts_id?, public name?, public comment? ) { }
}

=======
class Car {

    constructor(public name?, public artist?, public description?, public likes? , public image? ) { }
}


>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
