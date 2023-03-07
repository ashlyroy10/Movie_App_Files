import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import AddMovie from './AddMovie';
import './App.css';
import Home from './Home';
import Navigation from './Navigation';
import SearchMovie from './SearchMovie';

function App() {
  return (
    <div className="App">
     <Navigation></Navigation>
     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/addmovie' element={<AddMovie/>}></Route>
      <Route path='/searchmovie' element={<SearchMovie/>}></Route>
      <Route path='/aboutus' element={<AboutUs/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
