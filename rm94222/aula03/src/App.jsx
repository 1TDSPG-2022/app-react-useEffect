import React, { useEffect, useState } from "react"
import Api from "./components/api/Api"

export default function App() {

    const [valorState, setvalorState] = useState()

    useEffect(() => {
        console.log('Renderizou!')
    }, [valorState])

    const[repositorios, setRepositorios] = useState ()

    useEffect(async () => {
        const response = await fetch("")
        const data = await response.json()

        setRepositorios(data)
    }, [])
    

   
    return (
        <div>
            <h1>Iniciona dos Estudos com useEffect</h1>

            <Api>
                <h2>Lista de Repositorios do GitHub</h2>
                <p>Listas</p>
                <h1>Classes</h1>
            </Api>
            <p>Valor de State = {valorState}</p>
            <button onClick={() => setvalorState(valorState + 1)} > AUMENTAR</button>

            <div>
                <h2>Repositórios</h2>
                <ul>
                    {repositorios.map((repo,i) =>
                        <li key={i}>{repo.name.title}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}