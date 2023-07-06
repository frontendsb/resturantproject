
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './View/Home/Index';

function App() {
  return (
   <>
<Router>
  <Routes>
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>} />
    </Route>
  </Routes>
</Router>
   </>
  );
}

export default App;
