<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EstudoConta extends Model
{
    //
    protected $fillable = ['id','nome', 'tipo_perfil', 'situacao'];
}
