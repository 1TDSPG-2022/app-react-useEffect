import React, { useState } from "react"
import { useEffect } from "react"
import Api from "./components/api/Api"

export default function App(){

    const [valorState, setValorState] = useState(0)

    useEffect(() => {
        console.log('Renderizou!')
    }, [valorState])

    const [repositorios, setRepositorios] = useState([])

    useEffect(async () => {
        const response = await fetch("https://api.github.com/users/tiemyz/repos")
        const data = await response.json()

        setRepositorios(data)

    }, [])

    return (
        <div>
            <h1>Início dos Estudos com useEffects</h1>

            <Api>
                <h2>Lista de Repositórios do GitHUB</h2>
                <p>Listas</p>
                <h1>Classes</h1>
            </Api >

            <p>Valor de State = {valorState}</p>
            <button onClick={() => setValorState(valorState + 1)}>AUMENTAR</button>

            <div>
                <h2>Repositórios</h2>
                <ul>
                    {repositorios.map((repo,i)=>
                        <li key={i}>{repo.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}