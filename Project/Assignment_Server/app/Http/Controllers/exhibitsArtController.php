<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\exhibitsArt;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class exhibitsArtController extends Controller
{
     public function index(){
   
            $users = exhibitsArt::all();
   

     return  $users ;

    
     }

     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/exhibitsArt/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/exhibitsArt'; //line 2
                    $real_name = $File -> getClientOriginalName(); //line 3
                    
                    $destination_path = public_path($sub_path);  //line 4
                      
                    $File->move($destination_path,  $nameImg);  //line 5
                    return response()->json($nameImg);
                   
                }
  
     public function getArt(Request $request){
       
        $id = $request->input('id');
       
        $arts = DB::table('exhibits_arts')->where('exhibits_id', $id)->get();
        
        return $arts;
     }
   
     public function getArtDes(Request $request){
       
        $id = $request->input('id');
       
        $des = DB::table('exhibits_arts')->where('id', $id)->get();
        
        return $des;
     }
  
      public function add1(Request $request){
         
         log::info("ooo");
        $newdata = $request->all();
        
        $newdata= exhibitsArt::create($newdata);
     
    return $newdata; 
    }
   
    
 
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = exhibitsArt::where('id',$id)->first();
       Log::info("ahmed1111");
        Log::info($data);
        if($data ){
            $data->update($request->all());
            return $data;
        }else{
            return response('NotFound',403);
        }
    }
/////////////////////////////////////////////////////////////////////////////////////// 

}
		