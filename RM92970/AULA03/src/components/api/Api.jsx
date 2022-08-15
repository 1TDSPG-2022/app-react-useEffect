import React from 'react'

export default function Api(props) {
    return (
        <div>
            <h2>Api</h2>
            <div>{props.children}[0]</div>
        </div>
    )
}

// Use effects é usado para prestar atenção
// no carregamento inicial do componente ou na atualização de algo que há no componente, 
