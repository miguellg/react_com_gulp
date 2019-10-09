import React from 'react'

class NavMenu extends React.Component {
    constructor(props){
        super(props);

        this.state = {menuAtivo: 'Home'};
    }

    alteraActive(titulo, self){
        self.setState({menuAtivo: titulo})
    }

    render(){

        let self = this

        return (
            <ul id="nav-mobile" className="right">
                {
                this.props.menu.map((m, k) => {                    
                    return (
                        <li key={k} onClick={self.alteraActive.bind(null, m.titulo, self)} className={self.state.menuAtivo == m.titulo ? 'active': ''}><a href={m.link}>{m.titulo}</a></li>
                    )
                })
                }                                                    
            </ul>
        )
    }
}

export default NavMenu 