<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('api/museums/add1','\App\Http\Controllers\museumsController@add1');
Route::get('api/museums/delete1','\App\Http\Controllers\museumsController@delete1');
Route::get('api/museums/update1','\App\Http\Controllers\museumsController@update1');
Route::resource('api/museums', '\App\Http\Controllers\museumsController');
