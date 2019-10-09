import React from 'react'

class Titulo extends React.Component {

    constructor(props){
        super(props);

        this.state = {hora: new Date()};
    }

    componentDidMount(){
        this.horaId = setInterval(
            ()=> this.atualizarSegundos(),
            1000
        )
    }

    atualizarSegundos(){
        this.setState({hora: new Date()})
    }

    componentWillUnmount(){
        clearInterval(this.horaId);
    }

    render(){
        return (
            <h1>Titulo Novo {this.state.hora.toLocaleTimeString()}</h1>
        )
    }
}

export default Titulo