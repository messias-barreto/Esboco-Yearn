import React, { Component } from 'react';

export default class GuardaPerfil extends Component{
    render(){
        return(
            <div className="col-md-2">
                <div className="card div1" id="guardaperfil">
                    <h5 className="card-header">{this.props.nome}</h5>
                    {this.props.lista}
                </div>
            </div>
        );
    }
}
