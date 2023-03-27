import React from 'react'
import Titulo from './Titulo'
import Produto from './Produto'

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16GB RAM', '512GB'] },
    { nome: 'Smartphone', propriedades: ['2GB RAM', '128GB'] },
  ];

  return (
    <section>
      <Titulo texto='Produtos' />
      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </section>
  )
}

export default Produtos