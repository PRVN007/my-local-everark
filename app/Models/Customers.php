<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    protected $table = 'customer_users';
    protected $fillable = [
                        'id', 
                        'szEmail',
                        'szPassword',
                        'idCemetery',   
                        'dtCreateOn',
                        'dtUpdatedOn'
                        ];
}
