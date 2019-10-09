<?php

$menu = [
    ['titulo' => 'Home', 'link' => '#home'],
    ['titulo' => 'Sobre', 'link' => '#sobre'],
    ['titulo' => 'Contato', 'link' => '#contato']
];

$dados = [
    ['titulo' => 'Titulo 1', 'descricao' => 'Descrição 1', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 2', 'descricao' => 'Descrição 2', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 3', 'descricao' => 'Descrição 3', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 4', 'descricao' => 'Descrição 4', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 5', 'descricao' => 'Descrição 5', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 6', 'descricao' => 'Descrição 6', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 7', 'descricao' => 'Descrição 7', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
    ['titulo' => 'Titulo 8', 'descricao' => 'Descrição 8', 'detalhe' => 'Detalhe', 'imagem' => 'https://materializecss.com/images/office.jpg', 'link' => '#teste'],
];

if(isset($_GET['menu'])){
    echo json_encode($menu);
    exit;
}

if(isset($_GET['dados'])){
    echo json_encode($dados);
    exit;
}