<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class communityComment extends Model 
{

    protected   $table = 'community_comments';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'community_arts_id', 'users_id' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
