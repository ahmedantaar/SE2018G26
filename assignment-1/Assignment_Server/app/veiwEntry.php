<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class veiwEntry extends Model 
{

    protected   $table = 'custom_view';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [ 'Students_id' , 'Courses_id', 'Examine_AT', 'Grades_id' , 'Grade'];
 

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
