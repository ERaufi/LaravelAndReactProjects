import logo from './logo.svg';
import './App.css';
import DynamicSelect from '../src/Pages/ReactSelect';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoyrideDemo from './Pages/Joyride';
import DynamicForm from './Pages/DynamicForm';
import BarChart from './Pages/Charts/BarChart';
import DonutChart from './Pages/Charts/DonutChart';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/react-select" element={<DynamicSelect />} />
          <Route path="/intro-js" element={<JoyrideDemo />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/bar-chart" element={<BarChart />} />
          <Route path="/donut-chart" element={<DonutChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
