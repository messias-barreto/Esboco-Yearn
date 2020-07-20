import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import GuardaPerfil from './GuardaPerfil';
import Card from './Card';
import Formulario from './Formulario';
import AnaliseConta from './AnalisaConta';


export default class App extends Component{
    constructor(props){
        super(props);

        //this.pegarTodosPerfis = this.pegarTodosPerfis.bind(this);

        this.state = {
            nome: '',
            perfil: '',
            situacao: '',

            //Fatores------------
            //listaTodoPerfil: [],
            listaPerfil: [],
            listaConcorrente_direto: [],
            listaConcorrente_indireto: [],
            listaInfluenciadores: [],
            listaDealer: [],
            listaVeiculo_de_comunicacao: [],

        }
    }

    //Metodos
    //Listar o Estudo contas
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/conta').then(response => {
            //const listaTodoPerfil = response.data;
            
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

    //Drop----------------------
    
    render(){

        return (
            <div className="container-fluid">
               <h1 className="text-center">Estudos Contas</h1>
               <hr></hr>
               
               <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Cad: Novo Estudo Conta
                </a>
                <br></br>

               <div className="row">
                    <div className="collapse col-md-12" id="collapseExample">
                        <div className="card card-body"><Formulario metodo= {this.componentDidMount.bind(this)} /> </div>
                    </div>
                </div>

                <br></br>
                
                <div className="row">  
                    <hr></hr>

                    <GuardaPerfil nome="Perfil" lista = { this.state.listaPerfil.map(lista => 
                        <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/> 
                    )}/>

                    <GuardaPerfil nome="Concorrentes Diretos" lista = { this.state.listaConcorrente_direto.map(lista => 
                          <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/>
                          )
                    }/>

                    <GuardaPerfil nome="Concorrentes Indireto" lista = { this.state.listaConcorrente_indireto.map(lista => 
                          <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/>
                          )
                    }/>

                    <GuardaPerfil nome="Influenciadores" lista = { this.state.listaInfluenciadores.map(lista => 
                       <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/>
                       )
                 }/>

                    <GuardaPerfil nome="Dealer" lista = { this.state.listaDealer.map(lista => 
                          <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/>
                          )
                    }/>

                    <GuardaPerfil nome="Veiculo de Comunicação" lista = { this.state.listaVeiculo_de_comunicacao.map(lista => 
                          <Card nome = {lista.nome} id = {lista.id} tipo_conta = {lista.tipo_perfil} lista = {this.componentDidMount.bind(this)} draggable="true"/>
                          )
                    }/>
               </div>

               <hr></hr>
                <div className="row">
                    <AnaliseConta/>
                </div>
                              
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
