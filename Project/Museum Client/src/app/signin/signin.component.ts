import { Component } from '@angular/core';
import{DataService} from '../data.service';
import {  OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.scss']
})
export class SigninComponent implements OnInit {
    selectedCar: Car;
    cars: Car[];
    car: any = new Car();
 emailok:boolean = false ;
    constructor(private DataService: DataService ){
        //this.Math();
       
       
       }
ngOnInit(){
    
     
   
    }


    public Form  = {
    email:null,
    password: null,
    }
    signIn(){
<<<<<<< HEAD

        if (!localStorage.getItem("name")){
        //console.log("kk")
        this.DataService.checkUser(this.car,"users").subscribe(pass => {
        
             window.location.pathname = '../main'
            // console.log(pass)
             
=======
        console.log("kk")
        this.DataService.checkUser(this.car,"users").subscribe(pass => {
        
            // window.location.pathname = '../main'
             console.log(pass)
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
        //  if (this.car["password"] == pass){
        //      alert("pass is correct")
        //      window.location.pathname = '../main'
        //   }
        //   else{
        //    alert("password is incorrect")
        //   }
          
            },
       err =>  {
        
            alert("email or password is incorrect")
           
    
       });
       
       
     
    }
<<<<<<< HEAD
      else{
        alert("you have to logout first")
      } 
     
    }
=======
>>>>>>> c44877c7a1c28749208a48caa0161f9afe912c4a
    

    
}
class Car {
      
    constructor( public email?, public password?) {}
 }
 