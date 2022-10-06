import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcParOuImpar(number2) {     
      
    const n2 = parseInt(number2)
    if(n2 % 2 == 0) return "Par"
    else return "Ímpar"
}

function calcFatorial(n) {

    //const n = parseInt(num)

    if (n < 0 || n === '') return "Não Existe"
    if (n == 0) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [num, setNum] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [num2, setNum2] = useState("Par ou Ímpar")

    useEffect(function () {
        setFatorial(calcFatorial(num))
    }, [num])

    useEffect(function() {
        setNum2(calcParOuImpar(num))
    }, [num])

    useEffect(function () {
        if (fatorial > 1000000)
            document.title = "Eita!!"
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01 " />
            <div className='center'>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>

                <input type="number" className="input"
                    value={num} onChange={e => setNum(e.target.value)} />

            </div>
            <SectionTitle title="Exercício #02 " />
            <div className="center">
            <div>
                <span className="text">Status: </span>
                <span className="text red">{num2}</span>
            </div>
            </div>
        </div>
    )
}

export default UseEffect
