<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\grades;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class gradesController extends Controller
{
    public function index(){
    // $users = grades::select("vin" , "color")->get();
    //$users = grades::getSchemaBuilder()->getColumnListing();
    
            $users = grades::all();
       // $users = grades::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = grades::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = grades::all();
        grades::destroy($id);
        $users = grades::all();
        //$user = grades::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  grades::create($request->all());
         // $users = grades::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= grades::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= grades::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = grades::where('id',$id)->first();
       //Log::info("ahmed1111");
       // Log::info($data);
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
        $user = grades::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		