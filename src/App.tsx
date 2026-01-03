import './App.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main/MainPage';
import Makeup from './pages/Category/Makeup/Makeup';
import Fragrance from './pages/Category/Fragrance/Fragrance';
import Skincare from './pages/Category/Skincare/Skincare';
import Header from './layouts/Header/Header';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
    </div>
  );
}

export default App;
