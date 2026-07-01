import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MirchiPoint from './pages/MirchiPoint';
import FruitBox from './pages/FruitBox';
import OGsoda from './pages/Ogsoda';
import IdlyDosa from './pages/IdlyDosa';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mirchi-point" element={<MirchiPoint />} />
          <Route path="/fruit-box" element={<FruitBox />} />
          <Route path="/og-soda" element={<OGsoda />} />
          <Route path="/idly-dosa" element={<IdlyDosa />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
