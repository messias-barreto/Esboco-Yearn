import React, { Component } from 'react';

export default class AnalisaConta extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            nome: '',
            perfil: ''
        }
       var contas = [];
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("id");
        var tipo_conta = ev.dataTransfer.getData('tipo_conta');

        const card = document.getElementById(data);
        card.style.display = 'block'

        ev.target.appendChild(card);

        console.log(tipo_conta)
        this.setState({ perfil: tipo_conta })
    }

    dragOver(ev){
        ev.preventDefault();
    }

    render(){
        return(
            <div className="col-md-4 text-center">
                <ul className="list-group" onDrop={this.drop.bind(this)} onDragOver={this.dragOver.bind(this)} className={this.props.className}>
                    <li className="list-group-item">Contas</li>
                    { this.props.children }
                </ul>
            </div>
        );
    }
}