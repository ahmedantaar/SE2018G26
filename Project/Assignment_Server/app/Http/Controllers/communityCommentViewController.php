<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

use Illuminate\Http\Request;
use \App\Test;
use \App\communityCommentView;

use DB;
use Illuminate\Pagination\Paginator;
use Log;
class communityCommentViewController extends Controller
{
     public function index(){
    // // $users = communityCommentView::select("vin" , "color")->get();
    // //$users = communityCommentView::getSchemaBuilder()->getColumnListing();
    // Log::info("lololo");
            $users = communityCommentView::all();
    //    // $users = communityCommentView::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = communityCommentView::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }

     public function saveFile(Request $request){
        log::info("hey12");
        $folderPath = public_path("storage/communityCommentView/*.*"); 
      
      $fi = glob($folderPath);
      $count = count($fi);
      
      
            
              $count +=1 ;
              $nameImg = (string)$count.".PNG";
              log::info($nameImg);
      
             $File = $request -> file('myfile'); //line 1
              log::info("hey14");
              log::info($File);
      
                    $sub_path = 'storage/communityCommentView'; //line 2
                    $real_name = $File -> getClientOriginalName(); //line 3
                    
                    $destination_path = public_path($sub_path);  //line 4
                      
                    $File->move($destination_path,  $nameImg);  //line 5
                    return response()->json($nameImg);
                   
                }
  

   
     public function getArtDes(Request $request){
       
        $id = $request->input('id');
       log::info("kokok");
        $des = DB::table('community_comment')->where('community_arts_id', $id)->get();
        log::info($des);
        return $des;
     }
    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = communityCommentView::all();
        communityCommentView::destroy($id);
        $users = communityCommentView::all();
        //$user = communityCommentView::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
         log::info("ooo");
        $newdata = $request->all();
        
        $newdata= communityCommentView::create($newdata);
     
    return $newdata; 
    }
   
    
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= communityCommentView::create($newdata);
            
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
        communityCommentView::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = communityCommentView::where('id',$id)->first();
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
        $user = communityCommentView::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		