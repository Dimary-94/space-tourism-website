import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FeedbackPage from './pages/FeedbackPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/feedback' element={<FeedbackPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
