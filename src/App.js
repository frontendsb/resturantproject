import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./View/Home/Index";
import Banner from "./View/Home/Banner";
import OurMenu from "./View/Home/OurMenu";
import BookTable from "./View/Home/BookTable";
import Profile from "./View/Profile/Index";
import Default from "./View/Profile/Default";
import Premium from "./View/Premium/Index";
import Subscribe from "./View/Premium/Subscribe";
import JoinForm from "./Component/JoinForm";
import Testimonial from "./View/Profile/Testimonial";
import Favourites from "./View/Favourites/Index";
import Team from "./View/Favourites/Team";
import Place from "./View/Favourites/Place";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/ourmenu" element={<OurMenu />} />
            <Route path="/booktable" element={<BookTable />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/default" element={<Default />} />
            <Route path="/premium" element={<Premium />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/joinform" element={<JoinForm />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/team" element={<Team />} />
            <Route path="/place" element={<Place />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
