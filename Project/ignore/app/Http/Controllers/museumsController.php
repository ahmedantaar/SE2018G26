<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\museums;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class museumsController extends Controller
{
    public function index(){
    // $users = museums::select("vin" , "color")->get();
    //$users = museums::getSchemaBuilder()->getColumnListing();
    
            $users = museums::all();
       // $users = museums::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = museums::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = museums::all();
        museums::destroy($id);
        $users = museums::all();
        //$user = museums::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  museums::create($request->all());
         // $users = museums::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= museums::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= museums::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = museums::where('id',$id)->first();
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
    public function destroy(Request $request, $id)
    {
        Log::info("lll");
        Log::info($id);
        $user = museums::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		