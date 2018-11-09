<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\courses;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class coursesController extends Controller
{
    public function index(){
    // $users = courses::select("vin" , "color")->get();
    //$users = courses::getSchemaBuilder()->getColumnListing();
    
            $users = courses::all();
       // $users = courses::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = courses::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = courses::all();
        courses::destroy($id);
        $users = courses::all();
        //$user = courses::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  courses::create($request->all());
         // $users = courses::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= courses::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= courses::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = courses::where('id',$id)->first();
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
        $user = courses::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		