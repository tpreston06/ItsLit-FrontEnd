import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Litty from './components/Litty';
import ItsLit from './components/ItsLit'
import Edit from './components/EditItsLit'
import Create from './components/CreateItsLit';

// import { Route, Switch, NavLink, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <h1>Candle Menu</h1>
      <Router>
        <Routes>
          <Route path='/' element={<Litty />} />
          <Route path='/:id' element={<ItsLit />} />
          <Route path=':id/edit' element={<Edit />} />
          <Route path=':id/create' element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
