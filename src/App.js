import './App.css';
import { } from 'react-icons/fa';
import ComponenteTest from "./components/ComponenteTest";
import { Button } from "react-bootstrap";

function App() {
  const alerta = () => {
    alert('ma che cazzio faccio')
  }

  return (
    <div className="App">
      <Button onClick={alerta}> toccami</Button>
      <ComponenteTest name='' />
    </div>
  );
}

export default App;
