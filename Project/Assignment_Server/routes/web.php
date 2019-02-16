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

Route::get('api/museums/add1','\App\Http\Controllers\museumsController@add1');
Route::get('api/museums/add2','\App\Http\Controllers\museumsController@add2');
Route::get('api/museums/delete1','\App\Http\Controllers\museumsController@delete1');
Route::get('api/museums/update1','\App\Http\Controllers\museumsController@upload');
Route::get('api/museums/getImage','\App\Http\Controllers\museumsController@getImage');
Route::resource('api/museums', '\App\Http\Controllers\museumsController');


Route::get('api/exhibits/add1','\App\Http\Controllers\exhibitsController@add1');
Route::get('api/exhibits/add2','\App\Http\Controllers\exhibitsController@add2');
Route::get('api/exhibits/delete1','\App\Http\Controllers\exhibitsController@delete1');
Route::get('api/exhibits/update1','\App\Http\Controllers\exhibitsController@upload');
Route::get('api/exhibits/getImage','\App\Http\Controllers\exhibitsController@getImage');
Route::resource('api/exhibits', '\App\Http\Controllers\exhibitsController');



Route::get('api/museumsArt/add1','\App\Http\Controllers\museumsArtController@add1');
Route::get('api/museumsArt/delete1','\App\Http\Controllers\museumsArtController@delete1');
Route::get('api/museumsArt/update1','\App\Http\Controllers\museumsArtController@upload');
Route::get('api/museumsArt/getArt','\App\Http\Controllers\museumsArtController@getArt');
Route::get('api/museumsArt/getArtDes','\App\Http\Controllers\museumsArtController@getArtDes');
Route::resource('api/museumsArt', '\App\Http\Controllers\museumsArtController');

Route::get('api/museumComment/add1','\App\Http\Controllers\museumsCommentController@add1');
Route::get('api/museumComment/delete1','\App\Http\Controllers\museumsCommentController@delete1');
Route::get('api/museumComment/update1','\App\Http\Controllers\museumsCommentController@upload');
Route::get('api/museumComment/getArt','\App\Http\Controllers\museumsCommentController@getArt');
Route::get('api/museumComment/getArtDes','\App\Http\Controllers\museumsCommentController@getArtDes');
Route::resource('api/museumComment', '\App\Http\Controllers\museumsCommentController');

Route::get('api/exhibitComment/add1','\App\Http\Controllers\exhibtsCommentController@add1');
Route::get('api/exhibitComment/delete1','\App\Http\Controllers\exhibtsCommentController@delete1');
Route::get('api/exhibitComment/update1','\App\Http\Controllers\exhibtsCommentController@upload');
Route::get('api/exhibitComment/getArt','\App\Http\Controllers\exhibtsCommentController@getArt');
Route::get('api/exhibitComment/getArtDes','\App\Http\Controllers\exhibtsCommentController@getArtDes');
Route::resource('api/exhibitComment', '\App\Http\Controllers\exhibtsCommentController');

Route::get('api/communityComment/add1','\App\Http\Controllers\communityCommentController@add1');
Route::get('api/communityComment/delete1','\App\Http\Controllers\communityCommentController@delete1');
Route::get('api/communityComment/update1','\App\Http\Controllers\communityCommentController@upload');
Route::get('api/communityComment/getArt','\App\Http\Controllers\communityCommentController@getArt');
Route::get('api/communityComment/getArtDes','\App\Http\Controllers\communityCommentController@getArtDes');
Route::resource('api/communityComment', '\App\Http\Controllers\communityCommentController');


Route::get('api/museumCommentView/add1','\App\Http\Controllers\museumsCommentViewController@add1');
Route::get('api/museumCommentView/delete1','\App\Http\Controllers\museumsCommentViewController@delete1');
Route::get('api/museumCommentView/update1','\App\Http\Controllers\museumsCommentViewController@upload');
Route::get('api/museumCommentView/getArt','\App\Http\Controllers\museumsCommentViewController@getArt');
Route::get('api/museumCommentView/getArtDes','\App\Http\Controllers\museumsCommentViewController@getArtDes');
Route::resource('api/museumCommentView', '\App\Http\Controllers\museumsCommentViewController');

Route::get('api/exhibitCommentView/add1','\App\Http\Controllers\exhibtsCommentViewController@add1');
Route::get('api/exhibitCommentView/delete1','\App\Http\Controllers\exhibtsCommentViewController@delete1');
Route::get('api/exhibitCommentView/update1','\App\Http\Controllers\exhibtsCommentViewController@upload');
Route::get('api/exhibitCommentView/getArt','\App\Http\Controllers\exhibtsCommentViewController@getArt');
Route::get('api/exhibitCommentView/getArtDes','\App\Http\Controllers\exhibtsCommentViewController@getArtDes');
Route::resource('api/exhibitCommentView', '\App\Http\Controllers\exhibtsCommentViewController');


Route::get('api/communityCommentView/add1','\App\Http\Controllers\communityCommentViewController@add1');
Route::get('api/communityCommentView/delete1','\App\Http\Controllers\communityCommentViewController@delete1');
Route::get('api/communityCommentView/update1','\App\Http\Controllers\communityCommentViewController@upload');
Route::get('api/communityCommentView/getArt','\App\Http\Controllers\communityCommentViewController@getArt');
Route::get('api/communityCommentView/getArtDes','\App\Http\Controllers\communityCommentViewController@getArtDes');
Route::resource('api/communityCommentView', '\App\Http\Controllers\communityCommentViewController');



Route::get('api/exhibitsArt/add1','\App\Http\Controllers\exhibitsArtController@add1');
Route::get('api/exhibitsArt/delete1','\App\Http\Controllers\exhibitsArtController@delete1');
Route::get('api/exhibitsArt/update1','\App\Http\Controllers\exhibitsArtController@upload');
Route::get('api/exhibitsArt/getArt','\App\Http\Controllers\exhibitsArtController@getArt');
Route::get('api/exhibitsArt/getArtDes','\App\Http\Controllers\exhibitsArtController@getArtDes');
Route::resource('api/exhibitsArt', '\App\Http\Controllers\exhibitsArtController');

Route::get('api/auction/add1','\App\Http\Controllers\auctionController@add1');
Route::get('api/auction/delete1','\App\Http\Controllers\auctionController@delete1');
Route::get('api/auction/update1','\App\Http\Controllers\auctionController@upload');
Route::get('api/auction/getArt','\App\Http\Controllers\auctionController@getArt');
Route::get('api/auction/getArtDes','\App\Http\Controllers\auctionController@getArtDes');
Route::get('api/auction/addbid','\App\Http\Controllers\auctionController@addbid');
Route::get('api/auction/end','\App\Http\Controllers\auctionController@end');
Route::resource('api/auction', '\App\Http\Controllers\auctionController');


Route::get('api/community/add1','\App\Http\Controllers\communityArtController@add1');
Route::get('api/community/getArtDes','\App\Http\Controllers\communityArtController@getArtDes');
Route::resource('api/community', '\App\Http\Controllers\communityArtController');

Route::get('api/users/add1','\App\Http\Controllers\usersController@add1');
Route::get('api/users/delete1','\App\Http\Controllers\usersController@delete1');
Route::get('api/users/update1','\App\Http\Controllers\usersController@upload');
Route::get('api/users/check','\App\Http\Controllers\usersController@check');
Route::get('api/users/getbidu','\App\Http\Controllers\usersController@getbiduser');
Route::resource('api/users', '\App\Http\Controllers\usersController');


