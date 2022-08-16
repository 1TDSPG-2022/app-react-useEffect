import React, { useState } from "react";
import { useEffect } from "react";
import Api from "./components/Api"

export default function App() {

    useStateSnippet

    const [valorState, setvalorState] = useState()

    
    
    return (
        <div>
            <h1>Iniciona dos Estudos com useEffect</h1>

            <api>
                <h2>Lista de Repositorios do GitHub</h2>
                <p>Listas</p>
                <h1>Classes</h1>
            </api>
        </div>
    )
}