<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class communityCommentView extends Model 
{

    protected   $table = 'community_comment';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'community_arts_id', 'name' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
