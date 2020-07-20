import React, { Component } from 'react';

export default class Formulario extends Component{
    constructor(props){
        super(props);

        this.onMudarNome = this.onMudarNome.bind(this);
        this.onMudarTipo_perfil = this.onMudarTipo_perfil.bind(this);
        this.onMudarSituacao = this.onMudarSituacao.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nome: '',
            tipo_perfil: 'perfil',
            situacao: 1,
        }
    }

    //Cadastro=============================== 
    onMudarNome(e){
        this.setState({nome: e.target.value})
    }

    onMudarTipo_perfil(e){
        this.setState({tipo_perfil: e.target.value})
    }

    onMudarSituacao(e){
        this.setState({situacao: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const conta = {
          nome: this.state.nome,
          tipo_perfil: this.state.tipo_perfil,
          situacao: parseInt(this.state.situacao)
        };

        axios.post('http://127.0.0.1:8000/api/cadconta/', conta)
        .then(res => console.log(res.data));

        //Limpar Campos
        this.setState({nome: '', tipo_perfil: 'perfil', situacao: 1})

        this.props.metodo();
    }

    render(){
        return(
            <div className="col-md-12">
               <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="col-md-4">
                            <input type="text" className="form-control" value={this.state.nome} onChange={this.onMudarNome}></input>
                        </div>

                        <div className="col-md-3">
                            <select id="inputState" className="form-control" value={this.state.tipo_perfil} onChange={this.onMudarTipo_perfil}>
                                <option value="perfil">Perfil</option>
                                <option value="concorrente_direto">Concorrente Direto</option>
                                <option value="concorrente_indireto">Concorrente Indireto</option>
                                <option value="influenciadores">Influenciadores</option>
                                <option value="dealer">Dealer</option>
                                <option value="veiculo_de_comunicacao">Veículo de Comunicação</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <select id="inputState" className="form-control" value = {this.state.situacao} onChange={this.onMudarSituacao}>
                                <option value='1'>Aguardando Captura</option>
                                <option value='2'>Posts Capturados</option>
                                <option value='3'>Impossivel Capturar</option>
                            </select>
                        </div>

                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Adicionar</button>
                        </div>
                    </div>
                </form>
                
                <hr></hr>
            </div>
        );
    }
}