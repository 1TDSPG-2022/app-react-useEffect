import React, { useEffect, useState } from 'react'
import Api from './components/api/Api'

export default function App() {
  const [valorState, setvalorState] = useState(0)

  useEffect(() => {
    console.log('Renderizou')
  }, [valorState])

  const [repositorios, setRepositorios] = useState([])

  useEffect(async () => {
    const response = await fetch(
      'https://api.github.com/users/GuilhermeRocha0/repos'
    )
    const data = await response.json()

    setRepositorios(data)
  }, [])

  return (
    <div>
      <h1>Inicio dos estudos com UseEffects</h1>

      <Api>
        <h2>Lista de Repositórios do GitHub</h2>
        <p>Listas</p>
        <h1>Classes</h1>
      </Api>
      <p>valor de State = {valorState}</p>
      <button onClick={() => setvalorState(valorState + 1)}>Aumentar</button>

      <div>
        <h2>Repositorios</h2>
        <ul>
          {repositorios.map((repo, i) => (
            <li key={i}>{repo.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
