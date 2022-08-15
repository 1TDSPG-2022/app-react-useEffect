import React, { useEffect } from 'react'
import { useState } from 'react'
import Api from './components/api/Api'

export default function App() {

const [valorState, setvalorState] = useState(0)

useEffect(() => {
    console.log('Renderizou!')
}, [valorState])

const [repositorios, setRepositorios] = useState

useEffect( async () => {
    const response = await fetch("https://api.github.com/users/vSeiji/repos")
    const data = await response.json()
    setRepositorios(data)
}, [])

return(
    <div>
        <h1>Início dos estudos com useEffects</h1>
        <h2>Lista de repositórios do Github</h2>

        <Api>
            <h2>Lista de repositorios do Github</h2>
            <p>Listas</p>
            <h1>Classes</h1>
        </Api>
        <p>Valor de State = {valorState}</p>
        <button onClick={() => setvalorState(valorState + 1)}>Aumentar</button>

        <div>
            <h2>Repositorios</h2>
            <ul>
                {repositorios.map((repo,i) =>
                    <li key={i}>{repo.name}</li>
                )}
            </ul>
        </div>

    </div>
    )
}