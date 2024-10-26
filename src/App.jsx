import './App.css';
import Navbar from './components/navbar/Navbar';
import Body1 from './components/body1/Body1';
import Engagement from './components/engagement/Engagement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body1 />} />
        <Route path="/engagement" element={<Engagement />} />
      </Routes>
    </Router>
  );
}

export default App;
