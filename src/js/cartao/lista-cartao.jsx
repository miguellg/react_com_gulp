import React from 'react'
import Cartao from './cartao';
import Busca from '../busca/busca';
import axios from 'axios';

class ListaCartao extends React.Component {

    constructor(props){
        super(props)

        this.state = {cliques: 0, busca: '', dados: [], servidor: []}

        this.addClique = this.addClique.bind(this)
        this.atualizaBusca = this.atualizaBusca.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    addClique(){
        
        // this.setState({cliques: parseInt(this.state.cliques) + 1})

        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }))
    }

    atualizaBusca(evento){
        this.setState({busca: evento.target.value})
        if( evento.target.value == ""){
            this.setState({dados: this.state.servidor})
        }
    }

    onSubmit(evento){
        let busca = this.state.busca;
        let dados = this.state.servidor;

        let newDados = dados.filter((item) => {
            if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1 ||
                item.detalhe.toUpperCase().indexOf(busca.toUpperCase()) > -1){
                return item
            }
        })

        this.setState({dados: newDados})
        
        evento.preventDefault()
    }

    componentDidMount(){
        let self = this
        axios.get('http://localhost:8000/servidor.php?dados=1').then(function(resp){
            self.setState({
                dados: resp.data,
                servidor: resp.data
            })
        })
    }


    render(){
        let noticias = this.state.dados

        let qtd = this.props.qtdLinha
        let aux = []
        let novaLista = []
        for(let k = 0; k < noticias.length; k++){
            aux.push(noticias[k])
            if(aux.length == qtd){
                novaLista.push(aux);
                aux = [];
            }else if(k == noticias.length - 1){
                novaLista.push(aux);
            }
        }
        

        let classCol = 'col m'+parseInt(12 / qtd)
        let self = this

        return (
            <div>
                <div className='row'>
                    <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca} onSubmit={this.onSubmit}/>
                </div>                
                <p>Quantidade de cliques: {this.state.cliques}</p>
                {
                    novaLista.map((row, i) => {
                        return (<div key={i} className="row">
                            {
                                row.map((col, index) => {
                                    return (
                                        <div key={index} className={classCol}>
                                            <Cartao dados={col} addClique={self.addClique}/>
                                        </div>
                                    )
                                })
                            }
                        </div>)
                    })
                }    
            </div>        
        )
    }
}

export default ListaCartao 