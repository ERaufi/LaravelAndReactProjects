import logo from './logo.svg';
import './App.css';
import DynamicSelect from '../src/Pages/ReactSelect';
import Sidebar from './Layout/Sidebar';
import AdminDashboard from './Layout/AdminDashboard';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <DynamicSelect />
    </div>
  );
}

export default App;
