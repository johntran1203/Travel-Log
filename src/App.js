import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header';
import About from './pages/About';
import Destinations from './pages/Destinations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-gray-300 min-h-screen">
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path ='/about' element={<About />} />
        <Route path ='/destinations' element={<Destinations />} />
      </Routes>
        </Header>
        </BrowserRouter>
    </div>
  );
}

export default App;
