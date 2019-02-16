<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class museumsCommentView extends Model 
{

    protected   $table = 'museum_comment';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'museums_arts_id', 'name' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
