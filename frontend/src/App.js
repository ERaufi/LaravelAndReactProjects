import logo from './logo.svg';
import './App.css';
import Sidebar from './Layout/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JoyrideDemo from './Pages/Joyride';
import DynamicForm from './Pages/DynamicForm';
import BarChart from './Pages/Charts/BarChart';
import DonutChart from './Pages/Charts/DonutChart';
import LineChart from './Pages/Charts/LineChart';
import PieChart from './Pages/Charts/PieChart';
import StackedBarChart from './Pages/Charts/StackBarChart';
import CountryCitySelect from './Pages/SelectOptions/CountryCitySelect';
import DynamicSelect from './Pages/SelectOptions/ReactSelect';
import MultiCountrySelect from './Pages/SelectOptions/MultiSelect';
import AddProduct from './Pages/CRUD/AddProduct';
import ProductsTable from './Pages/CRUD/ProductsTable';


function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/intro-js" element={<JoyrideDemo />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/bar-chart" element={<BarChart />} />
          <Route path="/donut-chart" element={<DonutChart />} />
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/stackbar-chart" element={<StackedBarChart />} />
          <Route path="/country-cities" element={<CountryCitySelect />} />
          <Route path="/react-select" element={<DynamicSelect />} />
          <Route path="/multi-select" element={<MultiCountrySelect />} />
          <Route path="/add-products" element={<AddProduct />} />
          <Route path="/products-table" element={<ProductsTable />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
