
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './View/Home/Index';
import Banner from './View/Home/Banner';
import SearchBar from './Component/SearchBar/SearchBar';
import OurMenu from './View/Home/OurMenu';
import BookTable from './View/Home/BookTable';

function App() {
  return (
   <>
<Router>
  <Routes>
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/banner' element={<Banner/>} />
      <Route path='/searchbar' element={<SearchBar/>} />
      <Route path='/ourmenu' element={<OurMenu/>} />
      <Route path='/booktable' element={<BookTable/>} />
    </Route>
  </Routes>
</Router>
   </>
  );
}

export default App;
