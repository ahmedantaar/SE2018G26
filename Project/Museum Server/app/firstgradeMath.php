<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class firstgradeMath extends Model 
{

    protected   $table = 'students';
   
    
    protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [ 'Name' , 'Student_id'];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
