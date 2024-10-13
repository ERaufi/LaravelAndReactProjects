import logo from './logo.svg';
import './App.css';
import DynamicSelect from '../src/Pages/ReactSelect';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoyrideDemo from './Pages/Joyride';
import DynamicForm from './Pages/DynamicForm';
import BarChart from './Pages/Charts/BarChart';
import DonutChart from './Pages/Charts/DonutChart';
import LineChart from './Pages/Charts/LineChart';
import PieChart from './Pages/Charts/PieChart';
import StackedBarChart from './Pages/Charts/StackBarChart';


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
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/stackbar-chart" element={<StackedBarChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
