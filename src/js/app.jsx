import ReactDom from 'react-dom'
import React from 'react'

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';
import ListaCartao from './cartao/lista-cartao';

let App = (
    <div>
        <Navbar titulo='React' />
        <div className='container'>
            <Titulo/>
            <ListaCartao qtdLinha='4' />
        </div>
    </div>
);

ReactDom.render(App, document.getElementById('app'))
