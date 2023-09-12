import logo from "./logo.svg";
import "./App.css";
import Componente from "./Componente";

function App() {
  const numeros = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Componente numeros={numeros} />
    </div>
  );
}

export default App;
