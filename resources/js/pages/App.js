import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GuardaPerfil from '../components/GuardaPerfil';
import Card from '../components/Card';
import Formulario from '../components/Formulario';
import AnaliseConta from '../components/AnalisaConta';
import './app.css';

const URL = 'http://127.0.0.1:8000/api';

export default class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            nome: '',
            perfil: '',
            situacao: '',

            //Fatores------------
            listaPerfil: [],
            listaConcorrente_direto: [],
            listaConcorrente_indireto: [],
            listaInfluenciadores: [],
            listaDealer: [],
            listaVeiculo_de_comunicacao: [],
        }
    }

    //Listar o Estudo contas
    componentDidMount(){
        axios.get(`${URL}/conta`).then(response => {
            const listaPerfil = response.data.filter(conta => conta.tipo_perfil === 'perfil');
            const listaConcorrente_direto = response.data.filter(conta => conta.tipo_perfil === 'concorrente_direto');
            const listaConcorrente_indireto = response.data.filter(conta => conta.tipo_perfil === 'concorrente_indireto');
            const listaInfluenciadores = response.data.filter(conta => conta.tipo_perfil === 'influenciadores');
            const listaDealer = response.data.filter(conta => conta.tipo_perfil === 'dealer');
            const listaVeiculo_de_comunicacao = response.data.filter(conta => conta.tipo_perfil === 'veiculo_de_comunicacao');

            this.setState({ listaPerfil,
                            listaConcorrente_direto,
                            listaConcorrente_indireto,
                            listaInfluenciadores,
                            listaDealer,
                            listaVeiculo_de_comunicacao })
        })
    }

    render(){

        return (
            <div className="container-fluid">
               <h1 className="text-center title">Estudos de Contas</h1>
               <hr></hr>

               <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample"
                                                role="button" aria-expanded="false"
                                                aria-controls="collapseExample">
                    Cad: Nova Conta
                </a>

               <div className="row">
                    <div className="collapse col-md-12" id="collapseExample">
                        <div className="card card-body"><Formulario metodo= {this.componentDidMount.bind(this)} /> </div>
                    </div>
                </div>

                <br></br>

                <div className="row perfil">
                    <GuardaPerfil nome="Perfil" lista = { this.state.listaPerfil.map(lista =>
                        <Card   nome = {lista.nome}
                                id = {lista.id}
                                tipo_conta = {lista.tipo_perfil}
                                lista = {this.componentDidMount.bind(this)}
                                draggable="true"
                        />
                    )}/>

                    <GuardaPerfil nome="Concorrentes Diretos" lista = { this.state.listaConcorrente_direto.map(lista =>
                          <Card     nome = {lista.nome}
                                    id = {lista.id}
                                    tipo_conta = {lista.tipo_perfil}
                                    lista = {this.componentDidMount.bind(this)}
                                    draggable="true"
                            />
                          )
                    }/>

                    <GuardaPerfil nome="Concorrentes Indireto" lista = { this.state.listaConcorrente_indireto.map(lista =>
                          <Card nome = {lista.nome}
                                id = {lista.id}
                                tipo_conta = {lista.tipo_perfil}
                                lista = {this.componentDidMount.bind(this)} draggable="true"
                            />
                          )
                    }/>

                    <GuardaPerfil nome="Influenciadores" lista = { this.state.listaInfluenciadores.map(lista =>
                        <Card   nome = {lista.nome}
                                id = {lista.id}
                                tipo_conta = {lista.tipo_perfil}
                                lista = {this.componentDidMount.bind(this)} draggable="true"
                            />
                       )
                 }/>

                    <GuardaPerfil nome="Dealer" lista = { this.state.listaDealer.map(lista =>
                        <Card   nome = {lista.nome}
                                id = {lista.id}
                                tipo_conta = {lista.tipo_perfil}
                                lista = {this.componentDidMount.bind(this)}
                                draggable="true"
                            />
                        )
                    }/>

                    <GuardaPerfil nome="V. Comunicação" lista = { this.state.listaVeiculo_de_comunicacao.map(lista =>
                        <Card   nome = {lista.nome}
                                id = {lista.id}
                                tipo_conta = {lista.tipo_perfil}
                                lista = {this.componentDidMount.bind(this)}
                                draggable="true"
                            />
                          )
                    }/>
               </div>

                <div className="row drag">
                    <AnaliseConta />
                </div>

            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
