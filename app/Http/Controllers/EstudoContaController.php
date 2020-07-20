<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\EstudoConta;

class EstudoContaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $estudoconta = EstudoConta::all();
        return response()->json($estudoconta);
    }

    public function buscarPerfil($perfil){
        $estudoconta = EstudoConta::where('tipo_perfil', $perfil)->get();
        return response()->json($estudoconta);
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $estudoconta = EstudoConta::create($request->all());
        response()->json(['message' => 'Conta Adicionada', 'estudoconta' => $estudoconta]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $estudoconta = EstudoConta::find($id)->delete();
        return response()->json(['message' => 'Conta Removida']);
    }
}
