<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();

    Route::post('file', 'museumsController@saveFile');
    Route::post('museumArt', 'museumsArtController@saveFile');
    Route::post('communityArt', 'communityArtController@saveFile');
    Route::post('exhibits1', 'exhibitsController@saveFile');
    Route::post('exhibitArt', 'exhibitsArtController@saveFile');
    Route::post('auctionArt', 'auctionController@saveFile');

