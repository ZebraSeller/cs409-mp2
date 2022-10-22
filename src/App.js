import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom';
import NavBar from './parts/navbar';
import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';
import Gallery from './pages/gallery';


import './App.css';

const abc = 15

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar navTitle="MP2 PokeAPI"/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/list" element={<List />}/>
          <Route exact path="/gallery" element={<Gallery />}/>
          <Route exact path="/detail" element={<Detail />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
