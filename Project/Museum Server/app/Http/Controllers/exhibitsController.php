<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\exhibits;

use DB;
use Illuminate\Pagination\Paginator;
use Log;


class exhibitsController extends Controller
{
     public function index(){
 
            $users = exhibits::all();
   

     return  $users ;

    
     }

     public function getImage(){
       
        log::info("imgg0");
        $image =  asset('storage/mm.png');
        log::info("imgg1");
        log::info($image);
      
         return  $image;
       
         }
 
    // }
   
 
      public function add1(Request $request){
    
          
          $newdata = $request->all();
        
          $newdata= exhibits::create($newdata);
       
      return $newdata; 
   
    }


    private $name;
    public function saveFile(Request $request){
  log::info("hey188");
  $folderPath = public_path("storage/exhibits/*.*"); 

$fi = glob($folderPath);
$count = count($fi);


      
        $count +=1 ;
        $nameImg = (string)$count.".PNG";
        log::info($nameImg);

       $File = $request -> file('myfile'); //line 1
        log::info("hey14");
        log::info($File);

              $sub_path = 'storage/exhibits'; //line 2
              $real_name = $File -> getClientOriginalName(); //line 3
              
              $destination_path = public_path($sub_path);  //line 4
                
              $File->move($destination_path,  $nameImg);  //line 5
              return response()->json($nameImg);
             
          }

         

   
    
   
    public function addImage(Request $request){
         
   
         $newdata = $request->all();
         Log::info("132");
         Log::info($newdata);
         $newdata= exhibits::create($newdata);
         Log::info("12123");
         Log::info($newdata);
     return $newdata; 
   }
   
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= exhibits::create($newdata);
            
        return $newdata; 
      
		
		
        
    }
    public function upload(Request $request)
    {
    	$this->validate($request, [
    		'id' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);


        $input['image'] = time().'.'.$request->image->getClientOriginalExtension();
        $request->image->move(public_path('images'), $input['image']);


        $input['id'] = $request->id;
        exhibits::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = exhibits::where('id',$id)->first();
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
        $user = exhibits::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		