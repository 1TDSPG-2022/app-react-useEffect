import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Api from './components/api/Api.jsx';

function App() {

  const [valor, setValor] = useState(0)

  useEffect(() => {
    console.log('Renderizou')
  }, [valor])

  return (
    <div className="App">
      <h1>Estudos Use-Effect</h1>

      <Api>
        <h3>Lista de repósitorios do GitHub</h3>
      </Api>

      <p>Valor = {valor}</p>
      <button onClick={() => setValor(valor + 1)}>Aumentar</button>
    </div>
  );
}

export default App;
