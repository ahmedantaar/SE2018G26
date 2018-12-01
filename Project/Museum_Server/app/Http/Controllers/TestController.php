<?php

namespace App\Http\Controllers;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Illuminate\Http\Request;
use \App\User;

class TestController extends Controller
{
    public function index(){
                    $data = User::all();

                   return view('welcome',compact('data'));
    }
}
