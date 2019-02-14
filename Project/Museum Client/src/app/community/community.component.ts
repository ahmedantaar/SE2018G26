import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'community',
    templateUrl: 'community.component.html',
    styleUrls: ['community.component.scss']
})
export class CommunityComponent implements OnInit {
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
   name;
   id;
    cols2 = [];
    cols3 = [];
    imageUrl = "http://127.0.0.1:8000/storage/communityArt/";
    constructor(private DataService: DataService , private route: ActivatedRoute) {
        

    }
    
        ngOnInit(){
       
            this.DataService.getData("community").subscribe(items => {
                // console.log(items)
                this.cars = items;
             },
             err => {
                 console.log("error");
             });
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
              
              console.log(elem.files[0])
              this.formData.append('myfile', elem.files[0]);  //line 5
             // console.log(this.formData)
            //   this.DataService.sendFile(this.formData).subscribe( //line8
            //     (response) => {
            //       //response code
            // console.log(response);
            //     });
        
            }
        }
        onSubmit() {
            
            this.DataService.sendCommunity(this.formData).subscribe( //line8
             (response) => {
               //response code
               
               this.save(response);
     
             });
        
     
    
         this.displayDialog2 = false;
     }
     save(image){
    this.car.image = image;
     console.log(this.car.image)
     this.DataService.addCommunity(this.car, "community").subscribe(records => {
    
        // console.log(records)
     },
         error => {
    
         });
    }
    
    }

    class Car {

        constructor( public name?,  public artist?, public description? , public museums_id? , public image?) { }
    }   
    