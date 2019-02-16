<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class exhibitsComment extends Model 
{

    protected   $table = 'exhibits_comments';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'exhibits_arts_id', 'users_id' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
