import React from 'react'
import Api from ".components/api/Api"
import {useEffect} from 'react'
import {useState } from 'react'

export default function App() {

    const [valorState, setValorState] = useState()

    useEffect(() => {
        console.log('Renderizou!')
    }, [valorState])

    const [repositorios, setRepositorios] = useState([])

    useEffect( async () => {
        
        const response = fetch("https://api.github.com/users/evelywath/repos")
        const data  = await response.json()

        setRepositorios(data)

    }, [])

    return(
        <div>
            <h1>Início dos Estudos com useEffects</h1>

            <Api>
            <h2>Lista de respositórios do GitHUB</h2>
            <p>Listas</p>
            <h1>Classes</h1>
            </Api>
            <p>Valor de State = {valorState}</p>
            <button onClick={() => setValorState(valorState + 1)}>AUMENTAR</button>

            <div>
                <h2>Respositórios</h2>
                <ul>
                    {repositorios.map((repo,i))} =>
                        <li key={i}>{repo.name}</li>
                    )
                </ul>
            </div>
        </div>
    )
}