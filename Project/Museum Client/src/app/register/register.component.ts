import { Component } from '@angular/core';
import{DataService} from '../data.service';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {
    selectedCar: Car;
    cars: Car[];
    car: any = new Car();

    constructor(private DataService: DataService ){
        //this.Math();
       
       
       }
ngOnInit(){
    this.DataService.getData("users").subscribe(items => {
        
        // this.msgs = [];
       this.cars = items; 
       console.log(this.cars); 
    },
    error =>  {
                console.log("error");
    }); 
     
   
    }
    register(){
        this.car.Status = "Active";
        this.DataService.add1(this.car,"users").subscribe(records => {
           
          
           },
       error =>  {
                 
       });
    }

    
}
class Car {
      
    // constructor(public vin?, public brand?, public color?) {}
 }
 