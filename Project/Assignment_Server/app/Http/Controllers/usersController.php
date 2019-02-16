<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\auth;
use App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use \App\users;

use DB;
use Illuminate\Pagination\Paginator;

 //use Illuminate\Auth;
use Log;
class usersController extends Controller
{/**
     * Create a new AuthController instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('jwt.auth', ['except' => ['authenticate']]);
    // }
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login']]);
    // }
 
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
    }
     public function index(){
    // // $users = users::select("vin" , "color")->get();
    // //$users = users::getSchemaBuilder()->getColumnListing();
     Log::info("akml");
            $users = users::all();
    //    // $users = users::whereBetween('_id', [0, 1000000000000000000000000000000000000000000])->get();
    //   // $users = users::getSchemaBuilder()->getColumnListing($test);
      

     return  $users ;

    
     }
   
     public function check(Request $request){
        
//         $email = $request->input('email');
//         $password = $request->input('password');
//         log::info("1q");
//         $pass = DB::table('users')->where('email', $email)->value('password');
//         log::info("123321");
//         log::info($pass);
// if($password != $pass){
//         return "error";


    // }
    // return response()->json(compact('token'));

    log::info("qqw");
    $credentials = $request->only('email', 'password');
    $user = users::where('email', '=', $credentials['email'])->first();
    //log::info($user);
    // $validCredentials = Hash::check($credentials['password'], $user->getAuthPassword());
    // log::info($validCredentials);
    $pass = DB::table('users')->where('email',  $credentials['email'])->value('password');

if ($pass == $credentials['password']) {
$customClaims = ['name' => $user->name, 'id' => $user->id, 'email' => $user->email];
log::info($customClaims);
    try {
         //if (! $token = JWTAuth::attempt($credentials,$customClaims)) {
        if (! $token = JWTAuth::fromUser($user,$customClaims)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }
    } catch (JWTException $e) {
        return response()->json(['error' => 'could_not_create_token'], 500);
    }
    log::info($customClaims);
    // if no errors are encountered we can return a JWT
    return response()->json(compact('token'));
    
    }
    
    return response()->json(['error' => 'invalid_credentials'], 401);
    }


    public function delete1(Request $request){
       $id = $request->input('id');
       // $users = users::all();
       users::destroy($id);
        $users = users::all();
        //$user = users::first();
        //$user->delete();
         return $users ;
      
      }
      public function add1(Request $request){
         
        Log::info("k1k1");
       
         //  users::create($request->all());
         // $users = users::all();
         // return $users ;

          
          $newdata = $request->all();
          Log::info("k4k2");
          Log::info($newdata);
          $newdata= users::create($newdata);
          Log::info("k2k2");
          Log::info($newdata);
      return $newdata; 
    }
   
    public function getbiduser(Request $request)
    {
     
		
		
		    log::info("fk");
            $userId = $request->input("id");
            $pass = DB::table('users')->where('id', $userId)->get();
            log::info($pass);
        return $pass; 
      
		
		
        
    } 
    public function store(Request $request)
    {
     
		
		
		
            $newdata = $request->all();
            $newdata= users::create($newdata);
            
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
        users::create($input);


    	return back()
    		->with('success','Image Uploaded successfully.');
    }
	
 /////////////////////////////////////////////////////////////////////////////////////
    public function update1(Request $request)
    {
     
        $id = $request->input('id');
      
        $data = users::where('id',$id)->first();
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
        $user = users::where('Year', 1995)->get();;
        $user->delete();
       
    } 
}
		