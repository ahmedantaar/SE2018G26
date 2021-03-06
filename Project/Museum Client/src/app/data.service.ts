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
    constructor(private http: Http, private httpClient: HttpClient) { }
    /////////////////////////////////////////////////////////



    getData(controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller).map((response: Response) => {

            return <any[]>response.json();

        });
    }

    getImage(controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getImage').map((response: Response) => {

            return <any[]>response.json();

        });
    }
    getBidUser(user_id , controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getbidu?id=' + user_id).map((response: Response) => {

            return <any[]>response.json();

        });
    }

    getMuseumArt(id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getArt?id=' + id).map((response: Response) => {

            return <any[]>response.json();

        });
    }

    getArtDes(id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getArtDes?id=' + id).map((response: Response) => {

            return <any[]>response.json();

        });
    }

    getmuseumComment(id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getArtDes?id=' + id).map((response: Response) => {

            return <any[]>response.json();

        });
    }

    getexhibitComment(id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/getArtDes?id=' + id).map((response: Response) => {

            return <any[]>response.json();

        });
    }



    fun() {
        //let headers:any;

        let headers = new Headers({ 'Content-Type': 'application/json' });

        return new RequestOptions({ headers: headers });
    }
    add1(rowData: Car, controller: string): Observable<any[]> {
        // console.log(rowData);
        // console.log(unique)
        let unique = Object.getOwnPropertyNames(rowData)
        //console.log(uniqueRow)
        let inputString = 'http://127.0.0.1:8000/api/' + controller + '/add1?';
        for (let i = 0; i < unique.length; i++) {
            if (unique[i] != "" && unique[i] != undefined) {
                inputString = inputString + unique[i] + '=' + rowData[unique[i]] + '&'
            }
        }
        return this.http.get(inputString).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    sendFile(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/file`;
        console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }

    sendexhibits(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/exhibits1`;
        console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }

    sendArt(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/museumArt`;
        //console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }

    sendExhibitArt(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/exhibitArt`;
        //console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }
    sendAuctionArt(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/auctionArt`;
        //console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }
    sendCommunity(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/communityArt`;
        //console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }


    saveFile(formData: any) { //line 3
        //assume your backend base url is http://127.0.0.1:8000
        let baseUrl = 'http://127.0.0.1:8000/api';
        let url = `${baseUrl}/file1`;
        console.log(url)    //line 4
        return this.httpClient.post(   //line 5
            url,
            formData)
    }
    addUser1(rowData: Car, controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name1"] + '&password=' + rowData["passsword1"] + '&image=' + rowData["image"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addMuseum(rowData: Car, controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name"] + '&address=' + rowData["address"] + '&image=' + rowData["image"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addMuseumComment(user_id, art_id , comment , controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?museums_arts_id=' + art_id + '&users_id=' + user_id + '&comment=' + comment).map((response: Response) => {
            return <any[]>response.json();

        });
    };

    addExhibitComment(user_id, art_id , comment , controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?exhibits_arts_id=' + art_id + '&users_id=' + user_id + '&comment=' + comment).map((response: Response) => {
            return <any[]>response.json();

        });
    };

    addCommunityComment(user_id, art_id , comment , controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?community_arts_id=' + art_id + '&users_id=' + user_id + '&comment=' + comment).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addCommunity(rowData: Car, controller: string): Observable<any[]> {
        // console.log(rowData["image"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name"] + '&artist=' + rowData["artist"] + '&description=' + rowData["description"] + '&image=' + rowData["image"] + '&likes=' + "0" + '&comments_id=' + "0").map((response: Response) => {
            return <any[]>response.json();

        });
    };
    add2(image, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add2?image=' + image).map((response: Response) => {
            return <any[]>response.json();

        });
    };

    addMuseumArt(rowData: Car, id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name"] + '&artist=' + rowData["artist"] + '&description=' + rowData["description"] + '&image=' + rowData["image"] + '&likes=' + "0" + '&comments_id=' + "0" + '&museums_id=' + id).map((response: Response) => {
            return <any[]>response.json();

        });
    };

    addExhibitArt(rowData: Car, id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name"] + '&artist=' + rowData["artist"] + '&description=' + rowData["description"] + '&image=' + rowData["image"] + '&likes=' + "0" + '&comments_id=' + "0" + '&exhibits_id=' + id).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addAuctionArt(rowData: Car,  controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name"] + '&artist=' + rowData["artist"] + '&description=' + rowData["description"] + '&image=' + rowData["image"] + '&leastbid=' + rowData["leastbid"] + '&startprice=' + rowData["startprice"] +'&showed=' + '0'  ).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    endAuctionArt(id,  controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/end?id=' + id  ).map((response: Response) => {
            return <any[]>response.json();

        });
    };

    addImage(image, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?image=' + image).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addbid(user_id , bid , id, controller: string): Observable<any[]> {

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/addbid?id=' + id+ '&bid=' + bid+ '&user_id=' + user_id ).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    addUser(rowData: Car, controller: string): Observable<any[]> {
        //   console.log(rowData)
        //   console.log(rowData["name"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/add1?name=' + rowData["name1"] + '&password=' + rowData["password1"] + '&email=' + rowData["email"] + '&firstName=' + rowData["firstName"] + '&lastName=' + rowData["lastName"] + '&mobile=' + rowData["mobile"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    // login(username: string, password: string) {
    //     return this.http.post(this.config.apiUrl + '/api/authenticate', { email: username, password: password })
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //              //   localStorage.setItem('currentUser', JSON.stringify(user));
				   
	// try {
    //         var base64Url = user.token.split('.')[1];
	// 		var base64 = base64Url.replace('-', '+').replace('_', '/');
    //         var data= JSON.parse(window.atob(base64));
    //        // localStorage.setItem('currentUser', JSON.stringify({ token: JSON.stringify(user), data: JSON.stringify(data)}));
    //         localStorage.setItem('data', JSON.stringify(data));
	// 		localStorage.setItem('token', JSON.stringify(user));
		 
    // } catch (e) { }
	
	

    //             }
    //         });
    // }
    checkUser(rowData: Car, controller: string) {
        console.log(rowData)
        // console.log(rowData["email"])
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/check?email=' + rowData["email"] + '&password=' + rowData["password"]).map((response: Response) => {
          
            this.logout();
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
             //   localStorage.setItem('currentUser', JSON.stringify(user));
                 try {
        var base64Url = user.token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        var data= JSON.parse(window.atob(base64));
       // localStorage.setItem('currentUser', JSON.stringify({ token: JSON.stringify(user), data: JSON.stringify(data)}));
        localStorage.setItem('data', JSON.stringify(data));
        localStorage.setItem('id', JSON.stringify(data["id"]));
        localStorage.setItem('name', JSON.stringify(data["name"]));
        localStorage.setItem('token', JSON.stringify(user));
        
    //		console.log('333ggggggggggggggggg333');

} catch (e) {}
            }
        });

}
logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}



   
    delete1(id: string, controller: string): Observable<any[]> {
        // console.log(id);
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/delete1/?id=' + id).map((response: Response) => {
            return <any[]>response.json();

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

    updateVeiw(id: string, rowData: Car, controller: string): Observable<any[]> {
        let unique = Object.getOwnPropertyNames(rowData)

        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/update1?id=' + id + '&Students_id=' + rowData["Students_id"] + '&Courses_id=' + rowData["Courses_id"] + '&Grades_id=' + rowData["Grades_id"] + '&Grade=' + rowData["Grade"] + '&Examine_AT=' + rowData["Examine_AT"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    updateStudent(id: string, rowData: Car, controller: string): Observable<any[]> {
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
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/update1?id=' + id + '&Name=' + rowData["Name"] + '&Student_id=' + rowData["Student_id"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    updateCourse(id: string, rowData: Car, controller: string): Observable<any[]> {
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
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/update1?id=' + id + '&Name=' + rowData["Name"] + '&Max_degrees=' + rowData["Max_degrees"] + '&Study_years=' + rowData["Study_years"] + '&Course_id=' + rowData["Course_id"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };
    updateGrade(id: string, rowData: Car, controller: string): Observable<any[]> {
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
        return this.http.get('http://127.0.0.1:8000/api/' + controller + '/update1?id=' + id + '&Name=' + rowData["Name"] + '&Min=' + rowData["Min"] + '&Max=' + rowData["Max"]).map((response: Response) => {
            return <any[]>response.json();

        });
    };

}
class Car {

    constructor(public vin?, public brand?, public color?, public year?) { }
}