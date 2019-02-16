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

        if (!localStorage.getItem("name")){
        //console.log("kk")
        this.DataService.checkUser(this.car,"users").subscribe(pass => {
        
             window.location.pathname = '../main'
            // console.log(pass)
             
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
      else{
        alert("you have to logout first")
      } 
     
    }
    

    
}
class Car {
      
    constructor( public email?, public password?) {}
 }
 