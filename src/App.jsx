import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Accueil from './pages/Accueil'
import Cartographie from './pages/Cartographie'
import Financements from './pages/Financements'
import MarcheCarbone from './pages/MarcheCarbone'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/cartographie" element={<Cartographie />} />
          <Route path="/financements" element={<Financements />} />
          <Route path="/marche-carbone" element={<MarcheCarbone />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App