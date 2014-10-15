<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('admin/logout', array(
    'as' => 'admin.logout',
    'uses' => 'Rocket\Core\Controllers\AuthController@getLogout'
));

Route::get('admin/login', array(
    'as' => 'admin.login',
    'uses' => 'Rocket\Core\Controllers\AuthController@getLogin'
));

Route::post('admin/login', array(
    'as' => 'admin.login.post',
    'uses' => 'Rocket\Core\Controllers\AuthController@postLogin'
));

$apiNamespace = 'Rocket\Controllers\Api\\';
Route::group(Config::get('routes.api_group_rules'), function() use ($apiNamespace)
{
    Route::get('/', array('as' => 'api.index'));
    Route::resource('page', $apiNamespace.'PageController');
    Route::resource('article', $apiNamespace.'ArticlesController');
    Route::resource('image', $apiNamespace . 'ImageController');
    Route::resource('template', $apiNamespace.'TemplateController');
    Route::resource('setting', $apiNamespace.'SettingsController');
    Route::resource('form', $apiNamespace.'FormController');
    Route::resource('user', $apiNamespace.'UserController');
});


Route::group(Config::get('routes.admin_group_rules'), function()
{

    Route::get('/', array(
        'uses' => 'Rocket\Core\Controllers\AdminController@index',
        'as' => 'admin.index'
    ));

    // Single page
    Route::get('{slug}', array(
        'uses' => 'AdminController@index'
    ))->where('slug', '^.*$');
});

Route::get('/', 'Rocket\Core\Controllers\FrontendController@index'); // Home page

// on a post
Route::post('{slug}', array('uses' => 'Rocket\Core\Controllers\FrontendController@post'))
    ->where('slug', '^((?!(admin|api)).)*$');

App::before(function()
{
    // get all pages
    Route::get('{slug}', array('as' => 'page', 'uses' => 'Rocket\Core\Controllers\FrontendController@show'))
        ->where('slug', '^((?!(admin|api)).)*$');
});
