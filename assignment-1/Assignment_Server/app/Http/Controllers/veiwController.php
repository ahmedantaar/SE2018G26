<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\veiw;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class veiwController extends Controller
{
    public function index(){
    // $users = veiw::select("vin" , "color")->get();
    //$users = veiw::getSchemaBuilder()->getColumnListing();
    
            $users = veiw::all();
       // $users = veiw::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
      // $users = veiw::getSchemaBuilder()->getColumnListing($test);
      

    return  $users ;

    
    }

    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = veiw::all();
        veiw::destroy($id);
        $users = veiw::all();
        //$user = veiw::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         
         //  veiw::create($request->all());
         // $users = veiw::all();
         // return $users ;

          
          $newdata = $request->all();
          $newdata= veiw::create($newdata);
          
      return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= veiw::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = veiw::where('id',$id)->first();
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
        $user = veiw::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		