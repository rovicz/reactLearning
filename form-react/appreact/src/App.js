import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";
import Radio from "./Form/Radio";

const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState("");

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />
      <h2>Aparelhos</h2>
      <Select
        options={["Tablet", "Smartphone"]}
        value={produto}
        setValue={setProduto}
      />
      <h2>Usuário</h2>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <button>Enviar</button>
    </form>
  );
};

export default App;

// Código 01 - Primeira Alternativa:

/* const App = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button>Enviar</button>
    </form>
  );
}; */

// Código 02 - Segunda Alternativa:

/* const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
}; */

// Código 03 - Formulário Simples:

/* const formFields = [
  {
    id: "nome",
    label: "Nome",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
  },
  {
    id: "senha",
    label: "Senha",
    type: "password",
  },
  {
    id: "cep",
    label: "Cep",
    type: "text",
  },
  {
    id: "rua",
    label: "Rua",
    type: "text",
  },
  {
    id: "numero",
    label: "Numero",
    type: "text",
  },
  {
    id: "bairro",
    label: "Bairro",
    type: "text",
  },
  {
    id: "cidade",
    label: "Cidade",
    type: "text",
  },
  {
    id: "estado",
    label: "Estado",
    type: "text",
  },
];

const App = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [response, setReponse] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setReponse(response);
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado com Sucesso.</p>}
      <button>Enviar</button>
    </form>
  );
}; */

// Código 04 - Textarea:

/* const App = () => {
  const [mensagem, setMensagem] = React.useState(null);

  return (
    <form>
      <textarea
        id="mensagem"
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />

      <p>{mensagem}</p>
    </form>
  ); */

// Código 05 - Selection:

/* const App = () => {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
}; */

// Código 06 - Select:

/* const App = () => {
  const [radio, setRadio] = React.useState(null);

  function handleChange({ target }) {
    setRadio(target.value);
  }

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          checked={radio === "notebook"}
          onChange={handleChange}
        />
        Notebook
      </label>

      <label>
        <input
          type="radio"
          value="smartphone"
          checked={radio === "smartphone"}
          onChange={handleChange}
        />
        Smartphone
      </label>
    </form>
  );
}; */

// Código 07 - Checkbox 1/2:

/* const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleChecked("azul")}
          onChange={handleChange}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleChecked("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
    </form>
  );
}; */

// Código 08 - Checkbox 2/2:

/* const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{ textTransform: 'capitalize' }}>
          <input
            type="checkbox"
            value={cor}
            checked={handleChecked(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
      <ul>
        {cores.map((cor) => (
          <li key={cor}>{cor}</li>
        ))}
      </ul>
    </form>
  );
}; */
