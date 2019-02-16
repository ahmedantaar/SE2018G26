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
<<<<<<< HEAD
        //console.log(items)
=======
        console.log(items)
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
    },
    error =>  {
                console.log("error");
    });
    }
    register(){
        
     this.DataService.addUser(this.car,"users").subscribe(records => {
           
<<<<<<< HEAD
          //console.log("hey")
=======
          console.log("hey")
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
           },
       error =>  {
                 
       });
    }

    
}
class Car {
      
     constructor(public name1?, public password1?, public email?, public firstName?, public lastName?, public mobile?) {}
 }
 