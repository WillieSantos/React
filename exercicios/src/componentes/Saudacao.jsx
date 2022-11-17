import React, { useState } from 'react'

const Saudacao = props => {
    const [tipo, setTipo] = useState('Bom dia')
    const [nome, setNome] = useState('Willie')  

   
        return (            
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder='Tipo...' 
                value={tipo} onChange={e => setTipo(e.target.value)} />
                <input type='text' placeholder='Nome...' 
                value={nome} onChange={e => setNome(e.target.value)} />
            </div>
        )
    }

    export default Saudacao
