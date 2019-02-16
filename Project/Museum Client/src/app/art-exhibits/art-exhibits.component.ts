import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
    moduleId: module.id,
    selector: 'art-exhibits',
    templateUrl: 'art-exhibits.component.html',
    styleUrls: ['art-exhibits.component.scss']
})

export class ArtExhibitsComponent implements OnInit {

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
    imageUrl = "http://127.0.0.1:8000/storage/exhibitsArt/";
    constructor(private DataService: DataService, private route: ActivatedRoute) {


    }

    start(){
        this.DataService.getMuseumArt(this.id, "exhibitsArt").subscribe(items => {
            //console.log(items)
            this.cars = items;
        },
            err => {
                console.log("error");
            });
    }

    ngOnInit() {
        this.route.queryParams
            .filter(params => params.name)
            .subscribe(params => {
                //console.log(params); // {order: "popular"}

                this.name = params.name;
                this.id = params.id;
                //console.log(this.id); // popular
            });

     this.start();


    }

    onFileSelected(event) {
        this.selectedfile = <File>event.target.files[0];
    }

    upload() {

        this.displayDialog2 = true;
    }

    formData;
    uploadFile(event) {    //line 1
        let elem = event.target;  //line 2
        if (elem.files.length > 0) {     //line 3
            this.formData = new FormData();
            //elem.files[0].name = "1.PNG";  //line 4

            //console.log(elem.files[0])
            this.formData.append('myfile', elem.files[0]);  //line 5

        }
    }
    onSubmit() {

        this.DataService.sendExhibitArt(this.formData).subscribe( //line8
            (response) => {
                //response code

                this.save(response);

            });



        this.displayDialog2 = false;
    }
    save(image) {
        this.car.image = image;
        //console.log(this.car.image)
        this.DataService.addExhibitArt(this.car, this.id, "exhibitsArt").subscribe(records => {
this.start();
            // console.log(records)
        },
            error => {

            });
    }
}

class Car {

    constructor(public name?, public artist?, public description?, public exhibits_id?, public image?) { }
}