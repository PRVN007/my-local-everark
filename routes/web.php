<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*
|--------------------------------------------------------------------------
| Urls for Admin
|--------------------------------------------------------------------------

*/


//Route::get('admin/login', [ 'uses' => 'AuthController@login']);
//Route:get('admin/loginprocess', [ 'uses' => 'AuthController@loginProcess']);
//Route::get('login', [ 'uses' => 'CemeteryController@login']);
//Route::get('loginprocess', [ 'uses' => 'CemeteryController@loginProcess']);
//Route::get('cust/login', [ 'uses' => 'CustomerController@login']);
//Route::get('cust/loginprocess', [ 'uses' => 'CustomerController@loginProcess']);



Route::group([ 'middleware' => 'AdminAccess'], function () {
    Route::get('/admin/login', function () {
        if (Auth::guest()) {
            if(!empty(url()->previous()))
            {
                session()->put('rediretUrl', url()->previous());
            }
            return view('layout.auth_admin');
        } else {
            return redirect('admin/dashboard');
        }
    });
});



Route::group([ 'middleware' => 'auth','middleware' => 'AdminAccess', 'prefix' => 'admin'], function () {
    
        Route::get('/', function () {
            return redirect('admin/dashboard');
        });
    

});

