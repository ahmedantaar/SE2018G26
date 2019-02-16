<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\museumsCommentView;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class museumsCommentViewController extends Controller
{
     public function index(){
    // // $users = museumsCommentView::select("vin" , "color")->get();
    // //$users = museumsCommentView::getSchemaBuilder()->getColumnListing();
    // Log::info("lololo");
            $users = museumsCommentView::all();
    //    // $users = museumsCommentView::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = museumsCommentView::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }

     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/museumsCommentView/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/museumsCommentView'; //line 2
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
       
        $des = DB::table('museum_comment')->where('museums_arts_id', $id)->get();
        
        return $des;
     }
    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = museumsCommentView::all();
        museumsCommentView::destroy($id);
        $users = museumsCommentView::all();
        //$user = museumsCommentView::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         log::info("ooo");
        $newdata = $request->all();
        
        $newdata= museumsCommentView::create($newdata);
     
    return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= museumsCommentView::create($newdata);
            
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
        museumsCommentView::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = museumsCommentView::where('id',$id)->first();
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
        $user = museumsCommentView::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		