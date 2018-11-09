import {
    Component, Input, ElementRef, AfterViewInit, ViewChild, HostListener
  } from '@angular/core';
import{DataService} from '../data.service';
import { HttpModule } from '@angular/http'; 
import {  OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


import {DOCUMENT} from "@angular/platform-browser";
import {Inject} from "@angular/core"; 
import {Message} from 'primeng/primeng';

import { SortEvent } from 'primeng/api';
//import{CarService} from '../carservice';
import { SelectItem } from 'primeng/api';

@Component({
    moduleId: module.id,
    selector: 'fields',
    templateUrl: 'fields.component.html',
    styleUrls: ['fields.component.scss']
})
export class FieldsComponent implements OnInit {

    selectedCar: Car;
    mode : boolean = false;
    displayDialog: boolean;
    displayDialog2: boolean;
    displayDialog3: boolean;
    newCar: boolean;
    cars: Car[];
    cols= [];
    car: any = new Car();
label ;
first ;
seconed;
  inputHeader;
  grad;
  detailip = [] ;
list = [];
cols1;
index;
answer1;

try = [];
unique_array = [];
controller ;
answerEntry ;

 showAnswer1;
 rightAnswer;
 finalAnswer;
   constructor(private DataService: DataService ){
       
   
   }
   ngOnInit(){
    this.Math();
   }

    pic = true;
     x =0 ;
     x1 =0 ;
     o=0  ;
   

  
    Math(){
      
        this.controller = "grades";
        document.getElementById("table").style.display = 'block';

        this.first = "Vin";
   
       this.label = "Cars";
     
     
     this.DataService.getData(this.controller).subscribe(items => {
        
     // this.msgs = [];
    this.cars = items;  
    
    this.detailip = [];
this.detailip.push(...Object.getOwnPropertyNames(items));
 
   
    this.list = [];
 
  

  for ( let i = 0 ; i<=this.detailip.length-2 ; i++){
    this.list.push(...Object.getOwnPropertyNames(items[i]))
  }
 
  //console.log(this.list);

 // console.log(this.list)
     this.unique_array = [];
    for(let i = 0;i < this.list.length; i++){
        if(this.unique_array.indexOf(this.list[i]) == -1){
           this.unique_array.push(this.list[i])
        }

}

   
    //console.log(this.unique_array);
    function remove(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
    }
    if(this.unique_array.includes("_id")){
        remove(this.unique_array,"_id");
    }
    if(this.unique_array.includes("updated_at")){
        remove(this.unique_array,"updated_at");
    }
    if(this.unique_array.includes("created_at")){
        remove(this.unique_array,"created_at");
    }
   
   if(this.unique_array.includes("id")){
    remove(this.unique_array,"id");
   }
    if(this.showAnswer1 == 0){

    }
  

        this.cols = [];
        for(let i = 0 ; i < this.unique_array.length ; i++){
            this.cols1 = {field:this.unique_array[i],header:this.unique_array[i],answer:i};
            this.cols.push(this.cols1);
           
        }
     
        
       // console.log(this.cols)
      },
error =>  {
            console.log("error");
});
    }

   
    Enter(rowData){
    //console.log(this.rightAnswer)
       this.finalAnswer = rowData.Answer ;
    if( this.answerEntry == rowData.Answer){
     this.rightAnswer = "Correct";
    }
    else{
        this.rightAnswer = "Wrong";
    }
    //console.log(this.rightAnswer);
    this.displayDialog3 = true;
    }
  /*  getIndex(rawData){
    for(let i = 0 ; i <= this.detailip.length-2 ; i++){
       if(this.cars[i]["Question"] == rawData.Question){
           this.index = i ;
       }
    }
   //console.log(this.index)
    }*/
    showDialog(){
        this.inputHeader = undefined;
        this.mode = true ;
        this.car = {};
        this.displayDialog = true;

    }
    Cancel(){
        this.displayDialog = false;
        
        this.displayDialog2 = false;
        this.displayDialog3 = false;
    }

  
    
   edit(rowData){
    this.inputHeader = undefined;
       this.mode = false;
   this.car = {...rowData};
   this.displayDialog = true;
   this.car.id = rowData.id;
   }
Details(rowData){
    this.car = {...rowData};
    this.displayDialog2 = true;
}

   save(){
      
if (this.mode){ // Add mode
   // console.log(this.car);
   this.o = 1;
   //console.log(this.car)
    this.DataService.add1(this.car,this.controller).subscribe(records => {
    this.Math();
   
    },
error =>  {
          
});
}
else{  // Edit mode
 // console.log(this.car);

    this.DataService.updateGrade(this.car.id, this.car , this.controller).subscribe(records => {
        this.Math();
       
    },
error =>  {

});
}
this.displayDialog = false;
   }
   
   delete(rowData){
   
    this.DataService.delete1(rowData.id , this.controller).subscribe(x => {
        this.Math();
     },
      error =>  {
            console.log(error);

        });	
 }

 

}
class Car {
      
   // constructor(public vin?, public brand?, public color?) {}
}

