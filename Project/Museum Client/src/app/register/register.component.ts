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
       
       
       
       }
ngOnInit(){
    this.DataService.getData("users").subscribe(items => {
        //console.log(items)
    },
    error =>  {
                console.log("error");
    });
    }
    register(){
        
     this.DataService.addUser(this.car,"users").subscribe(records => {
           
          //console.log("hey")
           },
       error =>  {
                 
       });
    }

    
}
class Car {
      
     constructor(public name1?, public password1?, public email?, public firstName?, public lastName?, public mobile?) {}
 }
 