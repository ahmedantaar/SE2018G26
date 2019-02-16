<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class grades extends Model 
{

    protected   $table = 'grades';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [ 'Name' , 'Min' , 'Max'];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
