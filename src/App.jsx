import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Modules from './components/Modules';
import ModuleOne from './components/ModuleOne';
import ModuleTwo from './components/ModuleTwo'; 
import { DonationProvider } from './context/DonationContext';

function App() {
  return (
    <DonationProvider>
      <BrowserRouter>
        <Header />
        <Modules />
        <Routes>
          <Route path="/ModuleOne" element={<ModuleOne />} />
          <Route path="/ModuleTwo" element={<ModuleTwo />} />
        </Routes>
      </BrowserRouter>
    </DonationProvider>
  );
}

export default App;
