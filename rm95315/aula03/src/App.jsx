import React, { useEffect, useState } from "react"
import Api from "./components/api/Api"
import Corpo from "./components/Corpo"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {

    // const [valorState, setvalorState] = useState(0)

    // useEffect(() => {
    //     console.log('Renderizou!')
    // }, [valorState])

    const numerica = 0
    const [ValorState, setvalorState] = useState(0)
    function mudar(){
        if (ValorState = 0){
            setvalorState('bom dia')
            numerica +=1
        }
        else{
            setvalorState(0 + numerica)
        }
    }

    //const [repositorios, setRepositorios] = useState([])

    // useEffect(async () => {

    //     const response = await fetch("https://api.github.com/users/alecarlosjesus/repos")
    //     const data = await response.json()

    //     setRepositorios(data)

    // }, [])

    return (
        <div>
            <h1>Início dos Estudos com useEffects</h1>

            {/* <Api>
                <h2>Lista de Repositórios do GitHUB</h2>
                <p>Listas</p>
                <h1>Classes</h1>
            </Api>
            <p>Valor de State = {valorState}</p>
            <button onClick={() => setvalorState(valorState + 1)}>AUMENTAR</button> */}
            <p>O numero de state é : {ValorState}</p>
            <button onClick={()=> setvalorState(ValorState + 1)}>cola</button>

            <Header></Header>
            <Corpo></Corpo>
            <Footer></Footer>
            {/* <div>  
                <h2>Repositórios</h2>
                <ul>
                    {repositorios.map((repo, i) =>
                        <li key={i}>{repo.name}</li>
                    )}
                </ul>
            </div> */}

        </div>
    )
}