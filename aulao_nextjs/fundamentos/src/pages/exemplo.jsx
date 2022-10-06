import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <div>
            <Layout titulo="Usando componentes">
                <Cabecalho titulo='Next.js & React' />
                <Cabecalho titulo='Aprenda Next.js na prática' />
            </Layout>
        </div>
    )
}