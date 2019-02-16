<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\veiwEntry;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class veiwEntryController extends Controller
{
    public function index(){
    // $users = veiwEntry::select("vin" , "color")->get();
    //$users = veiwEntry::getSchemaBuilder()->getColumnListing();
    
            $users = veiwEntry::all();
       // $users = veiwEntry::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = veiwEntry::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = veiwEntry::all();
        veiwEntry::destroy($id);
        $users = veiwEntry::all();
        //$user = veiwEntry::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  veiwEntry::create($request->all());
         // $users = veiwEntry::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= veiwEntry::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= veiwEntry::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = veiwEntry::where('id',$id)->first();
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
        $user = veiwEntry::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		