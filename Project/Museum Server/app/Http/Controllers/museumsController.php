<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
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
    // // $users = museums::select("vin" , "color")->get();
    // //$users = museums::getSchemaBuilder()->getColumnListing();
    // Log::info("lololo");
            $users = museums::all();
    //    // $users = museums::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = museums::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }

     public function getImage(){
       
        log::info("imgg0");
        $image =  asset('storage/mm.png');
        log::info("imgg1");
        log::info($image);
         // $arts = DB::table('museums')->where('id', 39)->get();
         // log::info("mus4");
         // log::info($arts);
         return  $image;
       
         }
    // public function index1()
    // {
    // 	$images = museums::get();
    // 	return $images;
    // }
   
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
    
          
          $newdata = $request->all();
        
          $newdata= museums::create($newdata);
       
      return $newdata; 
   
    }


    private $name;
    public function saveFile(Request $request){
  log::info("hey12");
  $folderPath = public_path("storage/*.*"); 

$fi = glob($folderPath);
$count = count($fi);


      
        $count +=1 ;
        $nameImg = (string)$count.".PNG";
        log::info($nameImg);

       $File = $request -> file('myfile'); //line 1
        log::info("hey14");
        log::info($File);

              $sub_path = 'storage'; //line 2
              $real_name = $File -> getClientOriginalName(); //line 3
              
              $destination_path = public_path($sub_path);  //line 4
                
              $File->move($destination_path,  $nameImg);  //line 5
              return response()->json($nameImg);
             
          }

          public function saveFileDB(Request $request){
            log::info("data0");
         
            $newdata = (object) array('1' => 'foo');
                 $File = $request -> file('myfile'); //line 1
                  log::info("hey14");
                  log::info($File);
                  DB::insert('insert into museums (name, address, image) values (? ,? ,?)', [1, '2' , $File]);
                     
                        return response()->json('File Save');
                       
                    }

    public function add2(Request $request){
        // log::info("check1");
        // $file = $request->file('image');
        // log::info("check2");
        // log::info($file);
        //     $destinationPath = 'file_storage/';
        //     $originalFile = $file->getClientOriginalName();
        //     $filename=strtotime(date('Y-m-d-H:isa')).$originalFile;
        //     $file->move($destinationPath, $filename);
        log::info("check1");
        
            $data =  $request->input('image');
            log::info("check2");
            log::info($data);
            $png_url = "product-".time().".png";
            log::info("check3");
            $path = public_path().'img' . $png_url;
            log::info("check4");
            Image::make(file_get_contents($data->base64_image))->save($path);
            log::info("check5");     
            $response = array(
                'status' => 'success',
            );
            return Response::json( $response  );
         }
    
   
    public function addImage(Request $request){
         
         
        //  museums::create($request->all());
        // $users = museums::all();
        // return $users ;

         
         $newdata = $request->all();
         Log::info("132");
         Log::info($newdata);
         $newdata= museums::create($newdata);
         Log::info("12123");
         Log::info($newdata);
     return $newdata; 
   }
   
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= museums::create($newdata);
            
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
        museums::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
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
		