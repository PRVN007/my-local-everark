<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'tbl_cemetery_users';
    protected $fillable = [
                        'id', 
                        'szName',
                        'szEmail',
                        'szPassword',
                        'remember_token',
                        'iRole',
                        'idParentAdmin',
                        'iActive',
                        'iVerifiedLogin',
                        'dtCreatedOn',
                        'dtUpdatedOn',
                        'szProfileImage',
                        'isDeleted',
                        'iFirstTime',
                        'dtLastLogin',
                        ];
}
