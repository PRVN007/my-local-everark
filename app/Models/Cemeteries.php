<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class Cemeteries extends Model
{
    protected $table = 'tbl_cemetery_users';
    protected $fillable = [
                        'id', 
                        'idCemetery',
                        'szFirstName',
                        'szLastName',
                        'szEmail',
                        'szPassword',
                        'google_id',
                        'remember_token',
                        'iSuperAdmin',
                        'iActive',
                        'iVerifiedLogin',
                        'isDeleted',
                        'dtCreatedOn',
                        'dtUpdatedOn',
                        'szResetPasswordKey',
                        'szImage', 
                        'szRoleText',
                        'iPurchaseReminder',
                        'iPaymentReminder',
                        'iOtherNotification',
                        'stripe_id',
                        'card_brand',
                        'card_last_four',
                        'trial_ends_at',
                        'card_country',
                        'card_exp_month',
                        'card_exp_year'
                        ];
}
