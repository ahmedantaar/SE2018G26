<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\museumsComment;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class museumsCommentController extends Controller
{
     public function index(){
    // // $users = museumsComment::select("vin" , "color")->get();
    // //$users = museumsComment::getSchemaBuilder()->getColumnListing();
    // Log::info("lololo");
            $users = museumsComment::all();
    //    // $users = museumsComment::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = museumsComment::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }

     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/museumsComment/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/museumsComment'; //line 2
                    $real_name = $File -> getClientOriginalName(); //line 3
                    
                    $destination_path = public_path($sub_path);  //line 4
                      
                    $File->move($destination_path,  $nameImg);  //line 5
                    return response()->json($nameImg);
                   
                }
  
     public function getArt(Request $request){
       
        $id = $request->input('id');
       
        $arts = DB::table('museums_arts')->where('museums_id', $id)->get();
        
        return $arts;
     }
   
     public function getArtDes(Request $request){
       
        $id = $request->input('id');
       
        $des = DB::table('museums_comments')->where('museums_arts_id', $id)->get();
        
        return $des;
     }
    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = museumsComment::all();
        museumsComment::destroy($id);
        $users = museumsComment::all();
        //$user = museumsComment::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         log::info("ooo");
        $newdata = $request->all();
        
        $newdata= museumsComment::create($newdata);
     
    return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= museumsComment::create($newdata);
            
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
        museumsComment::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = museumsComment::where('id',$id)->first();
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
        $user = museumsComment::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		