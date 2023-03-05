import React from "react"

export function Arrays(){

  const produtos = ['Notebook', 'Tablet', 'Smartphone']
  const filmes = ['Before Sunrise', 'Before Sunset','Before Midnight']


  //O cenário mais comum é trabalhar com array's de objetos.

  const livros = [
  { nome: 'A Game of Thrones', ano: 1996},
  { nome: 'A Clash of Kings' ,ano: 1998 },
  { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
        {produtos.map(produto => (
        <li key={produto}>{produto}</li>
        ))}
        <br></br>
        {filmes.map(filmes=>(
          <li key={filmes}>{filmes}</li>
        ))}
        <br></br>
        {livros.map(({nome,ano})=>(
          <li key={nome}>{nome}, {ano}</li>
        ))}
        <br></br>
        {livros.filter(({ano})=> ano >=1998).map(({nome,ano})=>(
          <li key={nome}>{nome}, {ano}</li>
        ))}
        
    </ul>

  )
}

/*
<ul>
{livros.map(({livro}) => (
<li key={livro.nome}>{livro.nome}</li>
))}
</ul>

Como estamos utilizando livro.nome várias vezes, podemos simplesmente
desestruturar as propriedades do objeto livro como parâmetros da função
de callback e utilizar somente nome e livro no código

<ul>
{livros.map(({livro}) => (
<li key={nome}>{nome}</li>
))}
</ul>

------------------------------------------------------------------------------

{livros.filter(({ano})=> ano >=1998).map(({nome,ano})=>(
          <li key={nome}>{nome}, {ano}</li>
        ))}

Estamos filtrando os livros lançados de 1998 para frente somente,
desestruturando o ano no método filter.
Na desestruturação, é necessário colocar os parênteses no 
parâmetro, mesmo que seja desestruturada somente 1 propriedade 
do objeto.

*/

