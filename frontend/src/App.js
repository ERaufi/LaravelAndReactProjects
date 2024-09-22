import logo from './logo.svg';
import './App.css';
import DynamicSelect from '../src/Pages/ReactSelect';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoyrideDemo from './Pages/Joyride';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/react-select" element={<DynamicSelect />} />
          <Route path="/intro-js" element={<JoyrideDemo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
