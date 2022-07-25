import React, { Component } from 'react';

export default class Card extends Component {
    excluirCard(){
        axios.delete('http://127.0.0.1:8000/api/removeconta/' + this.props.id)
        .then((res) => { console.log("Frase Removida com Sucesso!!") })

        this.props.lista();
    }

    arrastar(e){
        const conta = e.target;
        e.dataTransfer.setData('id', conta.id);
        e.dataTransfer.setData('tipo_conta', this.props.tipo_conta);
    }

    dropOver(e){
        e.stopPropagation();
    }

    render(){
        return(
            <>
                <div className="card drag1" id={this.props.id}
                                            onDragStart={this.arrastar.bind(this)}
                                            onDragOver={this.dropOver.bind(this)}
                                            className={this.props.className}
                                            draggable={this.props.draggable}>

                    <div className="card-body" id="card">
                        <h5 className="card-title">{this.props.nome}</h5>
                    </div>

                </div>
            </>
        );
    }
}
