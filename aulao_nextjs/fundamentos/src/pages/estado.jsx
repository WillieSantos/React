import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() { 
      
    const [num, setNum] = useState(3)

    return (
        <Layout titulo="Componente com Estado">
            <div>{num} </div>
            <button onClick={() => setNum(num + 1)}>+1</button>
        </Layout>
    )
}

