import React from "react";

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const refNotificacao = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao Carrinho.");

    clearTimeout(refNotificacao.current);
    refNotificacao.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      <p ref={refNotificacao}>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;

// Segue abaixo todo e qualquer tipo de cógdigo utilizando durante o aprendizado do curso de React, irei deixar-los como COMENTADOS para evitar conflito dentro do código, já que irei reutilizar o código principal diversas vezes.

/* // Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
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

const App = () => {
  const dados = mario;
  const valorTotal = dados.compras.map((item) =>
    Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
  <div>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativo' : 'Inativo'}</span></p>
    <p>Total gasto: R$ {valorTotal}</p>
    {valorTotal > 10000 && <span style={{fontWeight: 'bold'}}>Você está gastando muito!</span>}
  </div>
  );
}; */

// Código - 02:

/* const App = () => {
  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];

  return (
    <ul>
      {livros.map(({nome, ano}) => (
      <li key={nome}>
        {nome}, {ano}
        </li>
      ))}
    </ul>
  )

}; */

// Código - 03:

/* // Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  return (
    <section>
      {produtos.filter((produto) => Number(produto.preco.replace('R$ ', '')) > 1500)
            .map((produto) => (
              <div key={produto.id}>
                <h1>{produto.nome}</h1>
                <p>Preço: {produto.preco}</p>
                <ul>
                  {produto.cores.map((cor) => (
                    <li key={cor} style={{ backgroundColor: cor, color: 'white' }}>
                      {cor}
                    </li>
                  ))}
                </ul>
              </div>
              ))}
  </section>
  );
}; */

// Código 04 - Desáfio de Propiedades (Necessário os outros arquivos js, como Header, Home, Produto, Produtos e Titulo):

/* const App = () => {
  const {pathname} = window.location;

  let Pagina;
  if(pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return <div>
    <Header />
    <Pagina />
  </div>
} */

// Código 05 - Utilizando useState para manipular uma fetch a partir de um handleClick (Necessário o arquivo 'ProdutoState.js' para entender o código):

/* const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const r = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await r.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <ProdutoState dados={dados} />}
    </div>
  );
}; */

// Código 06 - useEffect 1/2:

/* const App = () => {
  const Produto = () => {
    React.useEffect(() => {
      function handleScroll(event) {
        console.log(event);
      }
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return <p style={{ height: "200vh" }}>Produto</p>;
  };

  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <p>Meu App</p>
      <button onClick={() => setAtivo(!ativo)}>Abrir</button>
      {ativo && <Produto />}
    </div>
  );
}; */
