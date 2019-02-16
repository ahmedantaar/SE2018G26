import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
    moduleId: module.id,
    selector: 'exhibits',
    templateUrl: 'exhibits.component.html',
    styleUrls: ['exhibits.component.scss']
})
export class ExhibitsComponent implements OnInit {
    selectedCar: Car;

    selectedVeiw: Veiw;
    mode: boolean = false;

    newCar: boolean;
    cars: Car[];
    veiws: Veiw[];

    cols = [];
    car: any = new Car();
    veiw: any = new Veiw();

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
     myBlob = new Blob();
    showAnswer1;
    rightAnswer;
    finalAnswer;
    Grade;
    rateControl;
    imgBlob ;
    menuItems: any[];
    displayDialog2: boolean;
    selectedfile: File = null;
    
    fileToUpload: File = null;
    
    // constructor(private http: HttpClient) {}
    constructor(private DataService: DataService) {


    }
 
    imageUrl = "http://127.0.0.1:8000/storage/exhibits/";
    imageSrc : string;
<<<<<<< HEAD


    start(){
=======
    ngOnInit() {

>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
       
        this.DataService.getData("exhibits").subscribe(items => {

            // this.msgs = [];
            this.cars = items;
         
           
           // console.log(this.cols)
        },
            error => {
                console.log("error");
            });

          


  
<<<<<<< HEAD
    }
    ngOnInit() {

this.start();
=======

>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a

    }
    addmuseum() {

        this.displayDialog2 = true;
    }

    formData;
    uploadFile(event){    //line 1
        let elem = event.target;  //line 2
        if(elem.files.length > 0){     //line 3
          this.formData = new FormData();
        
<<<<<<< HEAD
         // console.log(elem.files[0])
=======
          console.log(elem.files[0])
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
          this.formData.append('myfile', elem.files[0]);  //line 5
        
        }
    }
imageName;
    onSubmit() {
        
           this.DataService.sendexhibits(this.formData).subscribe( //line8
            (response) => {
          
              
              this.save(response);
    
            });
       
    
        this.displayDialog2 = false;
    }
    save(image){
   this.car.image = image;
<<<<<<< HEAD
   // console.log(this.car.image)
    this.DataService.addMuseum(this.car,  "exhibits").subscribe(records => {
        this.start();
=======
    console.log(this.car.image)
    this.DataService.addMuseum(this.car,  "exhibits").subscribe(records => {

>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
       // console.log(records)
    },
        error => {

        });
    }
   

}
class Car {

    constructor(public address?, public name?) { }
}

class Veiw {
    constructor(public address?, public name? , public image?) { }
}