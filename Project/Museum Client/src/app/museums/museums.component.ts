import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
    moduleId: module.id,
    selector: 'museums',
    templateUrl: 'museums.component.html',
    styleUrls: ['museums.component.scss']
})
export class MuseumsComponent implements OnInit {
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
 
    imageUrl = "http://127.0.0.1:8000/storage/";
    imageSrc : string;
    ngOnInit() {

       
        this.DataService.getData("museums").subscribe(items => {

            // this.msgs = [];
            this.cars = items;
         
           
           // console.log(this.cols)
        },
            error => {
                console.log("error");
            });

          


        // this.cols = [
        //     { url: '..\\..\\assets\\img\\museums\\1.jpg', header:"Egyption Museum", path: 'art' , class:""  },
        //     { url: "..\\..\\assets\\img\\museums\\photos.medleyphoto.2369092.jpg" , header:"The Louvre" , path: 'art' , class:"" },
        //     { url: "..\\..\\assets\\img\\museums\\Rijksmuseum-Amsterdam.jpg", header:"Rijksmuseum" , path: 'art' , class:""},
        //     { url: '..\\..\\assets\\img\\museums\\image-1 (1).jpg', header:"Cambodia", path: 'art' , class:""},
        //     { url: "..\\..\\assets\\img\\arts\\worlds-best-museums-02.jpg", header:"Musée D'Orsay" , path: 'art' , class:""},
        // ];


    }
    addmuseum() {

        this.displayDialog2 = true;
    }
    // handleFileInput(file : FileList){
    // this.fileToUpload = file.item(0);
    // console.log(this.fileToUpload)
    // //show image 
    // var reader = new FileReader();
    // reader.onload = (event:any) => {
    //    this.imgUrl = event.target.result;
    // }
    // reader.readAsDataURL(this.fileToUpload);
    // }
    
// file ;
//     handleInputChange(e) {
//        this.file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
     
      
//     }
//     _handleReaderLoaded(e) {
//       let reader = e.target;
//       console.log (reader);
//       this.imageSrc = reader.result;
//       console.log(this.imageSrc)
//     }

//     onFileSelected(event) {
//     this.selectedfile = <File>event.target.files[0];
//     }

//     handleFileInput(file : FileList){
//       this.fileToUpload = file.item(0);
//       var reader = new FileReader();
//       reader.onload = (event:any) =>{
//           this.imgUrl = event.target.result;
//       }
//       reader.readAsDataURL(this.fileToUpload)
//     }
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
imageName;
    onSubmit() {
        
           this.DataService.sendFile(this.formData).subscribe( //line8
            (response) => {
              //response code
              
              this.save(response);
        //console.log(response);
        //console.log(this.imageName);
            });
       
    
       
        //     this.DataService.add2(this.fileToUpload, "museums").subscribe(records => {

        //          // console.log(records)
        //       },
        //           error => {
        //         });
        this.displayDialog2 = false;
    }
    save(image){
   this.car.image = image;
    console.log(this.car.image)
    this.DataService.addMuseum(this.car,  "museums").subscribe(records => {

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