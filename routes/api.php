<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/conta', 'EstudoContaController@index')->name('conta.all');
Route::get('/contaperfil/{perfil}', 'EstudoContaController@buscarPerfil')->name('conta.perfil');

Route::post('/cadconta', 'EstudoContaController@store');

Route::delete('/removeconta/{id}', 'EstudoContaController@destroy');
