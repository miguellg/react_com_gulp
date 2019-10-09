import React from 'react'
import NavMenu from './nav-menu';
import axios from 'axios';

class Navbar extends React.Component {

    constructor(props){
        super(props)
        this.state = {menu: []};
    }

    componentDidMount(){
        let self = this 
        axios.get('http://localhost:8000/servidor.php?menu=1').then(function(resp){
            self.setState({
                menu: resp.data
            })
        })
    }

    render(){
        let menu = this.state.menu
        return (            
            <nav>                
                <div className="nav-wrapper green">
                    <div className='container'>
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu} />                        
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar