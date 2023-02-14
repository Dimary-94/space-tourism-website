import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CrewPage from './pages/CrewPage';
import DestinationPage from './pages/DestinationPage';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/destination' element={<DestinationPage />} />
          <Route path='/crew' element={<CrewPage />} />
          <Route path='/technology' element={<TechnologyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
