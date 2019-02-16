<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class exhibitsCommentView extends Model 
{

    protected   $table = 'exhibit_comment';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'exhibits_arts_id', 'name' , 'comment'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
