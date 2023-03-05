import React from "react"

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem

export function App() {
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = mario;

  const totalGastos = dados.compras.map(item => Number(item.preco.replace('R$ ', ''))).reduce((a,b)=>a+b)

  console.log(totalGastos)

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Total gasto: R$ {totalGastos} </p>
      <p>{totalGastos > 10000 ? 'Você está gastando muito' : ''}</p>
      <p>Situação: <span style={{color:dados.ativa ? 'green':'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span> </p>
      
    </div> 
    );
};

// Na primeira chave do styles, estamos dizendo que vai entrar uma expressão de js,
// ou seja, podemos passar um objeto, um array, um cálculo, uma variável etc...
