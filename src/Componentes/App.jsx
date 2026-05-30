import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../Css/App.css'
import Tapetes from '../Componentes/Tapetes';
import Bolsas from '../Componentes/Bolsas';
import Sobre from '../Componentes/Sobre_nos';
import Contato from '../Componentes/Contato';
import Home from '../Componentes/Home'


function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tapetes" element={<Tapetes />} />
        <Route path="/Bolsas" element={<Bolsas />} />
        <Route path="/Sobre_nos" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App
