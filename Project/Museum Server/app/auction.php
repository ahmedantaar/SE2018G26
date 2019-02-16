<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



class auction extends Model 
{

    protected   $table = 'auctions';
   
    
   protected $primarykey = 'id';


   

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
   protected $fillable = [  'name', 'artist' , 'image', 'description' , 'leastbid' , 'startprice' , "showed" , 'user_id'];
  

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
  
}
