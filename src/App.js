import {BrowserRouter as HashRouter, Route, Routes} from 'react-router-dom';
import NavBar from './parts/navbar';
import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';
import Gallery from './pages/gallery';
import NotFound from './pages/notfound';

import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar navTitle="MP2 PokeAPI"/>
        <Routes>
          <Route exact path="/mp2/" element={<Home />}/>
          <Route exact path="/mp2/list" element={<List />}/>
          <Route exact path="/mp2/gallery" element={<Gallery />}/>
          <Route exact path="/mp2/detail" element={<Detail />}/>
          <Route path="*" element={<NotFound />}/>
          <Route element={<NotFound />}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
