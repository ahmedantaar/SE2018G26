<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class exhibits extends Model 
{

    protected   $table = 'exhibits';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'name', 'address' , 'image'];
 

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
