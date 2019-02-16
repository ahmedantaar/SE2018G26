<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class courses extends Model 
{

    protected   $table = 'courses';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [ 'Name' , 'Study_years' , 'Max_degrees' , 'Course_id'];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
