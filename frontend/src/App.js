import logo from './logo.svg';
import './App.css';
import DynamicSelect from '../src/Pages/ReactSelect';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoyrideDemo from './Pages/Joyride';
import DynamicForm from './Pages/DynamicForm';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/react-select" element={<DynamicSelect />} />
          <Route path="/intro-js" element={<JoyrideDemo />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
