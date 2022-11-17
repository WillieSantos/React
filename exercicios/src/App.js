import BomDia from "./componentes/BomDia";
import { BoaNoite, BoaTarte } from "./componentes/Multiplos";
import Primeiro from "./componentes/Primeiro";
import Saudacao from "./componentes/Saudacao";



function App() {
  return (
    <div className="App">      
      <Primeiro />
      <BomDia nome='Willie'/>
      <BoaTarte nome='Salatiel' />
      <BoaNoite nome='Cleoneide' />
      <Saudacao  />
    </div>
  );
}

export default App;
