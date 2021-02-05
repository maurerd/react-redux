import React, { useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from './components/menu';

function App() {
  const [inputBandas, setInputBandas] = React.useState("");
  const [inputSinger, setInputSinger] = React.useState("");
  const bandas = useSelector((state) => state.bandasReducer.bandas);
  const stateSinger = useSelector((state) => state.singerReducer.singer);

  const dispatch = useDispatch();

  function adicionarBanda(event) {
    event.preventDefault();

    const objBanda = {
      nome: inputBandas
    }
    dispatch({type: "ADICIONAR", value: objBanda});
  }

  function alterarSinger(event) {
    setInputSinger(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value });
  }

  return (
    <div>
      <Menu />
      <form>
      <label>Vocalista</label>
      <input placeholder="Digite um nome aqui" 
      value={inputSinger}
      onChange={alterarSinger}
      />
      </form>
      
    <h1>{stateSinger}</h1>

      <form onSubmit={adicionarBanda}>
      <label>Banda</label>
        <input
          placeholder="Digite o nome de uma banda"
          value={inputBandas}
          onChange={(event) => setInputBandas (event.target.value)}
          />
          <button>
            Enviar
          </button>
            
      </form>   
      {
        bandas.map((banda, index) => {
          return (
            <li key={index}>{banda.nome}</li>
          )
        })
      }
      </div>   
  );
}

export default App;
