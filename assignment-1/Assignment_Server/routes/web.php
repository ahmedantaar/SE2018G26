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

Route::get('api/firstMath/add1','\App\Http\Controllers\firstMathController@add1');
Route::get('api/firstMath/delete1','\App\Http\Controllers\firstMathController@delete1');
Route::get('api/firstMath/update1','\App\Http\Controllers\firstMathController@update1');
Route::resource('api/firstMath', '\App\Http\Controllers\firstMathController');

Route::get('api/courses/add1','\App\Http\Controllers\coursesController@add1');
Route::get('api/courses/delete1','\App\Http\Controllers\coursesController@delete1');
Route::get('api/courses/update1','\App\Http\Controllers\coursesController@update1');
Route::resource('api/courses', '\App\Http\Controllers\coursesController');

Route::get('api/grades/add1','\App\Http\Controllers\gradesController@add1');
Route::get('api/grades/delete1','\App\Http\Controllers\gradesController@delete1');
Route::get('api/grades/update1','\App\Http\Controllers\gradesController@update1');
Route::resource('api/grades', '\App\Http\Controllers\gradesController');

Route::get('api/veiw/add1','\App\Http\Controllers\veiwController@add1');
Route::get('api/veiw/delete1','\App\Http\Controllers\veiwController@delete1');
Route::get('api/veiw/update1','\App\Http\Controllers\veiwController@update1');
Route::resource('api/veiw', '\App\Http\Controllers\veiwController');

Route::get('api/veiwEntry/add1','\App\Http\Controllers\veiwEntryController@add1');
Route::get('api/veiwEntry/delete1','\App\Http\Controllers\veiwEntryController@delete1');
Route::get('api/veiwEntry/update1','\App\Http\Controllers\veiwEntryController@update1');
Route::resource('api/veiwEntry', '\App\Http\Controllers\veiwEntryController');
