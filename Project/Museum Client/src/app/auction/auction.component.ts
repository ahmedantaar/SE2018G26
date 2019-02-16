import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ElementRef, Renderer } from '@angular/core';
import 'rxjs/add/operator/filter';


@Component({
    moduleId: module.id,
    selector: 'auction',
    templateUrl: 'auction.component.html',
    styleUrls: ['auction.component.scss']
})
export class AuctionComponent implements OnInit {

    selectedCar: Car;

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
  
   id;
    cols2 = [];
    cols3 = [];
    startTime: Date;
    imageUrl = "http://127.0.0.1:8000/storage/auction/";
    constructor(private DataService: DataService , private route: ActivatedRoute) {
    //   console.log("1")
    //     document.addEventListener('DOMContentLoaded', function(event) { 
    //         // get timestamp
    //         this.startTime = new Date(window.localStorage.getItem('startTime') || this.resetStartTime());
    //         // start timer
    //         //var time = parseInt(this.startTime)
    //         window.setInterval(function() {
    //           var secsDiff = new Date().getTime() - this.startTime.getTime();
    //           document.getElementById('timerLabel').innerText = Math.floor(secsDiff / 1000) + ' seconds elapsed.';
    //         }, 1000);
    //       });
    localStorage.setItem("datenow", Date.now().toString())
   //console.log( localStorage.getItem("datenow"))
    }
     resetStartTime() {
        this.startTime = new Date();
        var start =  Date.now().toString();
        window.localStorage.setItem('startTime', start);
        return this.startTime;
      }

name;
artist;
description;
id1;
image;
leastbid;
startprice;
bidUser;
bidUserName;

start(){
   this.bidUserName = "no one paid on this item yet";
    this.DataService.getData("auction").subscribe(items => {
           
      //  console.log(items["0"])
        this.cars = items["0"];
        this.name = items["0"]["name"];
        this.artist = items["0"]["artist"];
        this.description = items["0"]["description"];
        this.id1 = items["0"]["id"];
        this.image = items["0"]["image"];
        this.leastbid = items["0"]["leastbid"];
        this.startprice = items["0"]["startprice"];
      //  console.log(items["0"]["user_id"])
        if(items["0"]["user_id"] != null){
        this.bidUser = items["0"]["user_id"]
       // console.log("ahmed")
        }
        this.start2();
     },
     err => {''
     document.getElementById("container").style.display = 'none';
     document.getElementById("container1").style.display = 'block';
        //  alert("no more items on auction")
     });

   
     
}

start2(){
   
    this.DataService.getBidUser(this.bidUser , "users").subscribe(items1 => {
       if( items1["0"]["name"]){
            this.bidUserName = items1["0"]["name"];
       }
              },
      err => {
      
      });
    //  console.log(this.bidUserName)
            
}
    ngOnInit() {
      
    
     this.start();
   
     //console.log(this.bidUserName)
   

    }
//    resetStartTime() {
//        var  startTime = new Date();
//         localStorage.setItem('startTime', startTime);
//         return startTime;
//       }
     
    
   currentPrice = this.startprice;
    bid(){
        var idUser = localStorage.getItem("id");
       var value =(<HTMLInputElement>document.getElementById("bid")).value;
       if(idUser){
        if (value >= this.leastbid && value > this.startprice){
            
        ///localStorage.setItem('current', this.currentPrice);
        this.DataService.addbid(idUser , value , this.id1 , "auction").subscribe(records => {

            // console.log(records)
         },
             error => {
        
             });
    

        }
        else{
            alert("bid amount is less than the required amount")
        }
    }
    else{
alert("you need to login first")
    }
        this.start();
    }

    onFileSelected(event) {
        this.selectedfile = <File>event.target.files[0];
    }

    upload() {

        this.displayDialog2 = true;
    }

    formData;
    uploadFile(event){    //line 1
        let elem = event.target;  //line 2
        if(elem.files.length > 0){     //line 3
          this.formData = new FormData();
          //elem.files[0].name = "1.PNG";  //line 4
          
         // console.log(elem.files[0])
          this.formData.append('myfile', elem.files[0]);  //line 5
       
        }
    }
    onSubmit() {
        
        this.DataService.sendAuctionArt(this.formData).subscribe( //line8
         (response) => {
           //response code
           
           this.save(response);
           
 
         });
    
 
         this.start();
     this.displayDialog2 = false;
 }
 save(image){
this.car.image = image;
 //console.log(this.car.image)
 this.DataService.addAuctionArt(this.car, "auction").subscribe(records => {

    // console.log(records)
 },
     error => {

     });
}
end(){
    this.DataService.endAuctionArt(this.id1, "auction").subscribe(records => {

        // console.log(records)
     },
         error => {
    
         });
         this.start();
        
}
}

class Car {

    constructor( public name?,  public artist?, public description? , public exhibits_id? , public image?, public leastbid? , public startprice?) { }
}