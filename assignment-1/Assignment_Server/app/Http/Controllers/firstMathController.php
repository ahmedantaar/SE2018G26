<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\firstgradeMath;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class firstMathController extends Controller
{
    public function index(){
    // $users = firstgradeMath::select("vin" , "color")->get();
    //$users = firstgradeMath::getSchemaBuilder()->getColumnListing();
    
            $users = firstgradeMath::all();
       // $users = firstgradeMath::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = firstgradeMath::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = firstgradeMath::all();
        firstgradeMath::destroy($id);
        $users = firstgradeMath::all();
        //$user = firstgradeMath::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  firstgradeMath::create($request->all());
         // $users = firstgradeMath::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= firstgradeMath::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= firstgradeMath::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = firstgradeMath::where('id',$id)->first();
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
        $user = firstgradeMath::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		