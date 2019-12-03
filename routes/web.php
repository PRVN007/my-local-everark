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
Route::group(['middleware' => ['web']], function (){
	Route::get('/', function () {
		return view('welcome');
	});
	
	/*
	|--------------------------------------------------------------------------
	| Admin Panel Routes
	|--------------------------------------------------------------------------
	*/

	Route::get('admin/login', 'Admin\Auth\AuthController@login')->name('Admin.login');
	Route::post('admin/loginProcess', 'Admin\Auth\AuthController@loginProcess')->name('Admin.loginProcess');
	
	Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => ['auth:admin']], function () {
		Route::get('logout', 'Auth\AuthController@logout')->name('Admin.logout');
		
	});
	
	
	/*
	|--------------------------------------------------------------------------
	| Cemetry Panel Routes
	|--------------------------------------------------------------------------
	*/
	Route::get('cemetry/login', 'Cemetry\Auth\AuthController@login')->name('Cemetry.login');
	Route::post('cemetry/loginProcess', 'Cemetry\Auth\AuthController@loginProcess')->name('Cemetry.loginProcess');
	
	Route::group(['namespace' => 'Cemetry', 'prefix' => 'cemetry', 'middleware' => ['auth:cemetry']], function () {
		Route::get('logout', 'Auth\AuthController@logout')->name('Cemetry.logout');
		
	});
	
	
	/*
	|--------------------------------------------------------------------------
	| Customer Panel Routes
	|--------------------------------------------------------------------------
	*/	
	Route::get('customer/login', 'Customer\Auth\AuthController@login')->name('Customer.login');
	Route::post('customer/loginProcess', 'Customer\Auth\AuthController@loginProcess')->name('Customer.loginProcess');
	
	Route::group(['namespace' => 'Customer', 'prefix' => 'customer', 'middleware' => ['auth:customer']], function () {
		Route::get('logout', 'Auth\AuthController@logout')->name('Customer.logout');
		
	});
	
});

