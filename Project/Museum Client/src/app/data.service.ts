import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Injectable()
export class DataService {
    constructor(private http: Http) { }
	/////////////////////////////////////////////////////////
	
    getData(controller:string):Observable<any[]> {
   
        return this.http.get( 'http://127.0.0.1:8000/api/'+controller).map((response: Response) => 
        {          
            
            return <any[]> response.json() ;
           
        });
    }
   
  
        fun() {
            //let headers:any;
   
                let   headers = new Headers({'Content-Type': 'application/json'});
   
               return new RequestOptions({ headers: headers });
       }
       add1(rowData:Car,controller:string) :Observable<any[]> {
   //console.log(rowData);
  // console.log(unique)
  let unique = Object.getOwnPropertyNames(rowData)
  //console.log(uniqueRow)
   let inputString = 'http://127.0.0.1:8000/api/'+controller+'/add1?';
   for (let i = 0 ; i < unique.length ; i++){
       if(unique[i] != "" && unique[i]!=undefined){
           inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
       }
   }
        return this.http.get( inputString).map((response: Response) => 
        {          
            return <any[]> response.json() ;
           
        });
        };
       
    
    delete1(id:string , controller:string):Observable<any[]> {
   // console.log(id);
        return this.http.get( 'http://127.0.0.1:8000/api/'+controller+'/delete1/?id='+id).map((response: Response) => 
        {          
            return <any[]> response.json() ;
           
        });
    }
    
	   
	  /*  update(id:string, rowData:Car , controller:string ):Observable<any[]> {
            let unique = Object.getOwnPropertyNames(rowData)
            //console.log(id)
           // console.log(rowData)
             let inputString = 'http://127.0.0.1:8000/api/'+controller+'/update1?';
             for (let i = 0 ; i < unique.length ; i++){
                 if(unique[i] != "" && unique[i]!=undefined){
                     inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
                 }
             }
               // console.log(inputString)
           // console.log(id);
                 return this.http.get(inputString ).map((response: Response) => 
                 {          
                     return <any[]> response.json() ;
                    
                 });
                 };*/

                 updateVeiw(id:string, rowData:Car , controller:string ):Observable<any[]> {
                    let unique = Object.getOwnPropertyNames(rowData)
                    //console.log(id)
                   // console.log(rowData)
                   /*  let inputString = 'http://127.0.0.1:8000/api/'+controller+'/update1?';
                     for (let i = 0 ; i < unique.length ; i++){
                         if(unique[i] != "" && unique[i]!=undefined){
                             inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
                         }
                     }*/
                       // console.log(inputString)
                   // console.log(id);
                         return this.http.get('http://127.0.0.1:8000/api/'+controller+'/update1?id='+id+'&Students_id='+rowData["Students_id"]+'&Courses_id='+rowData["Courses_id"]+'&Grades_id='+rowData["Grades_id"]+'&Grade='+rowData["Grade"]+'&Examine_AT='+rowData["Examine_AT"] ).map((response: Response) => 
                         {          
                             return <any[]> response.json() ;
                            
                         });
                         };
                          updateStudent(id:string, rowData:Car , controller:string ):Observable<any[]> {
                             let unique = Object.getOwnPropertyNames(rowData)
                            //console.log(id)
                           // console.log(rowData)
                           /*  let inputString = 'http://127.0.0.1:8000/api/'+controller+'/update1?';
                             for (let i = 0 ; i < unique.length ; i++){
                                 if(unique[i] != "" && unique[i]!=undefined){
                                     inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
                                 }
                             }*/
                               // console.log(inputString)
                           // console.log(id);
                                 return this.http.get('http://127.0.0.1:8000/api/'+controller+'/update1?id='+id+'&Name='+rowData["Name"]+'&Student_id='+rowData["Student_id"]).map((response: Response) => 
                                 {          
                                     return <any[]> response.json() ;
                                    
                                 });
                                 };
                                 updateCourse(id:string, rowData:Car , controller:string ):Observable<any[]> {
                                    let unique = Object.getOwnPropertyNames(rowData)
                                    //console.log(id)
                                   // console.log(rowData)
                                   /*  let inputString = 'http://127.0.0.1:8000/api/'+controller+'/update1?';
                                     for (let i = 0 ; i < unique.length ; i++){
                                         if(unique[i] != "" && unique[i]!=undefined){
                                             inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
                                         }
                                     }*/
                                       // console.log(inputString)
                                   // console.log(id);
                                         return this.http.get('http://127.0.0.1:8000/api/'+controller+'/update1?id='+id+'&Name='+rowData["Name"]+'&Max_degrees='+rowData["Max_degrees"]+'&Study_years='+rowData["Study_years"]+'&Course_id='+rowData["Course_id"] ).map((response: Response) => 
                                         {          
                                             return <any[]> response.json() ;
                                            
                                         });
                                         };
                                         updateGrade(id:string, rowData:Car , controller:string ):Observable<any[]> {
                                            let unique = Object.getOwnPropertyNames(rowData)
                                            //console.log(id)
                                           // console.log(rowData)
                                           /*  let inputString = 'http://127.0.0.1:8000/api/'+controller+'/update1?';
                                             for (let i = 0 ; i < unique.length ; i++){
                                                 if(unique[i] != "" && unique[i]!=undefined){
                                                     inputString = inputString +unique[i]+'='+rowData[unique[i]]+'&'
                                                 }
                                             }*/
                                               // console.log(inputString)
                                           // console.log(id);
                                                 return this.http.get('http://127.0.0.1:8000/api/'+controller+'/update1?id='+id+'&Name='+rowData["Name"]+'&Min='+rowData["Min"]+'&Max='+rowData["Max"] ).map((response: Response) => 
                                                 {          
                                                     return <any[]> response.json() ;
                                                    
                                                 });
                                                 };
        
}
class Car {
      
    constructor(public vin?, public brand?, public color?, public year?) {}
}