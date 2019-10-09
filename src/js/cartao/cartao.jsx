import React from 'react'

class Cartao extends React.Component {  
    constructor(props){
        super(props)

        this.contaCliques = this.contaCliques.bind(this)
    }

    contaCliques(){
        this.props.addClique();
    }
    
    render(){
        let valores = {
            titulo: this.props.dados.titulo,
            descricao: this.props.dados.descricao,
            img: this.props.dados.imagem,
            link: this.props.dados.link,
            detalhe: this.props.dados.detalhe,
        }

        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={valores.img} onClick={this.contaCliques}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{valores.titulo}<i className="material-icons right">more_vert</i></span>
                    <p>{valores.descricao}</p>
                </div>
                <div className="card-action">
                    <a href={valores.link}>Ver mais ...</a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{valores.titulo}<i className="material-icons right">close</i></span>
                    <p>{valores.detalhe}</p>
                </div>
            </div>
        )
    }
}

export default Cartao 