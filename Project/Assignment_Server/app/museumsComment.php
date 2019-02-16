<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class museumsComment extends Model 
{

    protected   $table = 'museums_comments';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'museums_arts_id', 'users_id' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
