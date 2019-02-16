<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\communityArt;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class communityArtController extends Controller
{
     public function index(){
    // // $users = communityArt::select("vin" , "color")->get();
    // //$users = communityArt::getSchemaBuilder()->getColumnListing();
    // Log::info("lololo");
            $users = communityArt::all();
    //    // $users = communityArt::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = communityArt::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }

     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/communityArt/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/communityArt'; //line 2
                    $real_name = $File -> getClientOriginalName(); //line 3
                    
                    $destination_path = public_path($sub_path);  //line 4
                      
                    $File->move($destination_path,  $nameImg);  //line 5
                    return response()->json($nameImg);
                   
                }
  
   
    
      public function add1(Request $request){
         
         log::info("ooo");
        $newdata = $request->all();
        
        $newdata= communityArt::create($newdata);
     
    return $newdata; 
    }
    public function getArtDes(Request $request){
       
        $id = $request->input('id');
       
        $des = DB::table('community_arts')->where('id', $id)->get();
        
        return $des;
     }
    
 
}
		