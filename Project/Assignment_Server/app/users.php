<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class users extends Model 
{

    protected   $table = 'users';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'name', 'password' , 'email' , 'firstName' , 'lastName' , 'mobile'];
 
   
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
