<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\auction;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class auctionController extends Controller
{
     public function index(){
   
        log::info("111");  //$users = auction::all();
        $users = DB::table('auctions')->where('showed', "0")->get();
        $bid = DB::table('auctions')->where('showed', "0")->first()->id;
       // $bid2 = DB::table('auctions')->where('id', $bid)->update(['showed' => "1"]);
        log::info("222");
        //$users =  (array) $yourObject;
        //$yourObject = (object)$yourObject;
        //log::info($users["0"]);
        return $users;
   
    
     }
     public function addbid(Request $request)
     {
      
         $id = $request->input('id');
         $value = $request->input('bid');
         $userId = $request->input('user_id');
         $data = auction::where('id',$id)->value("startprice");
        Log::info("bid1");
        Log::info($id);
        Log::info($value);
        Log::info($data);
         $lastValue = $data + $value;
         Log::info($lastValue);
        $auction = auction::where('id', $id) ->update(['startprice' => $value , 'user_id' => $userId]);
        Log::info($auction);
             return $auction;
        
     }

     public function end(Request $request)
     {
      
         $id = $request->input('id');
         
         $bid = DB::table('auctions')->where('showed', "0")->first()->id;
         $bid2 = DB::table('auctions')->where('id', $bid)->update(['showed' => "1"]);
             return $bid2;
        
     }
     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/auction/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/auction'; //line 2
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
        
        $newdata= auction::create($newdata);
     
    return $newdata; 
    }
   
    
 
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = auction::where('id',$id)->first();
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
		