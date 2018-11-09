<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class veiw extends Model 
{

    protected   $table = 'final_view';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [ 'Student_Name' , 'Grade' , 'Course_Name' ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
