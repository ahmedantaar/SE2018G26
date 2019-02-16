<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class communityArt extends Model 
{

    protected   $table = 'community_arts';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'name', 'artist' , 'image', 'description' , 'likes' , 'comments_id' ];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
