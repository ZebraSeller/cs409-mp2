import {HashRouter, Route, Routes} from 'react-router-dom';
//import {useLocation} from 'react-router-dom';
import NavBar from './parts/navbar';
import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';
import Gallery from './pages/gallery';
import NotFound from './pages/notfound';

import './App.css';
//import { useEffect } from 'react';

function App() {
  return (
      <div className="App">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <NavBar navTitle="MP2 PokeAPI"/>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/list" element={<List />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/detail" element={<Detail />}/>
            <Route path="*" element={<NotFound />}/>
            <Route element={<NotFound />}/>
          </Routes>
        </HashRouter>
      </div>
  );
}

export default App;
