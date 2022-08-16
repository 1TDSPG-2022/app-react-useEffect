import React, { useEffect, useState } from "react"
import Api from "./components/api/Api"

export default function App() {

    const [valorState, setvalorState] = useState()

    useEffect(() => {
        console.log('Renderizou!')
        
    }, [valorState])

   
    return (
        <div>
            <h1>Iniciona dos Estudos com useEffect</h1>

            <Api>
                <h2>Lista de Repositorios do GitHub</h2>
                <p>Listas</p>
                <h1>Classes</h1>
            </Api>
        </div>
    )
}